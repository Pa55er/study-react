export default function List({ index, ele, setModal, setNumber }) {
    return (
        <li
            key={index}
            onClick={() => {
                setModal(true);
                setNumber(index);
            }}
        >
            리스트{index}-{ele}
        </li>
    );
}
