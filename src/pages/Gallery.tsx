import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Chhattisgarh Coaching Institute | Campus Photos & Events</title>
        <meta name="description" content="Explore our campus, classrooms, events, and student activities at Chhattisgarh Coaching Institute. See our modern facilities and learning environment." />
        <meta name="keywords" content="CCI gallery, coaching institute campus, Raipur coaching photos, classroom photos, education events" />
        <meta property="og:title" content="Gallery - Chhattisgarh Coaching Institute" />
        <meta property="og:description" content="Explore our campus, classrooms, events, and student activities" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery - Chhattisgarh Coaching Institute" />
        <meta name="twitter:description" content="Explore our campus, classrooms, events, and student activities" />
      </Helmet>

      <TopBar />
      <Header />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary to-navy-light relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-primary-foreground mb-6">
                Gallery
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Explore our vibrant campus life, modern facilities, and the journey of excellence at Chhattisgarh Coaching Institute
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Gallery Grid Section */}
        <GalleryGrid />
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
