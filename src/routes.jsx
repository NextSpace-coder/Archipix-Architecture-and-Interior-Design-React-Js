import { Routes, Route } from 'react-router-dom';
import App from '@/App.jsx';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import HomeTwo from "@/pages/Home-2.jsx";
import HomeThree from "@/pages/Home-3.jsx";
import Contact from "@/pages/Contact.jsx";
import Faq from "@/pages/Faq.jsx";
import Services from "@/pages/Services.jsx";
import Team from "@/pages/Team.jsx";
import Price from "@/pages/Price.jsx";
import Projects from "@/pages/projects/ProjectIndex.jsx";
import ProjectsShow from "@/pages/projects/ProjectDetails.jsx";
import Blog from "@/pages/blog/BlogIndex.jsx";
import BlogShow from "@/pages/blog/BlogDetails.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home-2" element={<HomeTwo />} />
        <Route path="home-3" element={<HomeThree />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="services" element={<Services />} />
        <Route path="price" element={<Price />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectsShow />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogShow />} />
      </Route>
    </Routes>
  );
}
