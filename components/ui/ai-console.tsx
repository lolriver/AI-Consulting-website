"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Terminal } from "lucide-react"

const logs = [
    { id: 1, text: "Initializing predictive neural network...", type: "system" },
    { id: 2, text: "Loading knowledge base v4.2.0 [OK]", type: "success" },
    { id: 3, text: "Optimizing tensor weights for low latency...", type: "process" },
    { id: 4, text: "Connecting to secure data stream...", type: "process" },
    { id: 5, text: "Analyzing user behavior patterns...", type: "analysis" },
    { id: 6, text: "Anomaly detection system active.", type: "system" },
    { id: 7, text: "Processing natural language query...", type: "process" },
    { id: 8, text: "Response generated in 14ms.", type: "success" },
    { id: 9, text: "Calibrating confidence score: 99.8%", type: "success" },
    { id: 10, text: "Updating real-time dashboard widgets...", type: "process" },
]

export function AIConsole({ className }: { className?: string }) {
    const [visibleLogs, setVisibleLogs] = useState<typeof logs>([])
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            setVisibleLogs((prev) => {
                const next = [...prev, { ...logs[currentIndex % logs.length], id: Date.now() }]
                if (next.length > 8) next.shift() // Keep only last 8 logs
                return next
            })
            currentIndex++
        }, 1500)

        return () => clearInterval(interval)
    }, [])

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [visibleLogs])

    return (
        <div className={cn("relative w-full h-full font-mono text-xs", className)}>
            {/* Glass Container */}
            <div className="relative overflow-hidden rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">

                {/* Header (Terminal Bar) */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-widest">
                        <Terminal className="h-3 w-3" />
                        <span>AI_CORE_V2.exec</span>
                    </div>
                    <div className="w-12" /> {/* Spacer for balance */}
                </div>

                {/* Content Area */}
                <div
                    ref={scrollRef}
                    className="h-[300px] overflow-hidden p-6 relative"
                >
                    {/* Scanner Effect */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-scan shadow-[0_0_15px_#22d3ee]" />
                    </div>

                    <div className="relative z-10 space-y-2">
                        <AnimatePresence initial={false}>
                            {visibleLogs.map((log) => (
                                <motion.div
                                    key={log.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="text-neutral-600 text-xs min-w-[60px]">
                                        {new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                    </span>
                                    <span className={cn(
                                        "tracking-wide",
                                        log.type === "error" ? "text-red-400" :
                                            log.type === "success" ? "text-green-400" :
                                                log.type === "process" ? "text-cyan-400" :
                                                    "text-neutral-300"
                                    )}>
                                        {log.type === "process" && <span className="mr-2 inline-block animate-pulse">›</span>}
                                        {log.text}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}
