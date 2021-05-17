import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "IT Operations",
      company: "Golden Seed Inc",
      desc: "Responsible for development of the installation and maintenance of CCTV Systems, network devices, installation / updates / repair computer software systems and hardware components. My function also includes development of the company’s official website and it’s internal inventory system I used Angular for frontend and C# web APi + mysql for back end.",
      date: "February 2020 - Present",
    },
    {
      id: 2,
      position: "Freelance Developer",
      company: "",
      desc: "Intelligent Point Of Sale System or simply INTL POS is a Web Application built on top of Angular (frontend) and C# Web API + MySql (backend) that brings convenience to store owners and cashiers in making transactions on products, discounts, cashiering / sales, generate barcode and sales reports. This project is already deployed and everyday used by many of my clients in Luzon",
      date: "June 2019 - Present",
    },
    {
      id: 3,
      position: "Freelance CCTV Installer and Technician",
      company: "",
      desc: "Responsible for the collection and replacement of CCTV hard drives from designated coaches. Troubleshoot hardware and software malfunctions as well as network issues as it relates to the CCTV system. Commercial IP CCTV security system installation, setup, and repair. Cat5, 5e, 6 structured cable system installation, termination, and testing",
      date: "June 2019 - Present",
    },
    {
      id: 4,
      position: "Junior Programmer",
      company: "HITC",
      desc: "Responsible for front-end and back-end web development. Work with several languages and databases including HTML, CSS, JavaScript, C# Web API, Angular, MySQL/ MariaDB and everything in between. Responsible to construct programs that accomplish specific objectives. Highly experienced with back-end programming languages. Proficient experience using advanced JavaScript libraries and frameworks. Development experience for both web and desktop. Tests and installs the systems onto the computers.",
      date: "OCTOBER 2018 – February 2020",
    },
    {
      id: 5,
      position: "IT Specialist",
      company: "HITC",
      desc: "Responsible to give advice and help to anyone who uses a computer in an organization. Receives the phone calls for help and respond to handle the problems. Solve the problem remotely and on-site visits. Set up and install computer equipment and make most repairs. Support the day-to-day operations of a computer network. Ensure that network systems keep communications and information flowing smoothly. Ensure that employees' workstations are working properly and that the organizations' servers and any mobile equipment are functioning correctly. Install updates for required maintenance, fix any network problems and upgrade computer security systems.",
      date: "SEPTEMBER 2017 - OCTOBER 2018",
    },
    {
      id: 3,
      position: "IT Support",
      company: "The Ritz Carlton, Kuala Lumpur, Malaysia ",
      desc: "Reporting directly to the IT Manager and collaborating closely with other IT team members. Responding to queries in a timely and accurate manner and resolving queries to the user’s satisfaction. Responsible for diagnosing & resolving hardware, software & end users problems. Acting as the first point of contact for all IT & technical queries. Working within a TCP/IP network environment, including DHCP, DNS and ethernet . Involved in the rollout of software updates and patches. Investigate specialist and complex IT support issues. Communicating with third party technical specialists. Maintaining a wide range of computer hardware and software programmes. Provide secondary support for LAN administration.",
      date: "FEBRUARY 2016 - OCTOBER 2016",
    },
  ]);
  return (
      <ExperienceDetails dataList={experiences} title="Experience" id="experience" />
  );
};

export default Experience;
