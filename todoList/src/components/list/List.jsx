import "./list.css";

export default function List({ list, setList }) {
    return (
        <>
            {list.length > 0 ? (
                <ul className="List">
                    {list.map((ele, index) => (
                        <li key={index}>
                            <span>{ele}</span>
                            <i
                                className="fa-solid fa-trash-can"
                                onClick={() => {
                                    setList(list.filter((e, i) => i !== index));
                                }}
                            ></i>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="NoList">
                    <i className="fa-regular fa-file"></i>
                    <p>등록된 여행지가 없습니다.</p>
                </div>
            )}
        </>
    );
}
