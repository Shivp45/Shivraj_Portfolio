import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const lines = [
        "Web Developer",
        "AI Developer",
        "Quick Learner",
        "Transforming Ideas",
        "Creating Impact"
    ];

    useEffect(() => {
        const currentLine = lines[currentLineIndex];
        
        if (!isDeleting && currentCharIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(currentLine.slice(0, currentCharIndex + 1));
                setCurrentCharIndex(currentCharIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else if (!isDeleting && currentCharIndex === currentLine.length) {
            const timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
            return () => clearTimeout(timeout);
        } else if (isDeleting && currentCharIndex > 0) {
            const timeout = setTimeout(() => {
                setDisplayedText(currentLine.slice(0, currentCharIndex - 1));
                setCurrentCharIndex(currentCharIndex - 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else if (isDeleting && currentCharIndex === 0) {
            setIsDeleting(false);
            setCurrentLineIndex((currentLineIndex + 1) % lines.length);
        }
    }, [currentCharIndex, currentLineIndex, isDeleting, lines]);

    return (
        <>
            <style>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                
                @keyframes naughty-dance {
                    0%, 100% { transform: translateX(0) rotate(0deg); }
                    10% { transform: translateX(-5px) rotate(-2deg); }
                    20% { transform: translateX(5px) rotate(2deg); }
                    30% { transform: translateX(-5px) rotate(-2deg); }
                    40% { transform: translateX(5px) rotate(2deg); }
                    50% { transform: translateX(0) rotate(0deg); }
                }
                
                .name-dance {
                    display: inline-block;
                    animation: naughty-dance 3s ease-in-out infinite;
                    animation-delay: 2s;
                }
                
                .name-dance.paused {
                    animation-play-state: paused;
                }
                
                .wave-text {
                    display: inline-block;
                    transition: transform 0.3s ease;
                }
                
                .wave-text:hover {
                    transform: translateY(-10px);
                }
                
                .terminal-cursor {
                    display: inline-block;
                    width: 6px;
                    height: 1.3em;
                    background-color: #00ff00;
                    margin-left: 4px;
                    animation: blink 0.8s infinite;
                    vertical-align: middle;
                    box-shadow: 0 0 8px #00ff00;
                }
                
                .typing-text {
                    font-family: 'Press Start 2P', 'Courier New', monospace;
                    color: #00ff00;
                    text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
                    letter-spacing: 2px;
                    font-size: 1.25rem;
                }
                
                .terminal-prefix {
                    color: #00ff00;
                    font-family: 'Press Start 2P', 'Courier New', monospace;
                    margin-right: 8px;
                    font-size: 1.25rem;
                }
                
                /* Light mode overrides */
                :root:not(.dark) .terminal-cursor,
                html:not(.dark) .terminal-cursor {
                    background-color: #1f2937;
                    box-shadow: 0 0 8px rgba(31, 41, 55, 0.5);
                }
                
                :root:not(.dark) .typing-text,
                html:not(.dark) .typing-text {
                    color: #1f2937;
                    text-shadow: 0 0 10px rgba(31, 41, 55, 0.3);
                }
                
                :root:not(.dark) .terminal-prefix,
                html:not(.dark) .terminal-prefix {
                    color: #1f2937;
                }
                
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
            `}</style>
            
            <section
                id="hero"
                className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            {"Hi, I am ".split("").map((char, index) => (
                                <span key={`hi-${index}`} className="wave-text opacity-0 animate-fade-in" style={{display: 'inline-block'}}>
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                            <span className={`text-primary name-dance ${isHovering ? 'paused' : ''}`} style={{display: 'inline-block'}}>
                                {"Shivraj".split("").map((char, index) => (
                                    <span key={`shivraj-${index}`} className="wave-text opacity-0 animate-fade-in-delay-1" style={{display: 'inline-block'}}>
                                        {char}
                                    </span>
                                ))}
                            </span>
                            {" "}
                            <span className={`text-gradient ml-2 name-dance ${isHovering ? 'paused' : ''}`} style={{display: 'inline-block'}}>
                                {"Patil".split("").map((char, index) => (
                                    <span key={`patil-${index}`} className="wave-text opacity-0 animate-fade-in-delay-2" style={{display: 'inline-block'}}>
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            I build modern web applications and AI-powered automations that turn complex problems into simple, usable solutions.
                        </p>

                        {/* Terminal Typing Animation */}
                        <div className="flex items-center justify-center min-h-[40px] opacity-0 animate-fade-in-delay-4">
                            <span className="terminal-prefix">&gt;</span>
                            <span className="typing-text">{displayedText}</span>
                            <span className="terminal-cursor"></span>
                        </div>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </section>
        </>
    );
};