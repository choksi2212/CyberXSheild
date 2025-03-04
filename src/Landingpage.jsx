import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, Wifi, Key, Globe, Keyboard, Github, Mail, Twitter, Users, Target, Zap, AlertTriangle, CheckCircle, Share2, BookOpen, Coffee } from 'lucide-react';

// Tools Data
const tools = [
  {
    name: "Image Forensics",
    icon: <Shield />,
    description: "Detect tampered images and hidden digital manipulations",
    features: ["Metadata extraction – View hidden details like timestamps and devices", "Pixel anomaly detection – Identify edited or altered areas", "AI-powered authenticity check – Verify if an image is real or fake"],
    beginner: true,
    automatedProtection: true,
    link: "./img.html"
  },
  {
    name: "Keystroke Dynamics Authentication",
    icon: <Lock />,
    description: "Advanced authentication based on your unique typing pattern",
    features: ["Behavior-based security – Identify users by their typing rhythm", "No extra hardware needed – Works with any keyboard", "Continuous authentication – Enhances login security beyond passwords"],
    beginner: true,
    automatedProtection: true,
    link: "./key.html"
  },
  {
    name: "Network Packet Analyzer",
    icon: <Wifi />,
    description: "Simple network protection for everyone",
    features: ["One-click scanning – Monitor incoming and outgoing network traffic effortlessly", "Plain English reports – Understand network activity without technical jargon", "Guided fixes – Identify and resolve suspicious packets easily"],
    beginner: true,
    automatedProtection: true,
    link: "./pack.html"
  },
  {
    name: "Password Buddy",
    icon: <Key />,
    description: "Never forget a password again",
    features: ["Instant security rating – Get a strength score from weak to very strong", "Detailed analysis – See entropy, crack time, and improvement suggestions", "Live feedback – Adjust your password in real-time for better security"],
    beginner: true,
    automatedProtection: false,
    link: "./pass.html"
  },
  {
    name: "Steganography Analyzer",
    icon: <Globe />,
    description: "Reveal hidden messages in images and text files",
    features: ["Deep scan technology – Uncover embedded data using advanced detection", "Multiple file support – Analyze images, audio, and text files", "Secure messaging – Encode or decode secret messages effortlessly"],
    beginner: true,
    automatedProtection: true,
    link: "./steg.html"
  },
  {
    name: "Web Application Firewall (WAF)",
    icon: <Keyboard />,
    description: "Protect your websites and applications from cyber threats",
    features: ["Real-time threat detection – Blocks malicious attacks instantly", "AI-powered filtering – Smartly differentiates between genuine and harmful requests", "Custom security rules – Tailor firewall settings for your specific needs"],
    beginner: true,
    automatedProtection: true,
    link: "./waf.html"
  }
];

// Goals Data
const goals = [
  {
    icon: <Users />,
    title: "Security for Everyone",
    description: "Making cybersecurity accessible to non-technical users through simple, guided solutions"
  },
  {
    icon: <Target />,
    title: "Automated Protection",
    description: "Set-and-forget security that works quietly in the background to keep you safe"
  },
  {
    icon: <Zap />,
    title: "Quick Setup",
    description: "Get protected in minutes with easy-to-follow setup wizards and visual guides"
  },
  {
    icon: <AlertTriangle />,
    title: "Plain Language",
    description: "No technical jargon - just clear, simple explanations and actionable advice"
  }
];

// Features Data
const features = [
  {
    icon: <CheckCircle />,
    title: "Network Packet Analyzer",
    description: "Detect unauthorized access, Spot suspicious data, transfersMonitor IoT device activity"
  },
  {
    icon: <Share2 />,
    title: "WAF",
    description: "Block web attacks (SQLi, XSS),Protect login pages,Secure APIs & web apps"
  },
  {
    icon: <BookOpen />,
    title: "Password Strength Analyzer",
    description: "Strengthen passwords,  Check security before use, Educate on strong passwords"
  },
  {
    icon: <Coffee />,
    title: "Keystroke Authentication",
    description: "Prevent unauthorized logins, Secure banking & finance, Add extra corporate security"
  },
  {
    icon: <Coffee />,
    title: "Image Forensics",
    description: "Verify image authenticity, Detect deepfakes & scams, Assist digital forensics"
  },
  {
    icon: <Coffee />,
    title: "Steganography",
    description: "Hide data in images, Securely share info, Prevent data theft"
  }
];

