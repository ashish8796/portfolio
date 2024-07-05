import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaAws,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative, TbSql } from "react-icons/tb";

import { fadeIn } from "../../variants";
import Skills from "../../components/Skills";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        skills: [
          { name: "HTML", Icon: FaHtml5 },
          { name: "Css", Icon: FaCss3 },
          { name: "Javascript", Icon: FaJs },
          { name: "Typescript", Icon: SiTypescript },
          { name: "React Js", Icon: FaReact },
          { name: "React Native", Icon: TbBrandReactNative },
          { name: "Next Js", Icon: SiNextdotjs },
        ],
      },

      {
        title: "Backend Development",
        skills: [
          { name: "Node Js", Icon: FaNodeJs },
          { name: "Express Js", Icon: SiExpress },
          { name: "Java", Icon: FaJava },
          { name: "Sprint Boot", Icon: SiSpringboot },
        ],
      },

      {
        title: "Database",
        skills: [
          { name: "Mongoose", Icon: SiMongoose },
          { name: "MongoDB", Icon: SiMongodb },
          { name: "SQL", Icon: TbSql },
          { name: "PostgreSQL", Icon: SiPostgresql },
        ],
      },

      {
        title: "Cloud",
        skills: [{ name: "AWS", Icon: FaAws }],
      },

      {
        title: "Other",
        skills: [{ name: "Git", Icon: FaGit }],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

const About = () => {
  const [tab, setTab] = useState("skill");

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left xl:mt-12">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center w-full"
        >
          <div className="w-full flex justify-center gap-x-16 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            <div
              className={`${
                tab === "skill" &&
                "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              } cursor-pointer z-10 capitalize xl:text-lg relative after:w-8 after:h-[2px] 
              after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setTab("skill")}
            >
              Skills
            </div>

            <div
              className={`${
                tab === "experience" &&
                "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:-z-0  z-10 `}
              onClick={() => setTab("experience")}
            >
              Experience
            </div>
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {tab === "skill" && <Skills />}
            {tab === "experience" && <Skills />}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
