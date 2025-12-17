import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed navbar
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100" : "bg-transparent py-6"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <div 
          className="text-2xl font-extrabold text-primary tracking-tighter uppercase cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          JA
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="flex flex-col gap-1.5 cursor-pointer md:hidden z-50 p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-neutral-dark transition-all duration-300 rounded-sm origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-neutral-dark transition-all duration-300 rounded-sm ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-neutral-dark transition-all duration-300 rounded-sm origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10">
          {["home", "about", "services", "portfolio", "contact"].map((item) => (
            <li 
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer font-medium text-gray-600 hover:text-primary transition-colors text-[0.95rem] capitalize relative group"
            >
              {item === 'portfolio' ? 'Projects' : item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}>
          {["home", "about", "services", "portfolio", "contact"].map((item) => (
            <a 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-2xl font-bold text-neutral-dark hover:text-primary transition-colors capitalize cursor-pointer"
            >
              {item === 'portfolio' ? 'Projects' : item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;