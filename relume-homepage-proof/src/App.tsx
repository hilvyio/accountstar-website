import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteChrome } from "@/components/SiteChrome";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { AboutPage } from "@/pages/AboutPage";
import { TeamPage } from "@/pages/TeamPage";
import { ResourcesPage } from "@/pages/ResourcesPage";
import { ReviewsPage } from "@/pages/ReviewsPage";
import { ContactPage } from "@/pages/ContactPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { serviceDetails } from "@/content";

function App() {
  return (
    <BrowserRouter>
      <SiteChrome>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {serviceDetails.map((page) => (
            <Route key={page.path} path={page.path} element={<ServiceDetailPage page={page} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteChrome>
    </BrowserRouter>
  );
}

export default App;
