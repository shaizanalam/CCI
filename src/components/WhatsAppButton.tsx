import whatsappLogo from "@/assets/whatsapp.png";

const WhatsAppButton = () => {
  const phoneNumber = "919131860077"; // CCI phone number without + or spaces
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello%20CCI%2C%20I%20would%20like%20to%20know%20more%20about%20your%20coaching%20programs.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Open WhatsApp"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppButton;
