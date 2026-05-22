"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function close() {
    setOpen(false);
    if (status === "success") setStatus("idle");
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="contact-btn fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
        style={{ background: "var(--accent)", color: "#fff" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 28px rgba(155,111,245,0.55), 0 0 0 3px rgba(155,111,245,0.18)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = ""; }}
      >
        <span>{open ? "✕" : "✉"}</span>
        <span className="hidden sm:inline">{open ? "Close" : "Get in touch"}</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30"
          onClick={close}
        />
      )}

      {/* Form panel */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-40 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: "min(380px, calc(100vw - 48px))",
            background: "var(--surface)",
            border: "1px solid var(--border-hover)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center gap-3"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              RN
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                Let&apos;s chat!
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                I&apos;d love to hear from you
              </p>
            </div>
          </div>

          {status === "success" ? (
            <div className="px-5 py-10 text-center">
              <p className="text-2xl mb-3">🎉</p>
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>You&apos;re in my inbox!</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>I&apos;ll get back to you soon — thanks for reaching out!</p>
            </div>
          ) : (
            <form onSubmit={submit} className="p-5 flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-xs font-medium mb-1 block" style={{ color: "var(--muted)" }}>Name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full text-sm px-3 py-2 rounded-xl outline-none transition-all"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium mb-1 block" style={{ color: "var(--muted)" }}>Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full text-sm px-3 py-2 rounded-xl outline-none transition-all"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>

              <div>
                <label className="text-xs font-medium mb-1 block" style={{ color: "var(--muted)" }}>Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind? 👋"
                  rows={4}
                  className="w-full text-sm px-3 py-2 rounded-xl outline-none resize-none transition-all"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>

              {status === "error" && (
                <p className="text-xs" style={{ color: "var(--accent)" }}>
                  Something went wrong — try emailing rebecnorth@gmail.com directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 disabled:opacity-50 cursor-pointer"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                }}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
