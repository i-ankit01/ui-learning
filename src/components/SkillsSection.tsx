"use client";
import IconCloudDemo from "@/components/IconCloudDemo";
import { Button } from "@/components/ui/moving-border";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillsMarquee from "./SkillsMarquee";

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
    rootMargin: "0px",
  });

  return (
    <section id="about" className="py-10 px-4 md:ml-17 md:mt-20">
      <div className="container mx-auto md:px-4 px-1">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-[#FF014F]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF014F] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I specialize in a range of technologies across the full stack
            development spectrum. Here's a breakdown of my technical expertise.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center md:mb-16 "
        >
          <SkillsMarquee />
        </motion.div>

        <div className="mt-7">
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
}
