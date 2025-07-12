import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactanosSection from "@/components/sections/ContactanosSection";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-slate-100 py-16">
        <ContactanosSection />
      </div>
      <Footer />
    </>
  );
}