import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";
import saraImage from "@/assets/sara.jpeg";
import aaliyaImage from "@/assets/aaliya.jpeg";
import mukhtaImage from "@/assets/mukhta.jpeg";
import karimaImage from "@/assets/karima.jpeg";
import shaizanImage from "@/assets/shaizan.jpeg";
import vikasImage from "@/assets/vikas.jpeg";
import kumkumImage from "@/assets/kumkum.jpeg";
import vasuImage from "@/assets/vasu.jpeg";
import ankitImage from "@/assets/ankit.jpeg";
import sanchitaImage from "@/assets/sanchita.jpeg";
import jashImage from "@/assets/jash.jpeg";
import vanshikaImage from "@/assets/vanshika.jpeg";
import lakshImage from "@/assets/laksh.jpeg";
import zoeabImage from "@/assets/zoeab.jpeg";

// Student data with achievements
const studentAchievements = [
  {
    id: 1,
    name: "Sara Shireen",
    percentage: 98,
    maths_marks: 97,
    science_marks: 95,
    sst_marks: 100,
    image_url: saraImage
  },
  {
    id: 2,
    name: "Aaliya",
    percentage: 92,
    maths_marks: 95,
    science_marks: 90,
    sst_marks: 91,
    image_url: aaliyaImage
  },
  {
    id: 3,
    name: "Mukta",
    percentage: 90,
    maths_marks: 90,
    science_marks: 87,
    sst_marks: 87,
    image_url: mukhtaImage
  },
  {
    id: 4,
    name: "Karima",
    percentage: 88,
    maths_marks: 93,
    science_marks: 89,
    sst_marks: 91,
    image_url: karimaImage
  },
  {
    id: 5,
    name: "Shaizan",
    percentage: 88,
    maths_marks: 88,
    science_marks: 86,
    sst_marks: 87,
    image_url: shaizanImage
  },
  {
    id: 6,
    name: "Vikash",
    percentage: 88,
    maths_marks: 91,
    science_marks: 88,
    sst_marks: 88,
    image_url: vikasImage
  },
  {
    id: 7,
    name: "Kumkum",
    percentage: 85,
    maths_marks: 95,
    science_marks: 92,
    sst_marks: 92,
    image_url: kumkumImage
  },
  {
    id: 8,
    name: "Vasu",
    percentage: 85,
    maths_marks: 92,
    science_marks: 89,
    sst_marks: 89,
    image_url: vasuImage
  },
  {
    id: 9,
    name: "Ankit",
    percentage: 84,
    maths_marks: 87,
    science_marks: 85,
    sst_marks: 86,
    image_url: ankitImage
  },
  {
    id: 10,
    name: "Sanchita",
    percentage: 84,
    maths_marks: 96,
    science_marks: 93,
    sst_marks: 93,
    image_url: sanchitaImage
  },
  {
    id: 11,
    name: "Jash",
    percentage: 82,
    maths_marks: 86,
    science_marks: 84,
    sst_marks: 85,
    image_url: jashImage
  },
  {
    id: 12,
    name: "Vanshika",
    percentage: 76,
    maths_marks: 94,
    science_marks: 91,
    sst_marks: 91,
    image_url: vanshikaImage
  },
  {
    id: 13,
    name: "Laksh",
    percentage: 87,
    maths_marks: 90,
    science_marks: 88,
    sst_marks: 89,
    image_url: lakshImage
  },
  {
    id: 14,
    name: "Zoeab",
    percentage: 91,
    maths_marks: 93,
    science_marks: 90,
    sst_marks: 90,
    image_url: zoeabImage
  }
];

// Individual Student Card Component
const StudentCard = ({ 
  student, 
  isHovered 
}: { 
  student: typeof studentAchievements[0]; 
  isHovered: boolean;
}) => {
  return (
    <motion.div
      className="relative bg-background rounded-2xl border border-border/50 shadow-md p-4 min-w-[280px] max-w-[320px]"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Achievement Badge */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
        <Trophy className="w-4 h-4 text-white" />
      </div>

      {/* Student Image */}
      <div className="relative mb-4">
        <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-navy-light/10">
          <img
            src={student.image_url}
            alt={student.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Glow effect on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Student Info */}
      <div className="text-center">
        <h3 className="font-heading text-lg font-bold text-primary mb-2">
          {student.name}
        </h3>
        
        {/* Percentage Display */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="w-4 h-4 text-gold" />
          <span className="text-2xl font-black text-primary">
            {student.percentage}%
          </span>
        </div>

        {/* Subject Marks Grid */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="bg-primary/5 rounded-lg p-2 text-center">
            <div className="font-semibold text-primary">Maths</div>
            <div className="text-muted-foreground">{student.maths_marks}</div>
          </div>
          <div className="bg-primary/5 rounded-lg p-2 text-center">
            <div className="font-semibold text-primary">Science</div>
            <div className="text-muted-foreground">{student.science_marks}</div>
          </div>
          <div className="bg-primary/5 rounded-lg p-2 text-center">
            <div className="font-semibold text-primary">SST</div>
            <div className="text-muted-foreground">{student.sst_marks}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StudentCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Duplicate array for seamless loop
  const duplicatedStudents = [...studentAchievements, ...studentAchievements];

  return (
    <section className="py-12 sm:py-16 bg-cream overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-tag">Achievements</div>
          <h2 className="section-title">Student Stars</h2>
          <p className="section-sub">
            Celebrating the outstanding academic achievements of our brilliant students
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: isPaused ? 0 : [0, -duplicatedStudents.length * 312], // 312px = card width + gap
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: duplicatedStudents.length * 3, // 3 seconds per card
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedStudents.length * 312}px`, // Ensure container width
            }}
          >
            {duplicatedStudents.map((student, index) => (
              <div
                key={`${student.id}-${index}`}
                className="flex-shrink-0"
                onMouseEnter={() => setHoveredCard(student.percentage)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <StudentCard 
                  student={student} 
                  isHovered={hoveredCard === student.percentage}
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default StudentCarousel;
