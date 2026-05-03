"use client";
import { Leaf, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const themeOptions = [
    { name: "blue", label: "Blue", icon: Palette },
    { name: "green", label: "Green", icon: Leaf },
];

const ToggleButton = () => {
    const { theme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );
    if (!mounted) return null;

    return (
        <div
            className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 p-1 shadow-md backdrop-blur-md"
            aria-label="Choose color theme"
        >
            {themeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = theme === option.name;

                return (
                    <button
                        key={option.name}
                        type="button"
                        onClick={() => setTheme(option.name)}
                        className={`relative flex h-6 cursor-pointer w-6 items-center justify-center rounded-full text-white transition-all hover:bg-white/15 focus:outline-none ${
                            isActive
                                ? `text-brand-accent shadow-sm hover:bg-white ${option.name === "blue" ? "bg-blue-500" : "bg-green-500"}`
                                : "bg-transparent"
                        }`}
                        title={option.label}
                        aria-label={`Use ${option.label} theme`}
                        aria-pressed={isActive}
                    >
                        <Icon size={17} />
                    </button>
                );
            })}
        </div>
    );
};
export default ToggleButton;
