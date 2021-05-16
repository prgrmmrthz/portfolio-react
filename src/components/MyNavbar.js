import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  const [links, setLinks] = useState([
    {
      href: "#about",
      text: "About",
    },
    {
      href: "#projects",
      text: "Projects",
    },
    {
      href: "#experience",
      text: "Experience",
    },
    {
      href: "#education",
      text: "Education",
    },
    {
      href: "#skills",
      text: "Skills",
    },
    {
      href: "#interests",
      text: "Interests",
    },
    {
      href: "#awards",
      text: "Certifications",
    },
  ]);
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" fixed="top" id="sideNav">
      <Navbar.Brand href="#page-top">
        <span className="d-block d-lg-none">Vicwilton Dayag Salmero</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="imgs/profile.png"
            alt="..."
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent"></Navbar.Toggle>
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav>
          {links.map((data) => (
            <Nav.Link href={data.href}>
              {data.text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
