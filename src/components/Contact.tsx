import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import { toast } from "sonner";

const contactItems = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "Sai Ssimran City, Raipur, Mathpurena\nChhattisgarh 492013",
    link: { href: "https://maps.app.goo.gl/UhPRbhTiFqNkzCFe9", label: "Get Directions →" },
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "",
    link: { href: "tel:+919131860077", label: "+91 91318 60077" },
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "",
    links: [
      { href: "mailto:info@chhattisgarhcoaching.com", label: "info@chhattisgarhcoaching.com" },
      { href: "mailto:admissions@chhattisgarhcoaching.com", label: "admissions@chhattisgarhcoaching.com" },
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday – Saturday: 8:00 AM – 8:00 PM\nSunday: 10:00 AM – 4:00 PM",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });

  useEffect(() => {
    const selectedCourse = sessionStorage.getItem("selectedCourse");
    if (selectedCourse) {
      setForm((prev) => ({ ...prev, course: selectedCourse }));
      sessionStorage.removeItem("selectedCourse");
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919131860077"; // your WhatsApp number
    const whatsappMessage = `New Inquiry:\nName: ${form.name || "-"}\nPhone: ${form.phone || "-"}\nEmail: ${form.email || "-"}\nCourse: ${form.course || "-"}\nMessage: ${form.message || "-"}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const newWindow = window.open(url, "_blank");
    if (!newWindow) {
      window.location.href = url;
    }

    setForm({ name: "", phone: "", email: "", course: "", message: "" });
  };

  const inputClass =
    "w-full bg-primary-foreground/[0.08] border border-primary-foreground/15 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:border-gold focus:bg-primary-foreground/[0.12] transition-colors text-sm";

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">We'd Love to Hear From You</h2>
        <p className="section-sub">
          Reach out for admissions, batch timings, course details, or just to schedule a campus visit.
        </p>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 md:space-y-5"
          >
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 sm:gap-4 bg-cream rounded-xl p-3 sm:p-4 md:p-5 border border-border/50"
              >
                <div className="w-9 sm:w-10 md:w-11 h-9 sm:h-10 md:h-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gold mb-1">
                    {item.title}
                  </h4>
                  {item.content && (
                    <p className="text-foreground text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                  )}
                  {item.link && (
                    <a
                      href={item.link.href}
                      target={item.link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-foreground text-xs sm:text-sm hover:text-gold transition-colors"
                    >
                      {item.link.label}
                    </a>
                  )}
                  {item.links?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="block text-foreground text-sm hover:text-gold transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Dark form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-primary rounded-2xl p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <style>
                {`
                  select option {
                    color: black;
                    background: white;
                  }
                `}
              </style>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-1">
                Send Us a Message
              </h3>
              <p className="text-primary-foreground/60 text-xs sm:text-sm mb-3 sm:mb-4">
                We'll get back to you within 24 hours
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-primary-foreground/70 text-xs font-semibold tracking-wide mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-primary-foreground/70 text-xs font-semibold tracking-wide mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-primary-foreground/70 text-xs font-semibold tracking-wide mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-primary-foreground/70 text-xs font-semibold tracking-wide mb-1.5">
                  Interested Course
                </label>
                <select
                  required
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Select a course</option>
                  <optgroup label="School Curriculum">
                    <option>Class 1st – 4th</option>
                    <option>Class 5th – 8th</option>
                    <option>Class 9th</option>
                    <option>Class 10th</option>
                  </optgroup>
                  <optgroup label="11th & 12th Science">
                    <option>Single Subject</option>
                    <option>Double Subject</option>
                    <option>Triple Subject</option>
                  </optgroup>
                  <optgroup label="11th & 12th Commerce">
                    <option>Accounts</option>
                    <option>Economics</option>
                    <option>Business Studies</option>
                  </optgroup>
                  <optgroup label="Advanced Programs">
                    <option>11th & 12th Maths (PCM)</option>
                    <option>11th & 12th Science (PCB)</option>
                    <option>11th & 12th  Commerce (COM)</option>
                  </optgroup>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-primary-foreground/70 text-xs font-semibold tracking-wide mb-1.5">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your requirements, preferred batch timing, etc."
                  className={`${inputClass} resize-y min-h-[100px]`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-primary-foreground py-4 rounded-full font-bold text-base tracking-wide hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                Send Message ✉
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
