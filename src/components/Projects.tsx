import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import farmhelp from "../assets/farm-help.webp";
import spacewalk from "../assets/space-walk.webp";
import autowrite from "../assets/autowrite.webp";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const projects = [
    {
      title: "FarmHelp AI",
      description:
        "A direct marketplace for the agriculture helping both farmers and companies streamline their product exchange and transactions.",
      image: farmhelp,
      technologies: [
        "React",
        "Tailwind",
        "MongoDB",
        "Express",
        "Python",
        "Gemini",
      ],
      github: "https://github.com/i-ankit01/FarmHelp",
      live: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "AutoWrite",
      description:
        "A pre prompted AI tool to effectively generate contents like email description, startup pitch etc.",
      image: autowrite,
      technologies: ["Next.js", "Toast Editor", "Gemini API", "Shadcn UI"],
      github: "https://github.com/i-ankit01/AutoWrite",
      live: "https://weather-demo.vercel.app",
    },
    {
      title: "Space Walk",
      description:
        "A space book leveraging exploration of different celestial bodies in a structured manner.",
      image: spacewalk,
      technologies: ["React", "Tailwind", "Solarinet API"],
      github: "https://github.com/i-ankit01/space-walk",
      live: "https://taskmanager-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-10 px-4 md:ml-17 md:mt-5 ">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-[#FF014F]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF014F] mx-auto mb-8"></div>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is built with a
            focus on performance, user experience, and clean code.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-[#FF014F]/30 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden ">
                <Image
                  width={500}
                  height={300}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF014F] text-black p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-[#FF014F]">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-black text-xs text-[#FF014F] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-5 py-1 flex justify-between mb-2 md:hidden">
                <Link href={project.live} target="_blank" className="w-18 h-6 px-2 bg-white rounded-full flex items-center gap-2 pl-3">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  
                  <p className="text-black text-sm font-semibold">Live</p>
                </Link>
                <Link href={project.github} target="_blank" className="w-22 h-6 px-2 bg-white rounded-full flex items-center gap-2 pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="black"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                 
                  <p className="text-black text-sm font-semibold">Github</p>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
