import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "./index.scss";

AOS.init();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
