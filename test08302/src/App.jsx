import "./assets/myreset.css";
import "./assets/App.css";
import { useState } from "react";
import Modal from "./Modal";
import List from "./List";

function App() {
    let [title, setTitle] = useState("가고 싶은 여행지");
    let [list, setList] = useState([
        "볼거리 많은 여수",
        "힐링 제주",
        "먹거리 많은 전남",
    ]);
    let [count, setCount] = useState(5);
    let [modal, setModal] = useState(false);
    let [number, setNumber] = useState(0);

    const changeTitle = () => {
        setTitle("가고 싶은 여행지 변경");
    };

    // 문제가 있어 보임
    // const changeList = () => {
    //     setList((preList) => ({ ...preList.sort() }));
    // };

    const changeList = () => {
        setList((preList) => [...preList].sort());
    };

    return (
        <>
            <div className="App">
                <button onClick={changeTitle}>제목변경</button>
                <button onClick={changeList}>리스트순서변경</button>
                <h1 className="title">
                    <p>{title} </p>
                    <span
                        onClick={() => {
                            setCount((a) => a + 1);
                        }}
                    >
                        {count}
                    </span>
                </h1>
                <ul className="listCon">
                    {list.map((ele, index) => (
                        <List
                            key={index}
                            index={index}
                            ele={ele}
                            setModal={setModal}
                            setNumber={setNumber}
                        />
                    ))}
                </ul>
            </div>
            {modal === true ? (
                <Modal list={list} number={number} setModal={setModal} />
            ) : null}
        </>
    );
}

export default App;
