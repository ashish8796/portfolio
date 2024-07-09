import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Fullstack Developer",
      companyName: "Gutes Leben",
      tenure: "May 2023 - Present",
      description: "",
    },
    {
      title: "SDE I",
      companyName: "Meesho",
      tenure: "Sep 2021 - Apr 2023",
      description: "",
    },
    {
      title: "Intern",
      companyName: "Masai School",
      tenure: "Jan 2021 - Sep 2021",
      description: "",
    },
  ];

  return (
    <div>
      {experiences.map((experience, exp_id) => (
        <div>
          <h2>{experience.title}</h2>
          <h2>
            {experience.companyName} - {experience.tenure}
          </h2>
        </div>
      ))}
    </div>
  );
}
