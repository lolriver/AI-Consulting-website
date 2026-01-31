

export const CodeVisual = () => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-40">
            <div className="absolute top-4 left-4 right-4 bottom-0 bg-neutral-900/80 rounded-t-lg border border-white/10 overflow-hidden font-mono text-xs">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="p-4 space-y-1 text-blue-300/80">
                    <p><span className="text-purple-400">import</span> torch</p>
                    <p><span className="text-purple-400">import</span> neural_net <span className="text-purple-400">as</span> nn</p>
                    <br />
                    <p><span className="text-blue-400">class</span> <span className="text-yellow-300">AIModel</span>(nn.Module):</p>
                    <p className="pl-4"><span className="text-blue-400">def</span> <span className="text-yellow-300">__init__</span>(self):</p>
                    <p className="pl-8">super().__init__()</p>
                    <p className="pl-8">self.layer1 = nn.Linear(784, 128)</p>
                    <p className="pl-8">self.layer2 = nn.Linear(128, 10)</p>
                    <br />
                    <p className="pl-4"><span className="text-blue-400">def</span> <span className="text-yellow-300">forward</span>(self, x):</p>
                    <p className="pl-8">x = torch.relu(self.layer1(x))</p>
                    <p className="pl-8"><span className="text-purple-400">return</span> self.layer2(x)</p>
                    <br />
                    <p><span className="text-green-400"># Model initialized successfully</span></p>
                    <p className="animate-pulse">_</p>
                </div>
            </div>
        </div>
    )
}

export const GraphVisual = () => {
    return (
        <div className="absolute inset-x-4 inset-y-8 opacity-40">
            <div className="h-full w-full flex items-end justify-between gap-2 border-l border-b border-white/10 pb-2 pl-2">
                {/* Y-Axis Labels (Absolute) */}
                <div className="absolute -left-2 top-0 bottom-8 flex flex-col justify-between text-[8px] text-white/30 font-mono">
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                </div>

                {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                    <div key={i} className="w-full bg-gradient-to-t from-cyan-500/10 to-cyan-500/40 rounded-t-sm relative group overflow-hidden">
                        {/* Animated Bar Height */}
                        <div
                            className="absolute bottom-0 w-full bg-cyan-500/30 transition-all duration-1000 ease-out hover:bg-cyan-500/50"
                            style={{ height: `${height}%` }}
                        >
                            <div className="absolute top-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative Line Graph Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none pl-2 pb-2" preserveAspectRatio="none">
                <path
                    d="M0 60 C 20 50, 40 80, 60 40 S 80 50, 100 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-cyan-400/50 shadow-lg drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
                />
                {/* Fill under line */}
                <path
                    d="M0 60 C 20 50, 40 80, 60 40 S 80 50, 100 20 V 100 H 0 Z"
                    fill="url(#gradient-fill)"
                    className="opacity-20"
                />
                <defs>
                    <linearGradient id="gradient-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Data Point / Tooltip */}
            <div className="absolute top-[15%] right-[10%] bg-neutral-900/90 border border-cyan-500/30 rounded-lg p-2 shadow-xl transform translate-y-[-50%]">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[10px] text-cyan-100 font-mono">Growth</span>
                </div>
                <div className="text-lg font-bold text-white leading-none mt-1">+245%</div>
                <div className="text-[9px] text-white/50 mt-0.5">vs last month</div>
            </div>
        </div>
    )
}
export const BotVisual = () => {
    return (
        <div className="absolute inset-0 p-6 overflow-hidden opacity-50 space-y-3 mask-image-b-fade">
            <div className="flex gap-2 max-w-[85%]">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-sm p-3 text-[10px] text-blue-100/80 border border-white/5 shadow-sm">
                    Analyzing user requirements...
                </div>
            </div>

            <div className="flex gap-2 max-w-[85%] flex-row-reverse ml-auto">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                </div>
                <div className="bg-purple-500/10 rounded-2xl rounded-tr-sm p-3 text-[10px] text-purple-100/80 border border-purple-500/20 shadow-sm">
                    Generate Q3 performance report.
                </div>
            </div>

            <div className="flex gap-2 max-w-[85%]">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-sm p-3 text-[10px] text-blue-100/80 border border-white/5 shadow-sm">
                    Processing 50GB of sales data...
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3" />
                    </div>
                </div>
            </div>

            <div className="flex gap-2 max-w-[85%]">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-sm p-3 text-[10px] text-blue-100/80 border border-white/5 shadow-sm">
                    Optimizing workflow efficiency by 340%...
                </div>
            </div>

            <div className="flex gap-2 max-w-[85%] flex-row-reverse ml-auto">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                </div>
                <div className="bg-purple-500/10 rounded-2xl rounded-tr-sm p-3 text-[10px] text-purple-100/80 border border-purple-500/20 shadow-sm">
                    Schedule review meeting.
                </div>
            </div>

            <div className="flex gap-2 max-w-[85%]">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-sm p-3 text-[10px] text-blue-100/80 border border-white/5 shadow-sm">
                    Meeting scheduled: Tomorrow, 10 AM.
                </div>
            </div>
        </div>
    )
}

export const IntegrationVisual = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <div className="relative w-full h-full p-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.3)] z-10">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                </div>

                {/* Orbiting nodes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-white/40 rounded-full" />
                <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-white/40 rounded-full" />
                <div className="absolute top-[40%] right-[10%] w-2 h-2 bg-orange-500/40 rounded-full" />
            </div>
        </div>
    )
}
