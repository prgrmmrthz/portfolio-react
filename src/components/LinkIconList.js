const LinkIconList = ({ dataList }) => {
  return (
    <div className="social-icons">
      {dataList.map((data) => (
        <a
          className="social-icon"
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={data.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default LinkIconList;
