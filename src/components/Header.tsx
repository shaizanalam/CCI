import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#features" },
  { label: "Courses", href: "#courses" },
  { label: "Fee Structure", href: "#pricing" },
  { label: "Campus", href: "#campus" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-border/50 ${
        scrolled
          ? "bg-background/97 backdrop-blur-xl shadow-md py-1"
          : "bg-background py-2"
      }`}
    >
      <div className="section-container flex items-center justify-between h-[76px]">
        <a href="#home" onClick={() => handleClick("#home")} className="flex items-center gap-3.5">
          <img
            src={logo}
            alt="Chhattisgarh Coaching Centre Logo"
            className="w-14 h-14 object-contain drop-shadow-md"
          />
          <div>
            <h1 className="font-heading text-lg sm:text-xl font-bold text-primary leading-tight">
              Chhattisgarh Coaching Institute
            </h1>
            <p className="text-xs text-gold font-medium tracking-wide uppercase -mt-0.5">
              Art  of  making Genius
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-foreground font-medium text-sm px-3.5 py-2 rounded-lg hover:text-primary hover:bg-primary/5 transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              sessionStorage.removeItem("selectedCourse");
              handleClick("#contact");
            }}
            className="ml-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-navy-light transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
          >
            Enroll Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background border-t border-border shadow-lg"
          >
            <div className="flex flex-col items-center py-6 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-foreground font-medium text-lg py-2 px-4 rounded-lg hover:bg-primary/5 transition-colors w-full text-center"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  sessionStorage.removeItem("selectedCourse");
                  handleClick("#contact");
                }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold mt-3"
              >
                Enroll Now
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
