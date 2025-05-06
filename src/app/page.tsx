//! Components
import Hero from "@/components/Hero";
import DarkToggleButton from "@/components/buttons/DarkToggleButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300 isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <DarkToggleButton />
      <Hero />
    </div>
  );
}
