import { ChoosePath } from "@/components/sections/choose-path";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { ProblemVillains } from "@/components/sections/problem-villains";
import { Quests } from "@/components/sections/quests";
import { SocialProof } from "@/components/sections/social-proof";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemVillains />
        <Quests />
        <SocialProof />
        <ChoosePath />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
