"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react"; // Using MessageCircle, common for chat
import { ChatbotDialog } from './ChatbotDialog';

export function ChatbotFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          variant="default"
          size="icon"
          className="rounded-full w-14 h-14 shadow-xl bg-primary hover:bg-primary/90 text-primary-foreground animate-subtle-pulse"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        </Button>
      </div>
      {isOpen && <ChatbotDialog isOpen={isOpen} onOpenChange={setIsOpen} />}
    </>
  );
}
