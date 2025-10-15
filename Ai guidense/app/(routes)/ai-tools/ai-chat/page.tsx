"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import EmptyState from "./_components/EmptyState";

const Page = () => {
 const [useInput,setUserInput]= useState<string>()
  return (
    <div className="p-6 space-y-6 px-10 md:px-24 lg:px-30 xl:px-45">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-3xl">AI Career Q/A Chat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            non nemo iusto rem eveniet id.
          </p>
        </div>
        <Button className="mr-2">+ Add Chat</Button>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col h-[70vh] border rounded-2xl p-4">
        <div>
          {/* empty state list */}
         <EmptyState selectedQuestion={(question:string)=>setUserInput(question)}/>
        </div>
        <div className="flex-1">{/* message list */}</div>
        <div className="flex justify-between items-center gap-4">
          <Input placeholder="Type here..." className="w-full" value={useInput} onChange={(event:any)=>setUserInput(event.target.value)}/>
          <Button size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
