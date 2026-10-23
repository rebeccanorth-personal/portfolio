// Pointer drag for absolutely positioned items inside a box. Writes left/top straight to the
// element so dragging never re-renders React. onClick fires when the pointer barely moved.
let z = 10;

export function nextZ() {
  return ++z;
}

export function startDrag(e: React.PointerEvent<HTMLElement>, box: HTMLElement | null, onClick?: () => void) {
  if (!box) return;
  const el = e.currentTarget;
  e.preventDefault();
  el.setPointerCapture(e.pointerId);
  el.classList.add("dragging", "moved");
  el.style.zIndex = String(nextZ());
  const sx = e.clientX, sy = e.clientY, ox = el.offsetLeft, oy = el.offsetTop;
  let moved = false;

  function move(ev: PointerEvent) {
    if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 4) moved = true;
    el.style.left = Math.max(0, Math.min(box!.clientWidth - el.offsetWidth, ox + ev.clientX - sx)) + "px";
    el.style.top = Math.max(0, Math.min(box!.clientHeight - el.offsetHeight, oy + ev.clientY - sy)) + "px";
  }
  function up() {
    el.classList.remove("dragging");
    el.removeEventListener("pointermove", move);
    el.removeEventListener("pointerup", up);
    el.removeEventListener("pointercancel", up);
    if (!moved) onClick?.();
  }
  el.addEventListener("pointermove", move);
  el.addEventListener("pointerup", up);
  el.addEventListener("pointercancel", up);
}
