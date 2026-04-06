import { motion } from "framer-motion";
import { FlaskConical, Dna, PencilLine, ArrowRight } from "lucide-react";

const courses = [
  {
    icon: FlaskConical,
    title: "11th & 12th Maths (PCM)",
    label: "PCM",
    description: "Complete coaching for Physics, Chemistry, and Maths with intensive problem-solving sessions and regular test series for board & JEE preparation.",
    tags: ["JEE Foundation", "Board Exams", "Practice Tests"],
    gradient: "from-[hsl(215,65%,16%)] to-[hsl(215,50%,35%)]",
  },
  {
    icon: Dna,
    title: "11th & 12th Science (PCB)",
    label: "PCB",
    description: "Expert NEET preparation with focused Biology coaching, detailed theory sessions, and regular mock tests from experienced medical faculty.",
    tags: ["NEET Prep", "Biology Focus", "Mock Tests"],
    gradient: "from-[hsl(150,45%,20%)] to-[hsl(150,45%,33%)]",
  },
  {
    icon: PencilLine,
    title: "11th & 12th  Commerce (COM)",
    label: "COM",
    description: "Focused coaching for Commerce stream students covering Accountancy, Business Studies, and Economics with exam-ready practice and board support.",
    tags: ["Accountancy", "Business Studies", "Economics"],
    gradient: "from-[hsl(40,60%,22%)] to-[hsl(40,50%,34%)]",
  },
  {
    icon: PencilLine,
    title: "School Curriculum (Class 1–12)",
    label: "All Boards",
    description: "Comprehensive academic support for CBSE, ICSE, and State Board students with regular assessments and concept-building sessions.",
    tags: ["CBSE", "ICSE", "State Board"],
    gradient: "from-[hsl(10,50%,18%)] to-[hsl(10,45%,30%)]",
  },
];

const Courses = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="section-container">
        <div className="section-tag">Our Programmes</div>
        <h2 className="section-title">Courses We Offer</h2>
        <p className="section-sub">
          From foundational school support to advanced competitive exam coaching — we cover it all.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-border/50 bg-background group hover:-translate-y-2 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              {/* Card header with gradient */}
              <div className={`h-[200px] bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
                <course.icon className="w-16 h-16 text-primary-foreground/30" />
                <span className="absolute top-4 left-4 bg-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  {course.label}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{course.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {course.tags.map((tag) => (
                    <span key={tag} className="bg-primary/[0.06] text-primary text-xs font-semibold px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm group/link hover:text-primary transition-colors"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
