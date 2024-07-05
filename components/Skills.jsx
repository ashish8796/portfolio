import React from "react";
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

export default function Skills() {
  const skills = [
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
  ];

  return (
    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
      {skills.map((item, itemI) => (
        <div
          key={itemI}
          className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60 mb-8"
        >
          <div className="font-light mb-2 md:mb-0 text-xl">{item.title}</div>
          <div>{item.stage}</div>

          <div className="flex gap-x-8">
            {item.skills?.map((skill, skillI) => (
              <div
                key={skillI}
                className="flex flex-col items-center text-3xl text-white"
              >
                <p className="text-white text-xl mb-2">{skill.name}</p>
                <skill.Icon />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
