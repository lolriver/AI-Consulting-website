"use client"

import { cn } from "@/lib/utils"
import { Star, User, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Dr. Sarah Chen",
        role: "CTO, NeuralScale",
        content: "The AI integration wasn't just a tool; it was a fundamental shift in our operational velocity. We're seeing 300% efficiency gains.",
        rating: 5,
    },
    {
        name: "Marcus Thorne",
        role: "Director of Ops, Vortex Logistics",
        content: "Predictive analytics stopped being a buzzword and became our daily reality. The dashboard visualization is simply world-class.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Founder, Cypher Security",
        content: "Trusted automation that actually respects our security protocols. The custom bot handles sensitive queries with perfect accuracy.",
        rating: 5,
    },
    {
        name: "James Wu",
        role: "VP Marketing, Sova Tech",
        content: "Our customer retention shot up by 40% after implementing the personalized AI recommendation engine. Exceptional ROI.",
        rating: 5,
    },
    {
        name: "Amara Patel",
        role: "Head of Product, NextGen",
        content: "The scalability of their workflow automation is unmatched. We grew from 10 to 100 employees without adding administrative bloat.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "CEO, QuantumFinance",
        content: "Finally, an AI partner that understands compliance. The ethical guardrails they implemented gave us the confidence to deploy.",
        rating: 5,
    },
]

const TestimonialCard = ({
    name,
    role,
    content,
    rating,
    className,
}: {
    name: string
    role: string
    content: string
    rating: number
    className?: string
}) => {
    return (
        <div
            className={cn(
                "relative flex w-[350px] md:w-[450px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-6",
                "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300",
                "group animate-float",
                className
            )}
        >
            {/* AI Scanner Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute h-[1px] w-full bg-cyan-400/50 shadow-[0_0_10px_#22d3ee] animate-scan top-0" />
            </div>

            <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "h-4 w-4",
                                    i < rating ? "fill-cyan-400 text-cyan-400" : "fill-neutral-800 text-neutral-800"
                                )}
                            />
                        ))}
                    </div>
                    <Quote className="h-6 w-6 text-cyan-500/30" />
                </div>

                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">"{content}"</p>

                <div className="flex items-center gap-3 pt-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                        <User className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white text-sm">{name}</h4>
                        <p className="text-xs text-cyan-400/80">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function TestimonialMarquee() {
    return (
        <div className="relative flex w-full flex-col overflow-hidden py-10 gap-8">
            {/* Row 1: Left to Right */}
            <div className="group flex w-full overflow-hidden select-none" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                <div className="flex w-max min-w-full shrink-0 animate-marquee items-center justify-around gap-8 group-hover:[animation-play-state:paused] pl-8">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`row1-${i}`} {...t} className={i % 2 === 0 ? "animation-delay-[-2s]" : "animation-delay-[-5s]"} />
                    ))}
                </div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="group flex w-full overflow-hidden select-none" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                <div className="flex w-max min-w-full shrink-0 animate-marquee-reverse items-center justify-around gap-8 group-hover:[animation-play-state:paused] pl-8">
                    {[...[...testimonials].reverse(), ...testimonials].map((t, i) => (
                        <TestimonialCard key={`row2-${i}`} {...t} className="animation-delay-[-3s]" />
                    ))}
                </div>
            </div>
        </div>
    )
}
