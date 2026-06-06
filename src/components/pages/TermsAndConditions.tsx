import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Chhattisgarh Coaching Institute</title>
        <meta
          name="description"
          content="Read the terms and conditions of Chhattisgarh Coaching Institute."
        />
        <link rel="canonical" href="https://chhattisgarhcoachinginstitute.com/terms" />
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
                Terms and Conditions - Top Educational Institute in Raipur
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: May 13, 2026
              </p>
            </header>

            <article className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground dark:prose-invert">
              <p>
              By accessing chhattisgarhcoachinginstitute.com, you agree to be bound by these terms. If you are under 18, you must have parental or guardian consent to use our services.
              </p>

              <h2>Acceptance of Terms</h2>
              <p>
              By using our website and services, you agree to:
- Provide accurate information when registering
- Follow all course instructions and guidelines
- Pay all applicable fees on time
- Respect intellectual property rights
- Maintain confidentiality of your account information
              </p>

              <h2>Student Responsibilities</h2>
              <p>
              Students are responsible for:
- Attending classes and completing assignments
- Following all course guidelines
- Maintaining confidentiality of their account information
- Not sharing course materials with others
- Not using the platform for illegal activities
- Not sharing personal information with others
- Not sharing course materials with others
- Not using the platform for illegal activities
- Not sharing personal information with others
- Not sharing course materials with others
- Not using the platform for illegal activities
              </p>

              <h2>Fees, Refunds, and Policies</h2>
              <p>
              We charge reasonable fees for our services. Refunds are subject to our refund policy.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
              Our liability is limited to the amount paid for services. We are not liable for indirect losses
              </p>

              <h2>Contact Information</h2>
              <p>
                For any queries related to these terms, contact us at{" "}
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

export default TermsAndConditions;
