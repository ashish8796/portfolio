import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Experience() {
  const [isExperience, setIsExperience] = useState("gutesleben");
  const experiences = [
    {
      title: "Fullstack Developer",
      companyName: "Gutes Leben",
      tenure: "May 2023 - Present",
      companyTag: "gutesleben",
      description: [
        "Upgraded React Native to the latest version, optimizing performance with Flashlight and react-native-fast-image.",
        "Enhanced app performance through memoization and useCallback to minimize unnecessary re-renders.",
        "Implemented CI/CD pipelines using Expo EAS builds for streamlined deployment across platforms.",
        "Migrated CMS, a static React app to Next.js 13 for improved SSR and SSG capabilities.",
        "Optimized CMS performance, achieving faster load times and enhanced SEO.",
        "Developed APIs to extend functionality for CMS and mobile app features.",
        "Refactored large APIs into modular components for improved performance and maintainability.",
        "Managed successful migration from Azure to AWS, enhancing system scalability and reliability.",
      ],
    },
    {
      title: "SDE I",
      companyName: "Meesho",
      companyTag: "meesho",
      tenure: "Sep 2021 - Apr 2023",
      description: [
        "Integrated Mini-Games in the community feature on the App, utilizing webview to enhance user engagement and functionality.",
        "Enabled e-commerce on WhatsApp, expanding the reach to millions of users and driving significant growth in sales.",
        "Implemented notifications on the web, improving real-time communication and user experience.",
        "Analyzed and Worked with analytics tools (Mixpanel, Clevertap, GA4), contributing to data-driven decision-making and strategic planning.",
      ],
    },
    {
      title: "Intern",
      companyName: "Masai School",
      tenure: "Jan 2021 - Sep 2021",
      companyTag: "masai",
      description: [
        "Learned and Mastered important concepts in programming, building a strong foundation for a successful career in software development.",
        "Collaborated in building Masai School platform, contributing to design, development, and enhancement of user-centric features.",
      ],
    },
  ];

  const handleCollapseButton = (companyTag) => {
    setIsExperience(companyTag);
  };

  return (
    <div className="flex flex-col py-2 xl:py-4 w-full gap-y-2 sm:gap-y-4 text-start">
      {experiences.map((experience, exp_id) => (
        <div className="flex flex-col flex-wrap w-full p-4" key={exp_id}>
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{experience.title}</h2>
            <button
              onClick={() => {
                handleCollapseButton(experience.companyTag);
              }}
            >
              icon
            </button>
          </div>

          <h2 className="text-md">
            {experience.companyName} - {experience.tenure}
          </h2>

          <p className="text-base w-full break-words">
            {isExperience == experience.companyTag && (
              <motion.ul
                variants={fadeIn("left", 0.4)}
                animate="show"
                exit="hidden"
                className="pt-2 list-disc list-inside"
              >
                {experience.description.map((point, pointId) => (
                  <li key={pointId} className="text-[14px]">
                    {point}
                  </li>
                ))}
              </motion.ul>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
