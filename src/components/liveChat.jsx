"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
    IoChatboxEllipsesOutline,
    IoClose,
    IoPaperPlaneOutline,
} from "react-icons/io5";

const whatsappNumber = "8801712121212";
const welcomeMessage = {
    id: 1,
    sender: "support",
    text: "Hi! Welcome to PECEDU Global. How can we help you today?",
};

const quickReplies = [
    "I want to study abroad",
    "Need visa guidance",
    "Book a consultation",
    "Is available?",
];

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([welcomeMessage]);
    const messagesEndRef = useRef(null);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hello PECEDU Global, I need help with study abroad guidance.",
    )}`;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const sendMessage = (text = message) => {
        const trimmedMessage = text.trim();

        if (!trimmedMessage) return;

        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id: Date.now(),
                sender: "user",
                text: trimmedMessage,
            },
        ]);
        setMessage("");

        window.setTimeout(() => {
            setMessages((currentMessages) => [
                ...currentMessages,
                {
                    id: Date.now() + 1,
                    sender: "support",
                    text: "Thanks for your message. Our team will contact you shortly. For urgent help, tap the WhatsApp button.",
                },
            ]);
        }, 700);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };

    return (
        <div className="fixed bottom-6 right-4 z-50 sm:bottom-10 sm:right-10">
            {isOpen && (
                <div className="mb-4 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-brand-accent/80 bg-background shadow-2xl">
                    <div className="flex items-center justify-between bg-brand-primary px-4 py-3 text-brand-contrast">
                        <div>
                            <p className="text-sm font-semibold">
                                PECEDU Live Chat
                            </p>
                            <p className="text-xs text-brand-soft-text">
                                Usually replies in a few minutes
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-1.5 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                            aria-label="Close live chat"
                        >
                            <IoClose size={20} />
                        </button>
                    </div>

                    <div className="h-72 space-y-3 overflow-y-auto px-4 py-4">
                        {messages.map((chatMessage) => {
                            const isUser = chatMessage.sender === "user";

                            return (
                                <div
                                    key={chatMessage.id}
                                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                                >
                                    <p
                                        className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                                            isUser
                                                ? "bg-brand-primary text-brand-contrast"
                                                : "bg-brand-secondary text-foreground"
                                        }`}
                                    >
                                        {chatMessage.text}
                                    </p>
                                </div>
                            );
                        })}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="border-t border-brand-muted px-4 py-3">
                        <div className="mb-3 flex flex-wrap gap-2">
                            {quickReplies.map((reply) => (
                                <button
                                    key={reply}
                                    type="button"
                                    onClick={() => sendMessage(reply)}
                                    className="rounded-full border border-brand-muted px-3 py-1 text-xs text-foreground transition hover:bg-brand-secondary"
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                placeholder="Type your message..."
                                className="min-w-0 flex-1 rounded-full border border-brand-muted bg-background px-4 py-2 text-sm text-foreground outline-none transition placeholder:text-foreground/50 focus:border-brand-primary"
                            />
                            <button
                                type="submit"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-brand-contrast transition hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
                                aria-label="Send message"
                            >
                                <IoPaperPlaneOutline size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-end gap-2">
                <button
                    type="button"
                    onClick={() => setIsOpen((currentValue) => !currentValue)}
                    className="rounded-full bg-brand-primary p-3 text-brand-contrast shadow-lg transition hover:bg-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
                    aria-label={isOpen ? "Close live chat" : "Open live chat"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <IoClose size={28} />
                    ) : (
                        <IoChatboxEllipsesOutline size={28} />
                    )}
                </button>

                <a
                    title="WhatsApp"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#075E54] p-3 text-white shadow-lg transition hover:bg-[#064c44] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#075E54]/40"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={28} />
                </a>
            </div>
        </div>
    );
};

export default LiveChat;
