import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MiddleHighSchool = () => {
  return (
    <>
      <Helmet>
        <title>Coaching Institute Raipur for Class 9 and 10 | Board Exam Preparation</title>
        <meta name="description" content="Best coaching institute in Raipur for Class 9 and 10 board exam preparation. Expert faculty for Math, Science, and SST with proven results at Mathpurena." />
        <meta name="keywords" content="coaching institute raipur for class 9 and 10, class 6 7 8 tuition raipur math science, class 10 board exam coaching raipur, best coaching for class 9 10 mathpurena, board preparation raipur" />
        <link rel="canonical" href="https://chhattisgarhcoachinginstitute.com/courses/middle-high-school" />
        <meta property="og:title" content="Coaching Institute Raipur for Class 9 and 10 | Board Exam Preparation" />
        <meta property="og:description" content="Expert faculty for Math, Science, and SST with proven results at Mathpurena." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chhattisgarhcoachinginstitute.com/courses/middle-high-school" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Middle & High School Coaching (Class 6-10)",
              "description": "Comprehensive coaching for Class 6 to 10 students focusing on board exam preparation with expert faculty in Math, Science, and SST.",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Chhattisgarh Coaching Institute",
                "telephone": "+919131860077",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sai Ssimran City, Raipur, Mathpurena",
                  "addressLocality": "Raipur",
                  "addressRegion": "Chhattisgarh",
                  "postalCode": "492013",
                  "addressCountry": "IN"
                }
              },
              "courseCode": "MHS-001",
              "educationalLevel": "Middle School",
              "offers": {
                "@type": "Offer",
                "category": "Tuition",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>

      <TopBar />
      <Header />

      <main className="bg-background py-12 sm:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

            <header className="mb-10">
              <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Coaching Institute Raipur for Class 9 and 10
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive board exam preparation with expert faculty at Sai Ssimran City, Mathpurena
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h2 className="font-heading text-xl font-bold text-primary mb-4">Class 6-8 Foundation</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Strong conceptual understanding in Math & Science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>English language development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Social Studies with interactive learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Regular tests and performance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Homework assistance and doubt clearing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h2 className="font-heading text-xl font-bold text-primary mb-4">Class 9-10 Board Prep</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Complete syllabus coverage for Board exams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Previous year paper practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Board-specific exam strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Time management and exam techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Mock tests with detailed analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border/50 p-6 mb-8">
              <h2 className="font-heading text-xl font-bold text-primary mb-4">Subjects for Class 6-10</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">📐</span>
                  <span className="text-muted-foreground">Mathematics</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">🔬</span>
                  <span className="text-muted-foreground">Science (Physics, Chemistry, Biology)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">📚</span>
                  <span className="text-muted-foreground">English</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">🌍</span>
                  <span className="text-muted-foreground">Social Studies</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">🇮🇳</span>
                  <span className="text-muted-foreground">Hindi</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-lg">💻</span>
                  <span className="text-muted-foreground">Computer Science</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl border border-border/50 p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">Secure Your Board Results</h2>
              <p className="text-muted-foreground mb-6">
                Join Raipur's trusted coaching institute for Class 9-10 board exam success
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-navy-light transition-colors"
              >
                Enroll Now for Board Prep
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MiddleHighSchool;
