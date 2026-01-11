import { Brain, Briefcase, Code, Laptop, User } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [flipped, setFlipped] = useState({
    web: false,
    ai: false,
    ml: false
  });

  const handleCardHover = (card) => {
    if (!flipped[card]) {
      setFlipped(prev => ({ ...prev, [card]: true }));
    }
  };

  return (
    <section id="about" className="py-24 px-4 pb-32 relative">
      <style>{`
        .flip-card {
          perspective: 1000px;
        }
        
        .flip-card-inner {
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(360deg);
        }
      `}</style>
      
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer and AI & Automation Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I love building AI and Automation that solves real problems. What excites me is creating agents and models that save time, reduce effort, and genuinely make life easier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/public/Shivraj_Patil.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div 
              className="flip-card gradient-border p-6 card-hover"
              onMouseEnter={() => handleCardHover('web')}
            >
              <div className="flip-card-inner">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      Creating responsive websites and web applications with
                      modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="flip-card gradient-border p-6 card-hover"
              onMouseEnter={() => handleCardHover('ai')}
            >
              <div className="flip-card-inner">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">AI Agents and Automation</h4>
                    <p className="text-muted-foreground">
                      Building smart AI agents and automated systems that simplify real-world workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="flip-card gradient-border p-6 card-hover"
              onMouseEnter={() => handleCardHover('ml')}
            >
              <div className="flip-card-inner">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Laptop className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Machine Learning</h4>
                    <p className="text-muted-foreground">
                      Transforming raw data into meaningful insights through ML pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}