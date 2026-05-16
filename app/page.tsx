"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function sendMessage() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setReply(data.reply || data.error);
  }

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        AI Test Chat
      </h1>

      <textarea
        className="border w-full p-4 mb-4"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Scrivi un messaggio..."
      />

      <button
        onClick={sendMessage}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Invia
      </button>

      <div className="mt-8 whitespace-pre-wrap border p-4 rounded">
        {reply}
      </div>
    </main>
  );
}