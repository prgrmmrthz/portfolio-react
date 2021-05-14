import { useState } from "react";
import CheckList from "./CheckList";
import ListInlineIcons from "./ListInlineIcons";

const Skills = () => {
  const [icons, setIcons] = useState([
    { id: 1, cn: "fab fa-html5" },
    { id: 2, cn: "fab fa-css3-alt" },
    { id: 3, cn: "fab fa-js-square" },
    { id: 4, cn: "fab fa-angular" },
    { id: 5, cn: "fab fa-react" },
    { id: 6, cn: "fab fa-node-js" },
    { id: 7, cn: "fab fa-npm" },
  ]);

  const [workflow, setWorkflow]= useState([
      "Mobile-First, Responsive Design",
      "Cross Browser Testing & Debugging",
      "Cross Functional Teams",
      "Agile Development & Scrum",
      "Parallel testing"
  ]);

  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ListInlineIcons dataList={icons} icon="fas fa-check" />
        <div className="subheading mb-3">Workflow</div>
        <CheckList dataList={workflow} icon="fas fa-check" />
      </div>
    </section>
  );
};

export default Skills;
