"use client";
import { SendIcon } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [input, setInput] = useState("");
  const [model, setModel] = useState("deepseek-v3");
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="h-[20vh]"></div>
      <div className="w-2/3">
        <p className="text-bold text-2xl text-center">有什么可以帮到你？</p>
        <div className="flex flex-col items-center justify-center mt-4 shadow-lg border-[1px] border-gray-300 h-32 rounded-lg">
          <textarea
            className="w-full h-full rounded-lg p-3 h-30 focus:outline-none"
            placeholder="请输入问题"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          {/* Model selection */}
          <div className="flex items-center justify-between w-full h-12 mb-2">
            <div>
              <div
                className={`flex items-center justify-center rounded-lg border-[1px] px-2 py-1 ml-2 cursor-pointer ${
                  model === "deepseek-r1"
                    ? "border-blue-300 bg-blue-200"
                    : "border-gray-300"
                }`}
              >
                <p className="text-sm">深度思考</p>
              </div>
            </div>
            {/* 发送按钮 */}
            <div className="p-2 mr-4 rounded-full shadow-lg bg-black text-white cursor-pointer hover:bg-gray-800">
              <SendIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
