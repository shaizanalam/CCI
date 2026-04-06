import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, Users, BookOpen, Clock, Wifi } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "7 experienced educators and subject matter specialists with proven competitive exam track records and decades of combined teaching experience.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "98% success rate consistently maintained across all courses with numerous top rankers in NEET, JEE, and board examinations every year.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Intentionally limited class sizes ensure each student receives personalized attention, progress tracking, and targeted improvement plans.",
  },
  {
    icon: BookOpen,
    title: "Premium Study Materials",
    description: "Comprehensive, up-to-date study materials crafted by our faculty — covering theory, practice questions, and mock test series.",
  },
  {
    icon: Clock,
    title: "Flexible Batch Timings",
    description: "Morning (7–11 AM), Afternoon (12–4 PM), and Evening (4–8 PM) batches designed to suit every student's schedule.",
  },
  {
    icon: Wifi,
    title: "Modern Infrastructure",
    description: "AC classrooms, high-speed WiFi, smart boards, and a clean learning environment — everything designed to maximize focus and retention.",
  },
];

const Features = () => (
  <section id="features" className="py-24 bg-cream">
    <div className="section-container">
      <div className="section-tag">Why Choose Us</div>
      <h2 className="section-title">Built for Student Success</h2>
      <p className="section-sub">
        We don't just teach — we mentor, monitor, and motivate every student to reach their full potential.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-background rounded-2xl p-7 border border-border/50 group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            style={{ boxShadow: "var(--shadow-sm)" }}
          >
            {/* Top gradient bar on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-5 shadow-md">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
