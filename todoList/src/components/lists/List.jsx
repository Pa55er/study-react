export default function List({ ele, index, list, setList }) {
    return (
        <li key={index}>
            <span>{ele}</span>
            <i
                className="fa-solid fa-trash-can"
                onClick={() => {
                    setList(list.filter((e, i) => i !== index));
                }}
            ></i>
        </li>
    );
}
