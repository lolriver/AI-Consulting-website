"use client";

import dynamic from "next/dynamic";

const SplineScene = dynamic(() => import("@/components/ui/spline-scene").then(mod => mod.SplineScene), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center text-neutral-500">Loading 3D Experience...</div>
});

export function HeroScene({ className }: { className?: string }) {
    return (
        <SplineScene
            scene="https://prod.spline.design/UbM7F-HZcyTbZ4y3/scene.splinecode"
            className={className}
        />
    );
}
