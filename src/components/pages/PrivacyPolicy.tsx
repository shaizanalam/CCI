import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Chhattisgarh Coaching Institute</title>
        <meta
          name="description"
          content="Read the privacy policy of Chhattisgarh Coaching Institute."
        />
        <link rel="canonical" href="https://chhattisgarhcoachinginstitute.com/privacy" />
      </Helmet>

      <TopBar />
      <Header />

      <main className="bg-background py-12 sm:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:p-10">
            <div className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

            <header className="mb-10 border-b border-border/70 pb-6">
              <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Privacy Policy - Best Coaching Institute in Raipur
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: May 13, 2026
              </p>
            </header>

            <article className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground dark:prose-invert">
              <p>
              Chhattisgarh Coaching Institute (CCI) respects your privacy. This policy explains how we collect, use, and protect your information when you use our website and learning portal. .
              </p>

              <h2>Information We Collect</h2>
              <p>
              We collect information from you when you visit our website, register for a course, or contact us. This may include:
- Personal information (name, email, phone)
- Demographic information (age, gender, location)
- Payment and transaction data
- IP address and browser information
- Course preferences and progress
              </p>

              <h2>How We Use Information</h2>
              <p>
              We use your information to:
- Process your course registrations
- Provide you with personalized learning materials
- Communicate with you about your progress
- Improve our website and services
- Comply with legal requirements
              </p>

              <h2>Communication Consent</h2>
              <p>
                By sharing your contact details with us, you consent to receive
                communication from us through SMS, Email, WhatsApp, phone calls,
                and other relevant channels regarding admissions, classes,
                notices, promotions, and student support.
              </p>

              <h2>Your Rights</h2>
              <p>
              You have the right to:
- Access your personal information
- Request corrections to your information
- Opt out of marketing communications
- Delete your account (if applicable)
- Complain to a data protection authority
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this policy, please contact us at{" "}
                <a href="mailto:info@chhattisgarhcoachinginstitute.com">
                  info@chhattisgarhcoachinginstitute.com
                </a>
                {" "}or call us at{" "}
                <a href="tel:+919131860077">91318 60077</a>.
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