// Enhanced 3D Animation Card Component
const VanillaTiltCard = ({ children }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    let updateCall = null;
    let rect = card.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;
    let left = rect.left;
    let top = rect.top;

    const getMousePos = (e) => {
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      return { x: mouseX, y: mouseY };
    };

    const update = (mousePos) => {
      const rotateX = ((mousePos.y - height/2) / height) * 20;
      const rotateY = ((mousePos.x - width/2) / width) * 20;
      const intensity = Math.sqrt(Math.pow(rotateX, 2) + Math.pow(rotateY, 2)) / 20;
      
      card.style.transform = `
        perspective(1000px) 
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(1.05, 1.05, 1.05)
        translateZ(30px)
      `;
      
      // Dynamic glow effect
      card.style.boxShadow = `
        0 ${10 + intensity * 10}px ${30 + intensity * 20}px ${intensity * 2}px rgba(0, 255, 128, ${0.15 + intensity * 0.25}),
        0 0 ${10 + intensity * 20}px rgba(0, 255, 128, ${0.1 + intensity * 0.2})
      `;
    };

    const onMouseMove = (e) => {
      const mousePos = getMousePos(e);
      updateCall = requestAnimationFrame(() => update(mousePos));
    };

    const onMouseEnter = (e) => {
      rect = card.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      left = rect.left;
      top = rect.top;
      card.style.transition = 'transform 0.2s ease-out, box-shadow 0.2s ease-out';
    };

    const onMouseLeave = () => {
      cancelAnimationFrame(updateCall);
      card.style.transition = 'transform 0.5s ease-out, box-shadow 0.5s ease-out';
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateZ(0)';
      card.style.boxShadow = '0 0 0 0 rgba(0, 255, 128, 0)';
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(updateCall);
    };
  }, []);

  return (
    <div ref={cardRef} className="transition-all duration-300">
      {children}
    </div>
  );
};

// Animated Icon Component
const AnimatedIcon = ({ icon: Icon, isHovered }) => {
  return (
    <div className="relative transition-all duration-500">
      <Icon 
        className={`w-8 h-8 transition-all duration-500 ${
          isHovered ? 'scale-110 transform text-green-400' : 'text-green-500'
        }`}
      />
      {isHovered && (
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,128,0.4) 0%, rgba(0,255,128,0) 70%)',
            filter: 'blur(8px)',
            transform: 'scale(2)',
          }}
        />
      )}
    </div>
  );
};

