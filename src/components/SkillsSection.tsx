import IconCloudDemo from "@/components/IconCloudDemo";
import { Button } from "@/components/ui/moving-border";

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind",
        "Redux",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "REST API", "PostgreSQL"],
    },
    {
      name: "Languages & Tools",
      skills: ["Java", "Python", "C", "Postman", "Git", "Docker", "VS Code"],
    },
  ];

  return (
    <section id="about" className="py-10 px-4 md:ml-17">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-[#FF014F]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF014F] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I specialize in a range of technologies across the full stack
            development spectrum. Here's a breakdown of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#FF014F]/7 to-[#FF014F]/15 rounded-lg p-6 border border-[#FF014F]/30 hover:border-[#FF014F]/30 shadow-md shadow-[#FF014F] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-center mb-6 text-[#FF014F]">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 md:ml-10 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Button
                    key={skillIndex}
                    borderRadius="1.75rem"
                    className="px-3 py-2 bg-black border border-[#FF014F]/30 cursor-pointer rounded-lg text-center hover:border-[#FF014F]/30 hover:text-[#FF014F] transition-colors duration-300"
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        {/* <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Webpack", "Babel", "SASS", "Material UI", "Bootstrap", "jQuery", "PHP", "Python", "SQL", "NoSQL"].map(
            (skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-sm font-medium hover:text-[#FF014F] hover:border-[#FF014F]/30 transition-colors duration-300"
              >
                {skill}
              </div>
            ),
          )}
        </div> */}
        <div className="mt-7">
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
}
