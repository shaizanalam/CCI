import { motion } from "framer-motion";
import { GraduationCap, Award, User, Briefcase } from "lucide-react";
import saurabhImage from "@/assets/WhatsApp Image 2026-04-27 at 14.24.31.jpeg";

const AboutUs = () => (
  <section id="about" className="py-12 sm:py-16 md:py-24 bg-cream">
    <div className="section-container">
      <div className="section-tag">About Us</div>
      <h2 className="section-title">Meet Our Founder</h2>
      <p className="section-sub">
        Led by vision and expertise, dedicated to shaping future leaders
      </p>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-3xl p-6 sm:p-8 md:p-10 border border-border/50 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-shrink-0 w-full lg:w-1/3"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-navy-light/10">
                  <img
                    src={saurabhImage}
                    alt="Er Saurabh Sir"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 -z-10" />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex-1 text-center lg:text-left"
            >
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-4">
                Er Saurabh Sir
              </h3>
              
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                A visionary educator and founder of Chhattisgarh Coaching Institute, committed to excellence in education and holistic student development.
              </p>

              {/* Qualifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl border border-primary/10"
                >
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Qualifications</h4>
                    <p className="text-xs text-muted-foreground">
                      BEd, MSc Maths, MSW, BE Mechanical
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl border border-primary/10"
                >
                  <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Experience</h4>
                    <p className="text-xs text-muted-foreground">
                      10+ Years in Education
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 rounded-full border border-gold/20">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span className="text-xs font-medium text-gold">Expert Faculty</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-primary">Student Mentor</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutUs;
