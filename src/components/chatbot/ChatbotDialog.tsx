"use client";

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getChatbotResponse, type ChatbotResponse } from "@/lib/actions";
import { SendHorizonal, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  isError?: boolean;
}

interface ChatbotDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ChatbotDialog({ isOpen, onOpenChange }: ChatbotDialogProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'initial-greeting', sender: 'bot', text: "Hello! I'm PortfolioPulse AI. Ask me anything about the showcased apps." }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const scrollableViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollableViewport) {
        scrollableViewport.scrollTop = scrollableViewport.scrollHeight;
      }
    }
  }, [messages]);

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response: ChatbotResponse = await getChatbotResponse(userMessage.text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.answer,
        isError: response.isError
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot submission error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: "Sorry, I couldn't connect to the AI. Please try again later.",
        isError: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px] lg:max-w-[650px] p-0 flex flex-col h-[70vh] max-h-[600px] bg-popover border-border shadow-glass backdrop-blur-lg">
        <DialogHeader className="p-6 pb-2 border-b border-border">
          <DialogTitle className="font-headline text-primary flex items-center">
            <Bot className="h-6 w-6 mr-2 text-primary" /> Portfolio AI Assistant
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex items-start space-x-3",
                  msg.sender === 'user' ? "justify-end" : ""
                )}
              >
                {msg.sender === 'bot' && <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />}
                <div
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    msg.sender === 'user' ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                    msg.isError ? "bg-destructive text-destructive-foreground" : ""
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
                {msg.sender === 'user' && <User className="h-6 w-6 text-accent flex-shrink-0 mt-1" />}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start space-x-3">
                <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="p-3 rounded-lg bg-muted text-muted-foreground">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <DialogFooter className="p-4 border-t border-border">
          <form onSubmit={handleSubmit} className="flex w-full space-x-2">
            <Input
              type="text"
              placeholder="Ask about an app..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow bg-input focus:ring-ring"
              disabled={isLoading}
              aria-label="Chat message input"
            />
            <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <SendHorizonal className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
