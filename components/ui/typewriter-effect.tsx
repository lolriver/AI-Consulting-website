"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const charArray = words.flatMap((word, wordIndex) => {
        const chars = word.text.split("").map((char) => ({
            char,
            className: word.className || "",
        }));
        if (wordIndex < words.length - 1) {
            chars.push({ char: " ", className: "" });
        }
        return chars;
    });

    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= charArray.length) return;

        const timer = setTimeout(() => {
            setDisplayedText((prev) => prev + charArray[currentIndex].char);
            setCurrentIndex((prev) => prev + 1);
        }, 50);

        return () => clearTimeout(timer);
    }, [currentIndex, charArray]);

    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-left inline-block",
                className
            )}
        >
            {charArray.slice(0, currentIndex).map((item, index) => (
                <span
                    key={`char-${index}`}
                    className={cn("dark:text-white text-black", item.className)}
                >
                    {item.char}
                </span>
            ))}

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-cyan-500 ml-1",
                    cursorClassName
                )}
            />
        </div>
    );
};
