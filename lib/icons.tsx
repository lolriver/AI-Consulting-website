import {
    Bot,
    Workflow,
    Brain,
    MessageSquare,
    Cog,
    BarChart3,
    Globe,
    Zap,
    Shield,
    Search,
    Database,
    Cloud,
    Code,
    Smartphone,
    Server
} from "lucide-react";

export const iconMap: Record<string, any> = {
    Bot,
    Workflow,
    Brain,
    MessageSquare,
    Cog,
    BarChart3,
    Globe,
    Zap,
    Shield,
    Search,
    Database,
    Cloud,
    Code,
    Smartphone,
    Server
};

export const getIcon = (name: string) => {
    return iconMap[name] || Bot; // Default to Bot if not found
};
