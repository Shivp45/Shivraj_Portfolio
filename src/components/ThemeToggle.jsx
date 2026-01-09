import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")  // useEffect is used to remember the choice of the user when you refresh the page or open it in new tab... 
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
        else {
            localStorage.setItem("theme", "light");   //Stores the choice of the user in the local storage...
            setIsDarkMode(false);
        }
    }, []);  //[] -> Empty array or dependencies so that it runs only for single time...

    const toggleTheme = () => {          //Used To add the functinality to the theme change button... 
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");   //Stores the choice of the user in the local storage...
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");     //Stores the choice of the user in the local storage...
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outlin-hidden"
            )}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};