import Image from "next/image";
import Me from "../public/me.png";
import SkillsGrid from "./SkillsGrid";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1">
            About Me
          </h2>
          <p className="dark:text-neutral-300]">
            Frontend Developer → Full‑Stack (in progress). Focus on UI (user
            interface) & UX (user experience) with TypeScript, React, and
            Next.js.
          </p>
          <div className="h-max md:flex md:items-center md:justify-center">
            <div className="relative md:w-[400px] h-[200px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden transition-colors">
                <div className="w-full h-full flex items-end justify-center">
                  <Image
                    src={Me}
                    alt="Ega Liyando"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <p className="dark:text-neutral-300 leading-relaxed md:ml-4">
              Hi, I’m{" "}
              <span className="font-medium dark:text-white">Ega Liyando</span> —
              a Frontend Developer with
              <span className="mx-1 font-medium dark:text-white">
                4+ years
              </span>{" "}
              building fast, accessible web apps. I craft clean interfaces,
              reusable components, and solid state management. Currently
              leveling up to Full‑Stack with Node.js, Express JS, and PostgreSQL
              — including API (application programming interface) design, auth,
              and deployment.
            </p>
          </div>
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}
