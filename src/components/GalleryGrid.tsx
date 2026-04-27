import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Gallery image data with categories
const galleryImages = [
  { 
    id: 1, 
    src: "https://lh5.googleusercontent.com/p/AF1QipO7V3p9h2e8z4XqN8W7v6K5m3L1J2o9Qf8R7t6s=w400-h400", 
    category: "Campus", 
    title: "Main Campus Building" 
  },
  { id: 2, src: "/images/classroom-1.jpg", category: "Classrooms", title: "Modern Classroom" },
  { id: 3, src: "/images/campus-2.jpg", category: "Campus", title: "Campus Garden" },
  { id: 4, src: "/images/events-1.jpg", category: "Events", title: "Annual Function 2024" },
  { id: 5, src: "/images/classroom-2.jpg", category: "Classrooms", title: "Smart Classroom" },
  { id: 6, src: "/images/events-2.jpg", category: "Events", title: "Workshop Session" },
  { id: 7, src: "/images/campus-3.jpg", category: "Campus", title: "Library Building" },
  { id: 8, src: "/images/students-1.jpg", category: "Students", title: "Study Group" },
  { id: 9, src: "/images/lab-1.jpg", category: "Facilities", title: "Science Lab" },
  { id: 10, src: "/images/students-2.jpg", category: "Students", title: "Sports Activity" },
  { id: 11, src: "/images/facilities-1.jpg", category: "Facilities", title: "Computer Lab" },
  { id: 12, src: "/images/events-3.jpg", category: "Events", title: "Guest Lecture" },
];

const categories = ["All", "Campus", "Classrooms", "Events", "Students", "Facilities"];

const ImageModal = ({ 
  image, 
  isOpen, 
  onClose, 
  onPrevious, 
  onNext 
}: {
  image: typeof galleryImages[0] | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          {/* Previous Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-7xl max-h-[90vh] mx-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-1">{image.title}</h3>
              <p className="text-white/70 text-sm">{image.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ImageCard = ({ 
  image, 
  onClick, 
  index 
}: { 
  image: typeof galleryImages[0]; 
  onClick: () => void; 
  index: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-background border border-border/50 shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          } ${isLoading ? "opacity-0" : "opacity-100"}`}
        />
        
        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
            <p className="text-xs opacity-80">{image.category}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const navigateImage = (direction: "next" | "previous") => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === "next") {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-cream">
      <div className="section-container">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-muted-foreground hover:bg-primary/10 border border-border/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={() => openModal(image)}
              index={index}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No images found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
        onPrevious={() => navigateImage("previous")}
        onNext={() => navigateImage("next")}
      />
    </section>
  );
};

export default GalleryGrid;
