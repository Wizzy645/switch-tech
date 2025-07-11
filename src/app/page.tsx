import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoWeAre from "@/components/About";
import ServicesAutoCarousel from "../components/ServicesCarousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ServicesAutoCarousel />
      <ContactForm />
      <Footer />
    </>
  ); 
}
