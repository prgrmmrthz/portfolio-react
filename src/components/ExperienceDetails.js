const ExperienceDetails = ({ dataList, title, id }) => {
  return (
    <div className="experience-details">
      <section className="resume-section" id={id}>
        <div className="resume-section-content">
          <h2 className="mb-5">{title}</h2>
          {dataList.map((data) => (
            <div
              className="d-flex flex-column flex-md-row justify-content-between mb-5"
              key={data.id}
            >
              <div className="flex-grow-1">
                <h3 className="mb-0">{data.position}</h3>
                <div className="subheading mb-3">{data.company}</div>
                <p>{data.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">{data.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetails;
