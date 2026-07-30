import { EntranceLoader } from "@/components/sections/EntranceLoader";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { ArchitectureExplorer } from "@/components/sections/ArchitectureExplorer";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { StackSection } from "@/components/sections/StackSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { CursorFollower } from "@/components/ui/CursorFollower";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030305] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400">
      {/* Entrance Monogram Animation */}
      <EntranceLoader />

      {/* Magnetic Cursor Follower */}
      <CursorFollower />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Story Sections Flow */}
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ExperienceSection />
      <WorksSection />
      <ArchitectureExplorer />
      <TimelineSection />
      <StackSection />
      <AchievementsSection />
      <JournalSection />
      <VisionSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
