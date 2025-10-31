"use client";
import React, { useState } from "react";
import { useCMS } from "../context/CMSContext";
import { useTheme } from "../context/ThemeContext";

export default function ContactForm() {
  const { addMessage } = useCMS();
  const { theme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const validateEmail = (e: string) => /\S+@\S+\.\S+/.test(e);

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!name || !email || !msg) {
      setStatus({ type: "error", text: "Please fill all fields." });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ type: "error", text: "Please enter a valid email." });
      return;
    }

    addMessage({
  id: Date.now(),
  name,
  email,
  message: msg,
  date: new Date().toISOString(),
  read: false,
});

    setStatus({ type: "success", text: "Message sent — thank you!" });
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <section className="mt-12" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Get in Touch</h2>

        <form onSubmit={onSubmit} className={`mt-4 grid grid-cols-1 gap-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className={`p-3 rounded border ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}`} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={`p-3 rounded border ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}`} />
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message" rows={5} className={`p-3 rounded border ${theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}`} />
          <div className="flex items-center gap-4">
            <button className="px-5 py-3 bg-indigo-600 text-white rounded-lg">Send</button>
            {status && (
              <div className={status.type === "success" ? "text-green-400" : "text-red-400"}>
                {status.text}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
