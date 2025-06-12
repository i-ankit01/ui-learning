import cxi from "@/assets/cxi.jpeg";
import scit from "@/assets/scit.jpeg";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <div>
      <div className="text-center mb-16 mt-16">
        <h2 className="text-4xl font-bold mb-4">
          Work <span className="text-[#FF014F]">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-[#FF014F] mx-auto mb-6"></div>
        <div className=" flex flex-col md:flex-row items-center justify-center md:gap-20 gap-7 md:mt-15">
          <div className="bg-gradient-to-r from-[#FF014F]/7 to-[#FF014F]/15 cursor-pointer rounded-lg md:w-120 w-80 h-auto p-6 border border-[#FF014F]/30 hover:border-[#FF014F]/50 shadow-md shadow-[#FF014F]/20 hover:shadow-lg hover:shadow-[#FF014F]/30 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group">
            <div className="relative">
              <Image
                src={cxi || "/placeholder.svg"}
                alt="Company Logo"
                className="w-16 h-16 rounded-lg object-cover ring-2 ring-[#FF014F]/20 group-hover:ring-[#FF014F]/40 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-[#FF014F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex-1 flex flex-col md:flex-row md:justify-between items-center md:items-center w-full">
              <div className="space-y-1 text-center md:text-left mb-3 md:mb-0">
                <h3 className="text-[#FF014F] text-xl font-bold tracking-tight group-hover:text-[#FF014F] transition-colors duration-300">
                  Coordinator
                </h3>
                <p className="text-white/90 text-sm font-medium">CXI, MIET</p>
              </div>

              <div className="md:text-right">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF014F]/10 border border-[#FF014F]/20">
                  <div className="w-2 h-2 bg-[#FF014F] rounded-full mr-2" />
                  <span className="text-xs text-white/80 font-medium tracking-wide">
                    Feb 2025 - Present
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#FF014F]/7 to-[#FF014F]/15 cursor-pointer rounded-lg md:w-120 w-80 h-auto p-6 border border-[#FF014F]/30 hover:border-[#FF014F]/50 shadow-md shadow-[#FF014F]/20 hover:shadow-lg hover:shadow-[#FF014F]/30 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group">
            <div className="relative">
              <Image
                src={scit || "/placeholder.svg"}
                alt="Company Logo"
                className="w-16 h-16 rounded-lg object-cover ring-2 ring-[#FF014F]/20 group-hover:ring-[#FF014F]/40 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-[#FF014F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex-1 flex flex-col md:flex-row md:justify-between items-center md:items-center w-full">
              <div className="space-y-1 text-center md:text-left mb-3 md:mb-0">
                <h3 className="text-[#FF014F] text-xl font-bold tracking-tight group-hover:text-[#FF014F] transition-colors duration-300">
                  Web Developer
                </h3>
                <p className="text-white/90 text-sm font-medium">SCIT, MIET</p>
              </div>

              <div className="md:text-right">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF014F]/10 border border-[#FF014F]/20">
                  <div className="w-2 h-2 bg-[#FF014F] rounded-full mr-2" />
                  <span className="text-xs text-white/80 font-medium tracking-wide">
                    Sep 2024 - Present
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
