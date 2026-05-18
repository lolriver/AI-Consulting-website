"use client";

import { cn } from "@/lib/utils";

export const TextReveal = ({
    text,
    className,
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) => {
    const words = text.split(" ");

    return (
        <div className={cn("overflow-hidden flex flex-wrap", className)}>
            {words.map((word, index) => (
                <span
                    key={index}
                    className={cn(
                        "inline-block animate-text-reveal",
                        word.includes("Modern") || word.includes("Enterprise") ? "text-cyan-400" : "text-white"
                    )}
                    style={{
                        marginRight: "0.25em",
                        animationDelay: `${delay * 1000 + index * 60}ms`,
                    }}
                >
                    {word}
                </span>
            ))}
        </div>
    );
};
