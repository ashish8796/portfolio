import { motion } from "framer-motion";
import { useState } from "react";

import { fadeIn } from "../../variants";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";

const About = () => {
  const [tab, setTab] = useState("skill");

  return (
    <div className="bg-primary/30 xl:py-32 py-40 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:mt-12">
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
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:-z-0 z-10`}
              onClick={() => setTab("experience")}
            >
              Experience
            </div>
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {tab === "skill" && <Skills />}
            {tab === "experience" && <Experience />}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
