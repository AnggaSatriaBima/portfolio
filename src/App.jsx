import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Portfolios from "./pages/Portfolio";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <div className="bg-gray-800 text-gray-500">
        <Navbar />
        <main id="hero" className="relative -top-20">
          <Hero />
          <Services />
          <Portfolios />
          <Experiences />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
