const CheckList = ({ dataList, icon }) => {
  return (
    <ul className="fa-ul mb-0">
      {dataList.map((data) => (
        <li>
          <span className="fa-li">
            <i className={icon}></i>
          </span>
          {data}
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
