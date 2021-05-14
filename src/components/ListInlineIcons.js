const ListInlineIcons = ({dataList}) => {
  return (
    <ul className="list-inline dev-icons">
      {dataList.map((data) => (
        <li className="list-inline-item" key={data.id}>
          <i className={data.cn}></i>
        </li>
      ))}
    </ul>
  );
};

export default ListInlineIcons;
