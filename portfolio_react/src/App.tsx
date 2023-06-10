import { lazy } from "react";
import Nav from "./components/nav/Nav";
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Experience = lazy(() => import("./components/experience/Experience"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Header = lazy(() => import("./components/header/Header"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Services = lazy(() => import("./components/services/Services"));
const Testimonials = lazy(
  () => import("./components/testimonials/Testimonials")
);
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
