
import Navbar from "@/components/Navbar";
import LandingPage from "../pages/home/LandingPage";
import Page2 from "@/pages/home/Page2";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f7f4]">
      <Navbar />
      <LandingPage />
      <Page2/>
    </div>
  );
}
