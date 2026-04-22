import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Trophy, Users, CalendarCheck } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Students Trained", icon: GraduationCap },
  { value: 98, suffix: "%", label: "Success Rate", icon: Trophy },
  { value: 7, suffix: "+", label: "Expert Faculty", icon: Users },
  { value: 12, suffix: "+", label: "Years of Excellence", icon: CalendarCheck },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="font-heading text-4xl sm:text-5xl font-black text-primary-foreground leading-none">
      {count}<sup className="text-lg align-super">{suffix}</sup>
    </div>
  );
};

const Stats = () => (
  <section
    className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, hsl(215 65% 16%) 0%, hsl(215 50% 26%) 100%)",
    }}
  >
    {/* Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />

    <div className="section-container relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center py-6"
          >
            <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-primary-foreground/60 text-sm font-medium tracking-wide mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
