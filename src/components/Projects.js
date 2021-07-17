import { useState } from "react";
import { Image } from "react-bootstrap";
import Lightbox from 'react-image-lightbox';

const Projects = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [projs, setProjs] = useState([
    {
      code: "iNTL POS",
      title: "Intelligent Point Of Sale System",
      img: "assets/img/projects/intl pos.png",
      imgpreviews: [
        "assets/img/projects/pos/pos4.jpg",
        "assets/img/projects/pos/pos5.jpg",
        "assets/img/projects/pos/pos7.jpg",
        "assets/img/projects/pos/pos8.jpg"
      ],
      desc: `Intelligent Point Of Sale System or simply (iNTL POS) is a Web Application
       built on top of Angular (frontend) and C# Web API + MySql (backend)
       that brings convenience to store owners and cashiers in making transactions on
        products, discounts, cashiering / sales, generate barcode and sales reports.
        This project is already deployed and everyday used by many of my clients in Luzon`,
    },
    {
      code: "iNTL INVENT",
      title: "Intelligent Inventory System",
      img: "assets/img/projects/intl invent.png",
      imgpreviews: [
        "assets/img/projects/invent/c1.jpg",
        "assets/img/projects/invent/c2.jpg",
        "assets/img/projects/invent/c3.jpg",
        "assets/img/projects/invent/c4.jpg",
        "assets/img/projects/invent/c5.jpg",
        "assets/img/projects/invent/c6.jpg"
      ],
      desc: `Intelligent Inventory System or simply (iNTL INVENT) is a Web Application
       built on top of React JS (frontend) and C# Web API + MySql (backend)
       primarilly used for for tracking inventory levels, orders, sales and deliveries.
       It can also be used in the manufacturing industry to create a work order, bill of
        materials and other production-related documents.`,
    },
    {
      code: "iNTL GRADING",
      title: "Intelligent Grading System",
      img: "assets/img/projects/intl grading.png",
      imgpreviews: [
        "assets/img/projects/grading/c1.jpg",
        "assets/img/projects/grading/c2.jpg",
        "assets/img/projects/grading/c3.jpg",
        "assets/img/projects/grading/c4.jpg"
      ],
      desc: `Intelligent Grading System or simply iNTL Grading is a Web Application
       built on top of React JS (frontend) and C# Web API + MySql (backend)
       that brings convenience to teacher in marking their students grade quarterly.
       The system then plot it to excel file template in which an end-user would easily customize the card`,
    },
    {
      code: "iNTL SMS Notif",
      title: "Intelligent SMS Notification",
      img: "assets/img/projects/intl sms.png",
      imgpreviews: ['assets/img/projects/sms/c1.jpg'],
      desc: `Intelligent SMS Notification or simply INTL SMS Notif is a Web Application
       built on top of C#.Net (frontend) and MySql (backend).Used for sending short message service (SMS) or text messages in bulk to many
         recipients stored in a Mysql database. This is useful for sending bulk SMS marketing blasts or automating your
            transactional SMS messages.`,
    },
  ]);

  const handleOpenLightBox= (d,i) => {
    setImages([...d]);
    setPhotoIndex(i);
    setIsOpen(true);
  }

  return (
    <div id="projects">
      <div class="container">
        <div class="text-center mt-5">
          <h1>PROJECTS</h1>
        </div>
      </div>
      {projs.map((proj) => (
        <div>
          <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img
                    className="card-img-top mb-5 mb-md-0"
                    src={proj.img}
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <h1 className="display-5 fw-bolder">{proj.code}</h1>
                  <div className="fs-5 mb-5">
                    <span>{proj.title}</span>
                  </div>
                  <p className="lead">{proj.desc}</p>
                </div>
              </div>
            </div>
          </section>

          <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row g-0">
                  {proj.imgpreviews.map((imgsrc, i) =>
                    (<div class="col-lg-4 col-sm-6">
                      <Image onClick={() => handleOpenLightBox(proj.imgpreviews, i)}
                        thumbnail
                        src={imgsrc}
                        alt={proj.code + (i + 1)}
                        srl_gallery_image="true" // Add this if your thumbnail is not recognized
                      />
                    </div>)
                 )}
                </div>
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      ))}
      {isOpen && (
          <Lightbox imagePadding={100} enableZoom={false}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length -1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
    </div>
  );
};

export default Projects;