// Text Reveal Component
const RevealText = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`transition-all duration-1000 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

// Matrix Rain Background Component
const MatrixRain = () => {
  const [columns, setColumns] = useState([]);
  
  useEffect(() => {
    const chars = '01';
    const columnCount = Math.floor(window.innerWidth / 20);
    
    const newColumns = Array.from({ length: columnCount }, () => ({
      chars: Array.from({ length: Math.floor(Math.random() * 25) + 10 },
        () => chars[Math.floor(Math.random() * chars.length)]),
      y: Math.random() * window.innerHeight,
      speed: Math.random() * 2 + 1
    }));
    
    setColumns(newColumns);
    
    const interval = setInterval(() => {
      setColumns(prev => prev.map(col => ({
        ...col,
        y: col.y > window.innerHeight ? 0 : col.y + col.speed,
        chars: Math.random() < 0.1 ?
          col.chars.map(() => chars[Math.floor(Math.random() * chars.length)]) : 
          col.chars
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden opacity-20 pointer-events-none">
      {columns.map((col, i) => (
        <div 
          key={i}
          className="absolute text-green-500 text-sm"
          style={{
            left: `${(i * 20)}px`,
            top: col.y,
            transform: 'translateZ(0)',
            textShadow: '0 0 8px rgba(0, 255, 0, 0.8)'
          }}
        >
          {col.chars.map((char, j) => (
            <div 
              key={j}
              style={{
                opacity: 1 - (j * 0.1),
                transform: `translateY(-${j * 20}px)`
              }}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Landing Page Component
const LandingPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <MatrixRain />

      {/* Custom cursor */}
      <div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePos.x - 24,
          top: mousePos.y - 24,
          background: 'radial-gradient(circle, rgba(0,255,128,0.4) 0%, rgba(0,255,128,0) 70%)',
          filter: 'blur(8px)',
          transform: 'scale(1.5)',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <RevealText>
          <header className="pt-20 pb-12 px-8 text-center">
            <h1 className="text-6xl font-bold mb-6 text-green-500">
            CyberShield: Cybersecurity Toolkit 🔐💻
            </h1>
            <p className="text-green-400 text-xl max-w-2xl mx-auto opacity-80">
            Protect, Analyze, and Secure
            </p>
          </header>
        </RevealText>

        {/* Goals section */}
        <div className="container mx-auto px-8 py-16">
          <RevealText>
            <h2 className="text-3xl font-bold text-green-500 mb-12 text-center">Our Mission</h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <RevealText key={goal.title}>
                <VanillaTiltCard>
                  <div className="h-full rounded-lg border border-green-900 bg-black bg-opacity-50 p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="text-green-500">
                        <AnimatedIcon 
                          icon={goal.icon.type} 
                          isHovered={hoveredCard === `goal-${index}`}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-green-500">
                        {goal.title}
                      </h3>
                      <p className="text-green-400 opacity-80">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </VanillaTiltCard>
              </RevealText>
            ))}
          </div>
        </div>

        {/* Tools section */}
        <div className="container mx-auto px-8 py-16">
          <RevealText>
            <h2 className="text-3xl font-bold text-green-500 mb-12">Security Tools for Everyone</h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <RevealText key={tool.name}>
                <VanillaTiltCard>
                  <div
                    className="relative group h-full"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="h-full rounded-lg border border-green-900 bg-black bg-opacity-50 p-6 transition-all duration-300 hover:border-green-500">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-green-500">
                          <AnimatedIcon 
                            icon={tool.icon.type} 
                            isHovered={hoveredCard === index}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-green-500">
                          {tool.name}
                        </h3>
                        {/* <button >use tool</button> */}
                        <a href = {tool.link} target="_blank" rel="noopener noreferrer"
  className="px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-400 transition-colors duration-300 ml-auto"
>
  Use Tool
</a>

  

                      </div>
                      
                      <p className="text-green-400 opacity-60 mb-4 transition-all duration-300">
                        {tool.description}
                      </p>

                      <div 
                        className="space-y-4 transition-all duration-300"
                        style={{
                          opacity: hoveredCard === index ? 1 : 0,
                          transform: `translateY(${hoveredCard === index ? '0' : '10px'})`,
                          pointerEvents: hoveredCard === index ? 'auto' : 'none'
                        }}
                      >
                        <ul className="list-disc list-inside text-green-400 opacity-60">
                          {tool.features.map(feature => (
                            <li key={feature} className="mb-1">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </VanillaTiltCard>
              </RevealText>
            ))}
          </div>
        </div>

        {/* Features section */}
        <div className="container mx-auto px-8 py-16">
          <RevealText>
            <h2 className="text-3xl font-bold text-green-500 mb-12">Key Features</h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <RevealText key={feature.title}>
                <VanillaTiltCard>
                  <div className="h-full rounded-lg border border-green-900 bg-black bg-opacity-50 p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="text-green-500">
                        <AnimatedIcon 
                          icon={feature.icon.type} 
                          isHovered={hoveredCard === `feature-${index}`}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-green-500">
                        {feature.title}
                      </h3>
                      <p className="text-green-400 opacity-80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </VanillaTiltCard>
              </RevealText>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-green-900 mt-16">
          <div className="container mx-auto px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-green-500 mb-8 md:mb-0">
                © 2025 Security Tools Suite. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-green-500 hover:text-green-400 transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-green-500 hover:text-green-400 transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-green-500 hover:text-green-400 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;