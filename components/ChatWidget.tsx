"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.content }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Something went wrong — try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold shadow-lg transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, var(--accent), var(--teal))",
          color: "#fff",
          boxShadow: "0 4px 24px rgba(155,111,245,0.35)",
        }}
      >
        <span>{open ? "✕" : "✦"}</span>
        <span className="hidden sm:inline">{open ? "Close" : "Ask me anything"}</span>
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-40 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: "min(380px, calc(100vw - 48px))",
            height: "480px",
            background: "var(--surface)",
            border: "1px solid var(--border-hover)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--teal))",
              }}
            >
              RN
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                Ask about Rebecca
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                AI-powered · usually instant
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.length === 0 && (
              <div className="flex-1 flex flex-col gap-2 justify-end">
                {[
                  "What's Rebecca's biggest impact at Microsoft?",
                  "Tell me about her personal projects",
                  "What's she looking for in her next role?",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                    }}
                    className="text-left text-xs px-3 py-2 rounded-xl transition-all duration-150"
                    style={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.borderColor =
                        "var(--border-hover)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.borderColor =
                        "var(--border)")
                    }
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className="text-sm leading-relaxed max-w-[85%] px-3 py-2 rounded-xl"
                  style={
                    m.role === "user"
                      ? {
                          background: "linear-gradient(135deg, var(--accent), var(--teal))",
                          color: "#fff",
                        }
                      : {
                          background: "var(--surface-2)",
                          color: "var(--text)",
                        }
                  }
                >
                  {m.content}
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <p
                  className="text-sm px-3 py-2 rounded-xl"
                  style={{ background: "var(--surface-2)", color: "var(--muted)" }}
                >
                  Thinking…
                </p>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="p-3 flex gap-2"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask anything…"
              className="flex-1 text-sm px-3 py-2 rounded-xl outline-none"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-150 disabled:opacity-40"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--teal))",
                color: "#fff",
              }}
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}
