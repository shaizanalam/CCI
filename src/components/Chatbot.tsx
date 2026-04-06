import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, GraduationCap } from "lucide-react";

type ResponseKey = "courses" | "fees" | "location" | "admission" | "contact" | "timings";

interface ChatMessage {
  type: "bot" | "user";
  content: string;
  buttons?: ResponseKey[];
}

const responses: Record<ResponseKey, { title: string; emoji: string; message: string; buttons: ResponseKey[] }> = {
  courses: {
    title: "Our Courses", emoji: "📚",
    message: "1. 11th & 12th PCM — Physics, Chemistry, Mathematics\n2. 11th & 12th PCB — Physics, Chemistry, Biology\n3. School Curriculum (1st–12th) — All subjects, all boards",
    buttons: ["fees", "admission", "contact"],
  },
  fees: {
    title: "Fee Structure", emoji: "💰",
    message: "PCM/PCB: ₹25,000–₹35,000/year\nSchool (1-10): ₹8,000–₹15,000/subject\nSchool (11-12): ₹10,000–₹20,000/subject\n\nScholarships & sibling discounts available!",
    buttons: ["courses", "admission"],
  },
  location: {
    title: "Our Location", emoji: "📍",
    message: "Sai Ssimran City, Raipur, Mathpurena, Chhattisgarh 492013\n\nNear Mathpurena Chowk, Raipur",
    buttons: ["contact", "timings"],
  },
  admission: {
    title: "Admission Process", emoji: "🎓",
    message: "Call: +91 91318 60077\nEmail: admissions@chhattisgarhcoaching.com\n\nDocuments needed:\n• Previous year mark sheet\n• School ID proof\n• 2 passport photos",
    buttons: ["contact", "fees", "courses"],
  },
  contact: {
    title: "Contact Info", emoji: "📞",
    message: "Phone: +91 91318 60077\nEmail: info@chhattisgarhcoaching.com\nAddress: Sai Ssimran City, Raipur",
    buttons: ["location", "timings", "courses"],
  },
  timings: {
    title: "Working Hours", emoji: "⏰",
    message: "Mon–Sat: 8:00 AM – 8:00 PM\nSunday: 10:00 AM – 4:00 PM\n\nBatches: Morning (7-11AM), Afternoon (12-4PM), Evening (4-8PM)",
    buttons: ["contact", "location"],
  },
};

const initialButtons: ResponseKey[] = ["courses", "fees", "location", "admission", "contact", "timings"];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSelect = (key: ResponseKey) => {
    const r = responses[key];
    setMessages((prev) => [
      ...prev,
      { type: "user", content: `${r.emoji} ${r.title}` },
      { type: "bot", content: r.message, buttons: r.buttons },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[340px] sm:w-[360px] h-[480px] bg-background rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-navy-light text-primary-foreground p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-sm">CCC Assistant</h3>
                <p className="text-xs text-primary-foreground/70">Ask me anything!</p>
              </div>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-surface">
              {/* Welcome */}
              <div className="bg-background rounded-2xl rounded-bl-sm p-3 text-sm shadow-sm border border-border max-w-[85%]">
                <strong>Hello! 👋</strong><br />
                I'm your assistant from <strong>Chhattisgarh Coaching Centre</strong>. How can I help?
              </div>

              {/* Quick buttons for initial */}
              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2">
                  {initialButtons.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleSelect(key)}
                      className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {responses[key].emoji} {responses[key].title}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i}>
                  {msg.type === "user" ? (
                    <div className="ml-auto max-w-[85%] bg-gradient-to-r from-primary to-navy-light text-primary-foreground rounded-2xl rounded-br-sm p-3 text-sm">
                      {msg.content}
                    </div>
                  ) : (
                    <>
                      <div className="max-w-[85%] bg-background rounded-2xl rounded-bl-sm p-3 text-sm shadow-sm border border-border whitespace-pre-line">
                        {msg.content}
                      </div>
                      {msg.buttons && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {msg.buttons.map((key) => (
                            <button
                              key={key}
                              onClick={() => handleSelect(key)}
                              className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {responses[key].emoji} {responses[key].title}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="p-3 bg-surface border-t border-border text-center text-xs text-muted-foreground">
              Select any option above for instant information
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-navy-light text-primary-foreground shadow-xl flex items-center justify-center border-2 border-background"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
