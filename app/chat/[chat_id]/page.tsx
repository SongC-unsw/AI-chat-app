"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({});
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col items-center h-screen justify-between">
      <div className="flex flex-col w-2/3 gap-8 overflow-y-auto justify-between flex-1">
        <div className="h-4"></div>
        <div className="flex flex-col gap-8 flex-1">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`rounded-lg flex ${
                message?.role === "assistant"
                  ? "justify-start mr-18"
                  : "justify-end ml-10"
              }`}
            >
              {/* {message.role === "user" ? "User: " : "AI: "} */}
              <div
                className={`inline-block p-2 rounded-lg ${
                  message?.role === "assistant" ? "bg-blue-500" : "bg-slate-100"
                }`}
              >
                {message?.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 自动下滑 */}
      <div ref={endRef} className="h-4"></div>

      <form onSubmit={handleSubmit}>
        <input name="prompt" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
