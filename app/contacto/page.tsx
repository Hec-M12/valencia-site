import Navbar from "../custom-components/Navbar";
import Footer from "../custom-components/Footer";
import ContactanosSection from "../custom-components/ContactanosSection";

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