import { Clock, MapPin, Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground/85 text-sm py-2 hidden md:block">
    <div className="section-container flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-gold" />
          Mon–Sat: 8AM–8PM | Sun: 10AM–4PM
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          Sai Ssimran City, Raipur, CG 492013
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a href="tel:+919131860077" className="flex items-center gap-1.5 hover:text-gold-light transition-colors">
          <Phone className="w-3.5 h-3.5 text-gold" />
          +91 91318 60077
        </a>
        <a href="mailto:info@chhattisgarhcoaching.com" className="flex items-center gap-1.5 hover:text-gold-light transition-colors">
          <Mail className="w-3.5 h-3.5 text-gold" />
          info@chhattisgarhcoaching.com
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
