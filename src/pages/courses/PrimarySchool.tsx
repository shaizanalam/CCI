import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrimarySchool = () => {
  return (
    <>
      <Helmet>
        <title>Best Tuition Center in Raipur for Class 1 to 5 | CCI LearnHub</title>
        <meta name="description" content="CCI LearnHub offers the best tuition center in Raipur for Class 1 to 5. Expert teachers, personalized attention, and strong foundation building for young students in Mathpurena." />
        <meta name="keywords" content="best tuition center in raipur for class 1 2 3 4 5, coaching classes from class 1 to 12 in raipur, primary school coaching raipur, foundation classes raipur, best coaching for class 1 2 3 4 5 mathpurena" />
        <link rel="canonical" href="https://chhattisgarhcoachinginstitute.com/courses/primary-school" />
        <meta property="og:title" content="Best Tuition Center in Raipur for Class 1 to 5 | CCI LearnHub" />
        <meta property="og:description" content="Expert teachers, personalized attention, and strong foundation building for young students in Mathpurena." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chhattisgarhcoachinginstitute.com/courses/primary-school" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Primary School Coaching (Class 1-5)",
              "description": "Comprehensive foundation coaching for Class 1 to 5 students in Raipur with expert teachers and personalized attention.",
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
              "courseCode": "PS-001",
              "educationalLevel": "Primary School",
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
                Best Tuition Center in Raipur for Class 1 to 5
              </h1>
              <p className="text-lg text-muted-foreground">
                Building strong foundations for young minds at Sai Ssimran City, Mathpurena
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h2 className="font-heading text-xl font-bold text-primary mb-4">Our Primary School Program</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Personalized attention for Class 1-5 students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Strong foundation in Mathematics and English</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Interactive learning with visual aids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Regular assessments and progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Safe and nurturing environment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border/50 p-6">
                <h2 className="font-heading text-xl font-bold text-primary mb-4">Subjects Covered</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Mathematics (Basic to Advanced)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>English (Reading & Writing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Hindi (Language Development)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Environmental Science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>General Knowledge & Mental Ability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl border border-border/50 p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">Enroll Your Child Today</h2>
              <p className="text-muted-foreground mb-6">
                Give your child the best start with our expert coaching at Mathpurena, Raipur
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-navy-light transition-colors"
              >
                Contact Us for Enrollment
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrimarySchool;
