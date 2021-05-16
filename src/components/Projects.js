import { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import MyModal from "./MyModal";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projs, setProjs] = useState([
    {
      title: "Intelligent Point Of Sale System",
      img: "assets/img/projects/pos/intl pos.png",
      imgpreviews: [
        "assets/img/projects/pos/pos1.jpg",
        "assets/img/projects/pos/pos2.jpg",
        "assets/img/projects/pos/pos3.jpg",
        "assets/img/projects/pos/pos4.png",
        "assets/img/projects/pos/pos5.png",
        "assets/img/projects/pos/pos6.png",
        "assets/img/projects/pos/pos7.png",
        "assets/img/projects/pos/pos8.png",
      ],
    },
  ]);
  const [modalValues, setModalValues] = useState({
    title: "",
    imgpreviews: [],
  });

  const handleSetModalState = ({ title, imgpreviews }) => {
    setModalValues({
      ...modalValues,
      title: title,
      imgpreviews: imgpreviews,
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
              <Carousel>
                {modalValues.imgpreviews.map((d) => (
                  <Carousel.Item>
                    <img
                      className="w-100"
                      src={d}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
            </div>
          </div>
        </Container>
      </MyModal>
    </div>
  );
};

export default Projects;
