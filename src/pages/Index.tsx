import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StudentCarousel from "@/components/StudentCarousel";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import Campus from "@/components/Campus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Helmet>
      <title>Chhattisgarh Coaching Institute | Best Coaching in Raipur for NEET, JEE & Boards</title>
      <meta name="description" content="Chhattisgarh Coaching Institute (CCI) is the best coaching in Raipur for NEET, JEE, and Class 10 & 12 Boards. Expert teachers, proven results, and top study material. Join now." />
      <link rel="canonical" href="https://chhattisgarhcoachinginstitute.com/" />
    </Helmet>
    <TopBar />
    <Header />
    <Hero />
    <StudentCarousel />
    <Features />
    <Courses />
    <Pricing />
    <Stats />
    <AboutUs />
    <Campus />
    <Contact />
    <Footer />
  </>
);

export default Index;
