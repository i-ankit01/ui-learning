
export default function Projects() {
  const projects = [
    {
      title: "FarmHelp AI",
      description: "A full-featured e-commerce platform with product management and payment integration.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Tailwind", "MongoDB" , "Express", "Python", "Gemini"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Space Walk",
      description: "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Tailwind", "Solarinet API"],
      github: "https://github.com/yourusername/taskmanager",
      live: "https://taskmanager-demo.vercel.app",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["JavaScript", "Weather API"],
      github: "https://github.com/yourusername/weather",
      live: "https://weather-demo.vercel.app",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio-demo.vercel.app",
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/blog",
      live: "https://blog-demo.vercel.app",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private and group messaging.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Socket.io", "Express"],
      github: "https://github.com/yourusername/chat",
      live: "https://chat-demo.vercel.app",
    },
    {
      title: "Movie Database",
      description: "Search and browse movies with details and user reviews.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "TMDB API", "CSS"],
      github: "https://github.com/yourusername/movies",
      live: "https://movies-demo.vercel.app",
    },
    {
      title: "Fitness Tracker",
      description: "Track workouts, nutrition, and fitness progress over time.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Chart.js", "Firebase"],
      github: "https://github.com/yourusername/fitness",
      live: "https://fitness-demo.vercel.app",
    },
  ]

  return (
    <section id="projects" className="py-10 px-4 md:ml-17 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-[#FF014F]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF014F] mx-auto mb-8"></div>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is built with a focus on performance, user experience, and
            clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-[#FF014F]/30 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-40">
                <img
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
                <h3 className="text-lg font-bold mb-1 text-[#FF014F]">{project.title}</h3>
                <p className="text-zinc-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-black text-xs text-[#FF014F] rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
