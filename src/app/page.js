import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FashionVideo from "../components/FashionVideo";
import BrandStory from "../components/BrandStory";
import Lookbook from "../components/Lookbook";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />

<FeaturedProducts />

<Categories />

<FashionVideo />
<BrandStory />
<Lookbook />
<Stats/>

<Testimonials />

<Newsletter />

<Footer />
    </>
  );
}