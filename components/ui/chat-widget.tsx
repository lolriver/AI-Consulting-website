"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Hello! I'm your AI consultant. Are you looking to improve efficiency, customer support, or analytics?",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI response delay
        setTimeout(() => {
            let reply = "I can definitely help with that. Would you like to schedule a 15-minute strategy call?";

            const lowerInput = newMessage.content.toLowerCase();
            if (lowerInput.includes("efficiency") || lowerInput.includes("analytic")) {
                reply = "Great! Our automation tools typically save 20+ hours per week. I'd love to show you a demo. Shall we schedule a brief call?";
            } else if (lowerInput.includes("support") || lowerInput.includes("customer")) {
                reply = "Our AI agents can handle 80% of support queries automatically. Would you be interested in seeing a live case study?";
            }

            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: "assistant",
                    content: reply,
                },
            ]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] sm:w-[380px] rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-500 border border-cyan-500/30">
                                        <Bot size={20} />
                                    </div>
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-black"></span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">AI Consultant</h3>
                                    <p className="text-xs text-neutral-400">Usually replies instantly</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-neutral-400 hover:text-white hover:bg-white/10"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={18} />
                            </Button>
                        </div>

                        {/* Messages */}
                        <div className="h-[400px] flex flex-col bg-gradient-to-b from-black/50 to-transparent">
                            <ScrollArea className="flex-1 p-4">
                                <div className="space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={cn(
                                                "flex flex-col gap-2 rounded-2xl px-4 py-3 text-sm shadow-sm max-w-[85%] break-words",
                                                message.role === "assistant"
                                                    ? "bg-white/10 text-neutral-200 rounded-tl-none border border-white/5 mr-auto"
                                                    : "ml-auto bg-cyan-500 text-black font-medium rounded-tr-none shadow-cyan-500/10"
                                            )}
                                        >
                                            {message.content}
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex w-max max-w-[85%] flex-col gap-2 rounded-2xl rounded-tl-none px-4 py-3 text-sm bg-white/10 text-neutral-200 border border-white/5 mr-auto">
                                            <div className="flex gap-1">
                                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="h-2 w-2 bg-neutral-400 rounded-full" />
                                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="h-2 w-2 bg-neutral-400 rounded-full" />
                                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="h-2 w-2 bg-neutral-400 rounded-full" />
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </ScrollArea>

                            {/* Input */}
                            <form
                                onSubmit={handleSendMessage}
                                className="border-t border-white/10 bg-white/5 p-4"
                            >
                                <div className="relative flex items-center gap-2">
                                    <Input
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Type a message..."
                                        className="flex-1 bg-black/50 text-white placeholder:text-neutral-500 border-white/10 focus-visible:ring-cyan-500/50 rounded-full px-4"
                                    />
                                    <Button
                                        type="submit"
                                        size="icon"
                                        className={cn(
                                            "rounded-full h-10 w-10 transition-all",
                                            inputValue.trim()
                                                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                                                : "bg-white/10 text-neutral-500 hover:bg-white/20"
                                        )}
                                        disabled={!inputValue.trim()}
                                    >
                                        <Send size={18} />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-shadow relative"
            >
                <MessageCircle size={28} />
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 border-2 border-black animate-pulse" />
                )}
            </motion.button>
        </div>
    );
}
