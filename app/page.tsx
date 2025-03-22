import Hero from "./sections/Hero";
import Destinations from "./sections/Destinations";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import ConsultationForm from "./sections/ConsultationForm";
import Footer from "./sections/Footer";
import AboutUs from "./sections/AboutUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <ConsultationForm />
      <Footer />
    </main>
  );
}
