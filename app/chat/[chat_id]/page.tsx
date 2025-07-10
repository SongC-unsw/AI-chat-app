"use client";

import { SendIcon } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({});
  const [model, setModel] = useState("deepseek-v3");

  const handleModelChange = () => {
    setModel(model === "deepseek-v3" ? "deepseek-r1" : "deepseek-v3");
  };

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

      {/* 输入框 */}
      <div className="w-2/3">
        <div className="flex flex-col items-center justify-center mt-4 shadow-lg border-[1px] border-gray-300 h-32 rounded-lg">
          <textarea
            className="w-full h-full rounded-lg p-3 h-30 focus:outline-none"
            placeholder="请输入问题"
            value={input}
            onChange={handleInputChange}
          ></textarea>
          {/* Model selection */}
          <div className="flex items-center justify-between w-full h-12 mb-2">
            <div>
              <div
                onClick={handleModelChange}
                className={`flex items-center justify-center rounded-lg border-[1px] px-2 py-1 ml-2 cursor-pointer ${
                  model === "deepseek-r1"
                    ? "border-blue-300 bg-blue-200"
                    : "border-gray-300"
                }`}
              >
                <p className="text-sm">深度思考(R1)</p>
              </div>
            </div>
            {/* 发送按钮 */}
            <div
              className="p-2 mr-4 rounded-full shadow-lg bg-black text-white cursor-pointer hover:bg-gray-800"
              onClick={handleSubmit}
            >
              <SendIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
