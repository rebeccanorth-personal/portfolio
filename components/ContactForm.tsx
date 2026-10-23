"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

// Floating "Get in touch" button with a small form that posts to Formspree
export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) return setStatus("error");
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) return setStatus("error");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function toggle() {
    if (open && status === "success") setStatus("idle");
    setOpen(!open);
  }

  return (
    <>
      <button type="button" className="contact-fab" aria-expanded={open} aria-controls="contact-panel" onClick={toggle}>
        <i aria-hidden="true" />{open ? "Close" : "Get in touch"}
      </button>
      {open && (
        <div className="contact-panel" id="contact-panel" role="dialog" aria-label="Contact Rebecca">
          <p className="contact-title">Let&apos;s chat</p>
          <p className="mono">I&apos;d love to hear from you. Or email <a className="u-coral" href="mailto:rebecnorth@gmail.com">rebecnorth@gmail.com</a></p>
          {status === "success" ? (
            <p className="contact-done">You&apos;re in my inbox. I&apos;ll get back to you soon.</p>
          ) : (
            <form onSubmit={submit}>
              <label>Name<input name="name" required autoComplete="name" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Message<textarea name="message" required rows={4} /></label>
              {status === "error" && <p className="contact-err">That didn&apos;t send. Try again, or email me directly.</p>}
              <button className="btn p" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send"}</button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
