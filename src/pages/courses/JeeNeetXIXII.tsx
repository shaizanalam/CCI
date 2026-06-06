import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JeeNeetXIXII = () => {
  return (
    <>
      <Helmet>
        <title>Best Coaching for Class 11 Science Raipur | JEE NEET Preparation</title>
        <meta name="description" content="Top coaching institute in Raipur for Class 11-12 Science (PCM/PCB). Best JEE Main/Advanced and NEET-UG preparation with expert faculty at Mathpurena." />
        <meta name="keywords" content="best coaching for class 11 science raipur, jee coaching institute in raipur, iit jee preparation center raipur, best coaching for neet in chhattisgarh, top neet coaching classes raipur, class 11 12 pcm pcb coaching mathpurena" />
        <link rel="canonical" href="https://chhattisgarhcoachinginstitute.com/courses/jee-neet-xi-xii" />
        <meta property="og:title" content="Best Coaching for Class 11 Science Raipur | JEE NEET Preparation" />
        <meta property="og:description" content="Top coaching institute in Raipur for Class 11-12 Science (PCM/PCB). Best JEE Main/Advanced and NEET-UG preparation with expert faculty at Mathpurena." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chhattisgarhcoachinginstitute.com/courses/jee-neet-xi-xii" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "JEE & NEET Preparation (Class 11-12)",
              "description": "Premier coaching for Class 11-12 Science students (PCM/PCB) with specialized preparation for JEE Main/Advanced and NEET-UG examinations.",
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
              "courseCode": "JN-001",
              "educationalLevel": "Higher Secondary",
              "offers": {
                "@type": "Offer",
                "category": "Competitive Exam Coaching",
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
                Best Coaching for Class 11 Science Raipur
              </h1>
              <p className="text-lg text-muted-foreground">
                Premier JEE Main/Advanced and NEET-UG preparation at Sai Ssimran City, Mathpurena
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h2 className="font-heading text-xl font-bold text-primary mb-4">JEE Preparation (PCM)</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Complete Physics, Chemistry, Mathematics syllabus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>JEE Main & Advanced focused curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Problem-solving techniques and shortcuts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Regular mock tests and performance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Doubt clearing sessions with experts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h2 className="font-heading text-xl font-bold text-primary mb-4">NEET Preparation (PCB)</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Complete Physics, Chemistry, Biology syllabus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>NEET-UG focused preparation strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>NCERT-based teaching with advanced concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Biology diagram practice and memorization techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Previous year NEET paper analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border/50 p-6 mb-8">
              <h2 className="font-heading text-xl font-bold text-primary mb-4">Class 11-12 Board Preparation</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Complete CBSE/State Board syllabus coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Board exam focused teaching methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Practical exam preparation and guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Time management for board + competitive exams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Regular assessments and parent feedback</span>
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 rounded-xl border border-border/50 p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">JEE Aspirants</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join Raipur's top IIT JEE preparation center
                </p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold text-sm hover:bg-navy-light transition-colors"
                >
                  Start JEE Prep
                </Link>
              </div>
              <div className="bg-primary/5 rounded-xl border border-border/50 p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">NEET Aspirants</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Best NEET coaching in Chhattisgarh
                </p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold text-sm hover:bg-navy-light transition-colors"
                >
                  Start NEET Prep
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default JeeNeetXIXII;
