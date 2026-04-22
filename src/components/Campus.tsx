import { motion } from "framer-motion";
import { Snowflake, Wifi, MonitorSmartphone, BookOpen, ShieldCheck, ParkingCircle, MapPin } from "lucide-react";
import campusImg from "@/assets/campus.jpg";
import classroomImg from "@/assets/classroom.jpg";

const facilities = [
  { icon: Snowflake, label: "AC Classrooms" },
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: MonitorSmartphone, label: "Smart Boards" },
  { icon: BookOpen, label: "Study Library" },
  { icon: ShieldCheck, label: "Safe Environment" },
  { icon: ParkingCircle, label: "Easy Parking" },
];

const Campus = () => (
  <section id="campus" className="py-12 sm:py-16 md:py-24 bg-cream">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[450px]"
        >
          <div className="absolute top-0 left-0 w-3/4 h-[340px] rounded-2xl overflow-hidden shadow-lg">
            <img src={campusImg} alt="Campus Building" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[240px] rounded-2xl overflow-hidden shadow-lg border-4 border-background">
            <img src={classroomImg} alt="Classroom" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-tag">Our Campus</div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-4">
            A Modern Learning Environment in Raipur
          </h3>
          <p className="text-muted-foreground text-base mb-6 leading-relaxed">
            Located in Sai Ssimran City, Mathpurena, our campus provides a distraction-free, conducive atmosphere equipped with everything a student needs to excel.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {facilities.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2.5 bg-background rounded-xl px-3.5 py-3 border border-border/50 text-sm font-semibold text-primary"
              >
                <f.icon className="w-4 h-4 text-gold shrink-0" />
                {f.label}
              </div>
            ))}
          </div>

          <a
            href="https://maps.app.goo.gl/UhPRbhTiFqNkzCFe9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3 rounded-full font-semibold text-sm shadow-md hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
          >
            <MapPin className="w-4 h-4" />
            View on Google Maps
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Campus;
