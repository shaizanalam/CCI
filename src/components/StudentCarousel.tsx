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
import aasthaImage from "@/assets/Aastha.jpeg";
import sakshiImage from "@/assets/Sakshi.jpeg";
import prakharImage from "@/assets/Prakhar.jpeg";
import ajiteshImage from "@/assets/Ajiitesh.jpeg";
import anasImage from "@/assets/Anas.jpeg";
import meghaImage from "@/assets/Megha.jpeg";
import faizaImage from "@/assets/Faiza.jpeg";
import ayushImage from "@/assets/Ayush.jpeg";
import ayaanImage from "@/assets/Ayan.jpeg";
import wazirImage from "@/assets/Wazir.jpeg";

// Class 10th Student data with achievements
const class10Students = [
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
    maths_marks: 94,
    science_marks: 83,
    sst_marks: 93,
    image_url: aaliyaImage
  },
  {
    id: 3,
    name: "Mukta",
    percentage: 90,
    maths_marks: 83,
    science_marks: 93,
    sst_marks: 94,
    image_url: mukhtaImage
  },
  {
    id: 4,
    name: "Karima",
    percentage: 88,
    maths_marks: 74,
    science_marks: 81,
    sst_marks: 93,
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
    name: "Vikas",
    percentage: 88,
    maths_marks: 70,
    science_marks: 76,
    sst_marks: 98,
    image_url: vikasImage
  },
  {
    id: 7,
    name: "Kumkum",
    percentage: 85,
    maths_marks: 85,
    science_marks: 69,
    sst_marks: 83,
    image_url: kumkumImage
  },
  {
    id: 8,
    name: "Vasu",
    percentage: 85,
    maths_marks: 75,
    science_marks: 85,
    sst_marks: 80,
    image_url: vasuImage
  },
  {
    id: 9,
    name: "Ankit",
    percentage: 84,
    maths_marks: 81,
    science_marks: 70,
    sst_marks: 90,
    image_url: ankitImage
  },
  {
    id: 10,
    name: "Sanchita",
    percentage: 84,
    maths_marks: 54,
    science_marks: 75,
    sst_marks: 80,
    image_url: sanchitaImage
  },
  {
    id: 11,
    name: "Jash",
    percentage: 82,
    maths_marks: 79,
    science_marks: 78,
    sst_marks: 70,
    image_url: jashImage
  }
];

// Class 12th Student data with achievements
const class12Students = [
  {
    id: 13,
    name: "Sakshi",
    percentage: 87,
    maths_marks: 86,
    science_marks: 87,
    sst_marks: 88,
    image_url: sakshiImage
  },
  {
    id: 12,
    name: "Aastha",
    percentage: 87,
    maths_marks: 85,
    science_marks: 88,
    sst_marks: 88,
    image_url: aasthaImage
  },
  {
    id: 17,
    name: "Megha",
    percentage: 85,
    maths_marks: 84,
    science_marks: 86,
    sst_marks: 85,
    image_url: meghaImage
  },
  {
    id: 21,
    name: "Wazir",
    percentage: 82,
    maths_marks: 81,
    science_marks: 83,
    sst_marks: 82,
    image_url: wazirImage
  },
  {
    id: 14,
    name: "Prakhar",
    percentage: 81,
    maths_marks: 80,
    science_marks: 82,
    sst_marks: 81,
    image_url: prakharImage
  },
  {
    id: 15,
    name: "Ajitesh",
    percentage: 80,
    maths_marks: 79,
    science_marks: 81,
    sst_marks: 80,
    image_url: ajiteshImage
  },
  {
    id: 18,
    name: "Faiza",
    percentage: 80,
    maths_marks: 79,
    science_marks: 81,
    sst_marks: 80,
    image_url: faizaImage
  },
  {
    id: 16,
    name: "Anas",
    percentage: 78,
    maths_marks: 77,
    science_marks: 79,
    sst_marks: 78,
    image_url: anasImage
  },
  {
    id: 19,
    name: "Ayush",
    percentage: 78,
    maths_marks: 77,
    science_marks: 79,
    sst_marks: 78,
    image_url: ayushImage
  },
  {
    id: 20,
    name: "Ayaan",
    percentage: 72,
    maths_marks: 70,
    science_marks: 73,
    sst_marks: 73,
    image_url: ayaanImage
  }
];

// Individual Student Card Component
const StudentCard = ({ 
  student, 
  isHovered,
  showSubjectMarks = true
}: { 
  student: typeof class10Students[0]; 
  isHovered: boolean;
  showSubjectMarks?: boolean;
}) => {
  return (
    <motion.div
      className="relative bg-background rounded-2xl border border-border/50 p-4 min-w-[280px] max-w-[320px]"
      whileHover={{ 
        scale: 1.05
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
            loading="lazy"
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
        {showSubjectMarks && (
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
        )}
      </div>
    </motion.div>
  );
};

// Reusable Carousel Component
const StudentCarouselSection = ({
  students,
  title,
  subtitle,
  tag,
  showSubjectMarks = true
}: {
  students: typeof class10Students;
  title: string;
  subtitle: string;
  tag: string;
  showSubjectMarks?: boolean;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Duplicate array for seamless loop
  const duplicatedStudents = [...students, ...students];

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
          <div className="section-tag">{tag}</div>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub">
            {subtitle}
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
                  showSubjectMarks={showSubjectMarks}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StudentCarousel = () => {
  return (
    <>
      {/* Class 10th Results */}
      <StudentCarouselSection
        students={class10Students}
        tag="Class 10th Results"
        title="Class 10th Stars"
        subtitle="Celebrating the outstanding academic achievements of our Class 10th students"
        showSubjectMarks={true}
      />
      
      {/* Class 12th Results */}
      <StudentCarouselSection
        students={class12Students}
        tag="Class 12th Results"
        title="Class 12th Stars"
        subtitle="Celebrating the outstanding academic achievements of our Class 12th students"
        showSubjectMarks={false}
      />
    </>
  );
};

export default StudentCarousel;
