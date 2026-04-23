import { motion } from "framer-motion";
import { BookOpen, Phone, Star, Atom, Calculator, GraduationCap, School, Clock, MapPin } from "lucide-react";

const courseItems = [
  { icon: Atom, label: "11th & 12th Science (PCB/PCM)" },
  { icon: Calculator, label: "Mathematics & Foundation" },
  { icon: GraduationCap, label: "NEET & JEE Preparation" },
  { icon: School, label: "School Curriculum (1–12)" },
  { icon: Clock, label: "Morning · Afternoon · Evening Batches" },
];

const heroStats = [
  { value: "500+", label: "Students Trained" },
  { value: "98%", label: "Success Rate" },
  { value: "12+", label: "Years of Excellence" },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(215 65% 16%) 0%, hsl(215 50% 26%) 40%, hsl(210 55% 20%) 70%, hsl(215 65% 16%) 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute -top-32 -right-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gold/15 blur-[80px]" />
      <div className="absolute -bottom-12 left-[5%] w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full bg-green/15 blur-[80px]" />

      <div className="section-container relative z-10 w-full grid lg:grid-cols-2 gap-8 md:gap-16 items-center py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold-light text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
            <Star className="w-3.5 h-3.5" />
            Raipur's Most Trusted Institute
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-primary-foreground leading-[1.15] mb-6">
            Excel in Your<br />
            <em className="text-gold-light italic">Academic Journey</em>
          </h2>

          <p className="text-primary-foreground/75 text-base sm:text-lg max-w-[500px] mb-8 leading-relaxed">
            Personalized coaching for competitive exams and academic subjects — guided by expert faculty, proven results, and a state-of-the-art learning environment in Raipur.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo("#courses")}
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base shadow-lg hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
              style={{ boxShadow: "0 8px 24px hsl(38 55% 50% / 0.4)" }}
            >
              <BookOpen className="w-4 h-4" />
              Explore Courses
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-base hover:bg-primary-foreground/10 hover:border-primary-foreground/70 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Talk to Us
            </button>
          </div>

          {/* Inline stats */}
          <div className="flex gap-8 pt-6 border-t border-primary-foreground/15">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-gold-light block">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/55 text-xs tracking-wide mt-0.5 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right visual — floating course card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative">
            {/* Floating badge top-right */}
            <div className="hidden md:flex absolute -top-5 -right-8 bg-background rounded-xl px-4 py-2.5 shadow-lg text-sm font-semibold text-primary flex-row items-center gap-2 border border-border/50 animate-float z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-green" />
              Admissions Open 2026
            </div>

            {/* Main card */}
            <div
              className="bg-primary-foreground/[0.07] backdrop-blur-xl border border-primary-foreground/15 rounded-2xl p-6 animate-float"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}
            >
              <ul className="flex flex-col gap-3 min-w-[260px]">
                {courseItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 bg-primary-foreground/[0.08] rounded-xl px-4 py-3 text-primary-foreground text-sm font-medium border border-primary-foreground/10"
                  >
                    <item.icon className="w-5 h-5 text-gold-light shrink-0" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating badge bottom-left */}
            <div className="hidden md:flex absolute -bottom-4 -left-8 bg-background rounded-xl px-4 py-2.5 shadow-lg text-sm font-semibold text-primary flex-row items-center gap-2 border border-border/50 animate-float-delayed z-10">
              <MapPin className="w-4 h-4 text-gold" />
              Sai Ssimran City, Raipur
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
