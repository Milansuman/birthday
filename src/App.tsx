import Particles from "../Particles/Particles";

export default function App() {
  return (
    <main className="bg-black w-screen h-screen text-center relative flex flex-col gap-3 justify-center items-center overflow-hidden">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="absolute top-0 left-0 w-full h-full"
      />
      <h1 className="font-bold text-4xl z-20 text-white">
        Happy birthday Pooja!
      </h1>
      <p className="text-neutral-200 text-xl">
        You shine brighter than the stars themselves.
      </p>
    </main>
  );
}
