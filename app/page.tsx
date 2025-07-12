"use client";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const [input, setInput] = useState("");
  const [model, setModel] = useState("deepseek-v3");
  const router = useRouter();
  const { user } = useUser();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  const handleModelChange = () => {
    setModel(model === "deepseek-v3" ? "deepseek-r1" : "deepseek-v3");
  };
  const queryClient = useQueryClient();
  const { mutate: createChat } = useMutation({
    mutationFn: async () => {
      return await axios.post("api/create-chat", {
        title: input,
        model: model,
      });
    },
    onSuccess: (response) => {
      router.push(`/chat/${response.data.id}`);
      queryClient.invalidateQueries({ queryKey: ["chats"] });
      setInput("");
    },
  });

  const handleSubmit = () => {
    if (input.trim() === "") {
      return;
    }
    if (!user) {
      router.push("/sign-in");
      return;
    }
    createChat();
  };
  return (
    <div className="flex flex-col items-center h-full">
      {/* <div className="h-[20vh]"></div> */}

      <div className="w-2/3">
        <div className="h-[20vh]"></div>
        <p className="text-bold text-2xl text-center">有什么可以帮到你？</p>
        <div className="flex flex-col items-center justify-center mt-4 shadow-lg border-[1px] border-gray-300 h-32 rounded-lg">
          <textarea
            className="w-full h-full rounded-lg p-3 h-30 focus:outline-none"
            placeholder="请输入问题"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
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
                <p className="text-sm">深度思考</p>
              </div>
            </div>
            {/* 发送按钮 */}
            <div
              onClick={handleSubmit}
              className="p-2 mr-4 rounded-full shadow-lg bg-black text-white cursor-pointer hover:bg-gray-800"
            >
              <SendIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
