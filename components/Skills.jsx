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
  // const skills = [
  //   {
  //     title: "Frontend Development",
  //     skills: [
  //       { name: "HTML", Icon: FaHtml5 },
  //       { name: "Css", Icon: FaCss3 },
  //       { name: "Javascript", Icon: FaJs },
  //       { name: "Typescript", Icon: SiTypescript },
  //       { name: "React Js", Icon: FaReact },
  //       { name: "React Native", Icon: TbBrandReactNative },
  //       { name: "Next Js", Icon: SiNextdotjs },
  //     ],
  //   },

  //   {
  //     title: "Backend Development",
  //     skills: [
  //       { name: "Node Js", Icon: FaNodeJs },
  //       { name: "Express Js", Icon: SiExpress },
  //       { name: "Java", Icon: FaJava },
  //       { name: "Sprint Boot", Icon: SiSpringboot },
  //     ],
  //   },

  //   {
  //     title: "Database",
  //     skills: [
  //       { name: "Mongoose", Icon: SiMongoose },
  //       { name: "MongoDB", Icon: SiMongodb },
  //       { name: "SQL", Icon: TbSql },
  //       { name: "PostgreSQL", Icon: SiPostgresql },
  //     ],
  //   },

  //   {
  //     title: "Cloud",
  //     skills: [{ name: "AWS", Icon: FaAws }],
  //   },

  //   {
  //     title: "Other",
  //     skills: [{ name: "Git", Icon: FaGit }],
  //   },
  // ];

  const skills1 = [
    { name: "HTML", Icon: FaHtml5 },
    { name: "Css", Icon: FaCss3 },
    { name: "Javascript", Icon: FaJs },
    { name: "Typescript", Icon: SiTypescript },
    { name: "React Js", Icon: FaReact },
    { name: "React Native", Icon: TbBrandReactNative },
    { name: "Next Js", Icon: SiNextdotjs },
    { name: "Node Js", Icon: FaNodeJs },
    { name: "Express Js", Icon: SiExpress },
    { name: "Java", Icon: FaJava },
    { name: "Sprint Boot", Icon: SiSpringboot },
    { name: "Mongoose", Icon: SiMongoose },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "SQL", Icon: TbSql },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "AWS", Icon: FaAws },
    { name: "Git", Icon: FaGit },
  ];

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 border py-2 xl:py-6 gap-8 xs:gap-4 xl:gap-16 justify-items-center mb-[80px]">
        {skills1.map((skill, skillI) => (
          <div
            key={skillI}
            className="flex flex-col max-w-max items-center justify-between text-white gap-y-3"
          >
            <p className="text-white xl:text-2xl md:text-xl sm:text-lg text-base">
              {skill.name}
            </p>
            <div>
              <skill.Icon className="xl:text-5xl text-2xl" />
            </div>
          </div>
        ))}
      </div>
      <div className="border h-8 w-full"></div>
    </>
  );
}
