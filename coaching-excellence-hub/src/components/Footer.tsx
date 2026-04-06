import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Why Choose Us", href: "#features" },
    { label: "Our Courses", href: "#courses" },
    { label: "Campus", href: "#campus" },
    { label: "Contact Us", href: "#contact" },
  ];

  const courseLinks = [
    "11th & 12th Maths (PCM)",
    "11th & 12th Science (PCB)",
    "School Curriculum (1–12)",
    "NEET Preparation",
    "JEE Foundation",
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-0">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-heading text-base font-bold text-primary-foreground leading-tight">
                  Chhattisgarh Coaching Centre
                </h3>
                <span className="text-gold text-xs font-medium tracking-wide uppercase">
                  Excellence in Education
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/55 text-sm leading-relaxed mb-5">
              Providing quality education and coaching services in Raipur, Chhattisgarh. Committed to helping students achieve their academic goals.
            </p>
            <div className="flex gap-2.5">
              {["facebook", "instagram", "youtube", "whatsapp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/[0.08] border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 text-xs hover:bg-gold hover:border-gold hover:text-primary-foreground transition-all"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-primary-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-primary-foreground/55 text-sm hover:text-gold hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-primary-foreground mb-5">
              Our Courses
            </h4>
            <ul className="space-y-2">
              {courseLinks.map((course) => (
                <li key={course}>
                  <button
                    onClick={() => scrollTo("#courses")}
                    className="text-primary-foreground/55 text-sm hover:text-gold hover:pl-1 transition-all duration-200"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-primary-foreground mb-5">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/55">
              <li className="leading-relaxed">
                Sai Ssimran City, Mathpurena<br />
                Raipur, CG 492013
              </li>
              <li>
                <a href="tel:+919131860077" className="hover:text-gold transition-colors">
                  +91 91318 60077
                </a>
              </li>
              <li>
                <a href="mailto:info@chhattisgarhcoaching.com" className="hover:text-gold transition-colors">
                  info@chhattisgarhcoaching.com
                </a>
              </li>
              <li>Mon–Sat: 8AM–8PM</li>
            </ul>
          </div>
        </div>

        <div className="text-center py-5 text-primary-foreground/30 text-xs">
          © 2026 Chhattisgarh Coaching Centre. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
