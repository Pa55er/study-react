import "./lists.css";
import List from "./List";
import NoList from "./NoList";

export default function Lists({ list, setList }) {
    return (
        <>
            {list.length > 0 ? (
                <ul className="Lists">
                    {list.map((ele, index) => (
                        <List
                            key={index}
                            ele={ele}
                            index={index}
                            list={list}
                            setList={setList}
                        />
                    ))}
                </ul>
            ) : (
                <NoList />
            )}
        </>
    );
}
