import { useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import MyModal from "./MyModal";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projs, setProjs] = useState([
    {
      title: "Intelligent Point Of Sale System",
      img: "assets/img/projects/intl pos.png",
      imgpreviews: [
        "assets/img/projects/pos/pos4.jpg",
        "assets/img/projects/pos/pos5.jpg",
        "assets/img/projects/pos/pos7.jpg",
        "assets/img/projects/pos/pos8.jpg",
      ],
      desc: `Intelligent Point Of Sale System or simply INTL POS is a Web Application
       built on top of Angular (frontend) and C# Web API + MySql (backend)
       that brings convenience to store owners and cashiers in making transactions on
        products, discounts, cashiering / sales, generate barcode and sales reports.
        This project is already deployed and everyday used by many of my clients in Luzon`
    },
  ]);
  const [modalValues, setModalValues] = useState({
    title: "",
    imgpreviews: [],
  });

  const handleSetModalState = ({ title, imgpreviews, desc }) => {
    setModalValues({
      ...modalValues,
      title: title,
      imgpreviews: imgpreviews,
      desc: desc
    });
    console.debug(modalValues);
  };

  return (
    <div>
      <section className="page-section portfolio" id="projects">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Projects
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">
            {projs.map((p) => (
              <div
                className="col-md-6 col-lg-4 mb-5"
                onClick={() => {
                  handleSetModalState(p);
                  setOpenModal(true);
                }}
              >
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal1"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={p.img} alt="..." />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MyModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={modalValues.title}
      >
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Carousel interval="3000" nextIcon={<i class="fas fa-arrow-right"></i>}>
                {modalValues.imgpreviews.map((d) => (
                  <Carousel.Item>
                    <Image src={d} thumbnail rounded />
                  </Carousel.Item>
                ))}
              </Carousel>
              <hr className="m-4" />
              <p className="mb-5">
                {modalValues.desc}
              </p>
            </div>
          </div>
        </Container>
      </MyModal>
    </div>
  );
};

export default Projects;
