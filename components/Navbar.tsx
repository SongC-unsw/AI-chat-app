"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import React from "react";
import { ChatModel } from "@/db/schema";

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();
  const { data: chats } = useQuery({
    queryKey: ["chats"],
    queryFn: () => {
      return axios.post("api/get-chats");
    },
    enabled: !!user?.id,
  });
  const pathname = usePathname();
  return (
    <div className="h-screen bg-gray-50">
      <div className="flex items-center justify-center mt-4">
        <p
          className="font-bold text-2xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          Deepseek
        </p>
      </div>

      {/* Create new chat */}
      <div
        className="h-10 flex items-center justify-center mt-4 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <p className="flex items-center gap-2 text-white bg-blue-500 px-4 py-2 rounded-full font-medium cursor-pointer hover:bg-blue-400 hover:scale-105 transition-all duration-300">
          <PlusIcon className="w-4 h-4" />
          新建对话
        </p>
      </div>

      {/* List of chats */}
      <div className="flex flex-col gap-2 mt-4">
        {chats?.data?.chats?.map((chat: ChatModel) => (
          <div
            key={chat.id}
            className={`w-full h-10 hover:text-gray-500 cursor-pointer flex items-center px-2 ${
              pathname === `/chat/${chat.id}` ? "font-medium bg-blue-200" : ""
            }`}
            onClick={() => router.push(`/chat/${chat.id}`)}
          >
            <p className="text-sm line-clamp-1">{chat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
