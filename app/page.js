import HeroSection from "./components/HeroSection/HeroSection";
import WorksIntro from "./components/WorksIntro/WorksIntro";
import FirstWork from "./components/FirstWork/FirstWork";

export default function Home() {
  return (
    <main className="px-12">
      <HeroSection />
      <WorksIntro />
      <FirstWork />
      <FirstWork />
      <FirstWork />
      <div className="h-screen"></div>
    </main>
  )
}
