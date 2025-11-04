import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		const currentTheme = theme || "dark";
		setTheme(currentTheme === "dark" ? "light" : "dark");
	};

	if (!mounted) {
		return (
			<button
				className="cursor-pointer hover:opacity-70 transition-none"
				type="button"
			>
				<Moon className="h-4 w-4" />
			</button>
		);
	}

	const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

	return (
		<button
			onClick={toggleTheme}
			className="cursor-pointer hover:opacity-70 transition-none"
			type="button"
		>
			{isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
		</button>
	);
}
