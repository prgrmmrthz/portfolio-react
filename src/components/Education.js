import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";

const Education = () => {
  const [education, setEducation] = useState([
    {
      id: 1,
      position: "Cagayan State University", //School Name
      company: "BACHELOR OF SCIENCE", //Course
      desc: " INFORMATION TECHNOLOGY",
      date: "2010 - 2015",
    },
    {
      id: 2,
      position: "CAGAYAN NATIONAL HIGH SCHOOL", //School Name
      company: "", //Course
      desc: "",
      date: "February 2020 - Present",
    },
    {
      id: 1,
      position: "TUGUEGARAO WEST CENTRAL ELEMENTARY SCHOOL", //School Name
      company: "GS", //Course
      desc: "",
      date: "February 2020 - Present",
    },
  ]);

  return <ExperienceDetails dataList={education} title="Education" id="education" />;
};

export default Education;
