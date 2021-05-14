import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "IT Staff",
      company: "GS",
      desc: "blah blah blah",
      date: "February 2020 - Present",
    },
    {
      id: 2,
      position: "Junior Programmer",
      company: "HITC",
      desc: "blah blah blah",
      date: "February 2020 - Present",
    },
    {
      id: 3,
      position: "IT Specialist",
      company: "HITC",
      desc: "blah blah blah",
      date: "February 2020 - Present",
    },
  ]);
  return (
      <ExperienceDetails dataList={experiences} title="Experience" id="experience" />
  );
};

export default Experience;
