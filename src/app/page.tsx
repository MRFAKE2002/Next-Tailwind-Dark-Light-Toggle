//! Components
import Hero from "@/components/Hero";
import DarkToggleButton from "@/components/buttons/DarkToggleButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300">
      <DarkToggleButton />
      <Hero />
    </div>
  );
}
