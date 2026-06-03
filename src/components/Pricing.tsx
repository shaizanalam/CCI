import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    category: "School Curriculum",
    plans: [
      {
        title: "Class 1st – 4th",
        price: "₹10,000",
        period: "Per Year",
        features: ["All Subjects", "Regular Classes", "Monthly Assessments"],
        popular: false,
      },
      {
        title: "Class 5th – 8th",
        price: "₹16,000",
        period: "Per Year",
        features: ["Maths & Science Focus", "Test Series", "All Subjects Coverage"],
        popular: false,
      },
      {
        title: "Class 9th",
        price: "₹20,000",
        period: "Per Year",
        features: ["Maths & Science", "Study Materials", "T-Shirt Included", "Board Exam Prep"],
        popular: false,
      },
      {
        title: "Class 10th",
        price: "₹20,000",
        period: "Per Year",
        features: [
          "Maths & Science Premium",
          "Study Materials & Notes",
          "T-Shirt Included",
          "Test Series",
          "Exam Series (All Subjects)",
        ],
        popular: true,
      },
    ],
  },
  {
    category: "11th & 12th Science",
    plans: [
      {
        title: "Single Subject",
        price: "₹19,000",
        period: "Per Year",
        features: ["One Subject Focused", "In-Depth Coaching", "Regular Test Series"],
        popular: false,
      },
      {
        title: "Double Subject",
        price: "₹28,000 - ₹30,000",
        period: "Per Year",
        features: ["Two Subjects", "Competitive Exam Prep", "Mock Tests Included"],
        popular: false,
      },
      {
        title: "Triple Subject (PCM/PCB)",
        price: "₹38,000 - ₹45,000",
        period: "Per Year",
        features: [
          "Physics, Chemistry, Maths/Biology",
          "JEE/NEET Preparation",
          "Complete Test Series",
          "Expert Faculty",
        ],
        popular: true,
      },
    ],
  },
  {
    category: "11th & 12th Commerce",
    plans: [
      {
        title: "Commerce Stream",
        price: "₹28,000 - ₹36,000",
        period: "Per Year",
        features: [
          "Accountancy",
          "Economics",
          "Business Studies",
          "Board Exam Focus",
        ],
        popular: true,
      },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="section-tag">Affordable Excellence</div>
        <h2 className="section-title">Fee Structure</h2>
        <p className="section-sub">
          Transparent pricing for quality education across all classes and streams
        </p>

        <div className="space-y-8 md:space-y-16">
          {pricingPlans.map((planGroup, groupIndex) => (
            <div key={planGroup.category}>
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                {planGroup.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 xl:gap-8">
                {planGroup.plans.map((plan, planIndex) => (
                  <motion.div
                    key={plan.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: planIndex * 0.1,
                      duration: 0.5,
                    }}
                    className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                      plan.popular
                        ? "border-gold/50 bg-gradient-to-br from-gold/5 to-gold/[0.02] ring-1 ring-gold/20 lg:scale-105"
                        : "border-border/50 bg-background hover:border-border"
                    }`}
                    style={{ boxShadow: plan.popular ? "var(--shadow-lg)" : "var(--shadow-sm)" }}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 gradient-to-bl from-gold/20 to-transparent w-32 h-32"></div>
                    )}

                    {plan.popular && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <div className={`p-3 sm:p-4 md:p-6 ${plan.popular ? "pt-10 sm:pt-12 md:pt-14" : ""}`}>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-primary mb-1 sm:mb-2">
                        {plan.title}
                      </h4>

                      <div className="mb-4 sm:mb-6">
                        <span className="text-3xl sm:text-4xl font-bold text-gold">{plan.price}</span>
                        <span className="text-muted-foreground text-xs sm:text-sm ml-2">{plan.period}</span>
                      </div>

                      <button
                        onClick={() => {
                          sessionStorage.setItem("selectedCourse", plan.title);
                          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 mb-4 sm:mb-6 ${
                          plan.popular
                            ? "bg-gold text-primary-foreground hover:bg-gold/90"
                            : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                      >
                        Enroll Now
                      </button>

                      <div className="space-y-3">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/[0.03] border border-border rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Terms & Conditions</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-background rounded-xl p-4 border border-border/50">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    Payment Structure
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                    <li>• 30-50% advance payment required</li>
                    <li>• Balance payable in 4 equal installments</li>
                    <li>• All installments must be completed within 4 months</li>
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-4 border border-border/50">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    Demo Period
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                    <li>• 4 days free demo available</li>
                    <li>• Advance fee must be paid after demo period</li>
                    <li>• Demo period is non-transferable</li>
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-4 border border-border/50">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    Refund Policy
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                    <li>• No refund after 1 month of enrollment</li>
                    <li>• Seat reservation affects admission limits</li>
                    <li>• Maximum 24 seats per class only</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-background rounded-xl p-4 border border-border/50">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    Early Withdrawal Charges
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                    <li>• <strong>11th-12th:</strong> ₹5,000 deducted from ₹10,000 advance</li>
                    <li>• <strong>9th-10th:</strong> ₹4,000 deducted from ₹5,000 advance</li>
                    <li>• <strong>5th-8th:</strong> ₹3,500 deducted from ₹5,000 advance</li>
                    <li>• <strong>1st-4th:</strong> ₹3,000 deducted from ₹5,000 advance</li>
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-4 border border-border/50">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                    Policy Changes
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                    <li>• Management reserves rights to modify policies</li>
                    <li>• Changes will be communicated in advance</li>
                    <li>• Existing students protected from sudden changes</li>
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-4 border border-border/50">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                    Additional Information
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-8">
                    <li>• All fees include study materials & assessments</li>
                    <li>• Early bird discounts available</li>
                    <li>• Sibling enrollment benefits offered</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                <strong>Important:</strong> By enrolling, you agree to these terms and conditions. 
                For any clarifications, please contact our administration office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
