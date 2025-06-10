// to use this make two components one IconCloud IconCloudDemo also install npm i react-icon-cloud next-themes and then set ThemeProvider in main.jsx
'use client'
import React from "react";
import IconCloud from "@/components/IconCloud";

const IconCloudDemo = () => {
  const slugs = [
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "mongodb",
    "nextdotjs",
    "vercel",
    "git",
    "prisma",
    "mui",
    "bootstrap",
    "amazonwebservices",
    "github",
    "postman",
    "docker",
    "typescript",
    "c",
    "mysql",
    "python",
    "postgresql",
    "tailwindcss",
    "cplusplus",
    "googlecolab",
    "jupyter",
    "npm",
    "redux",
    "gnubash",
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IconCloudDemo;
