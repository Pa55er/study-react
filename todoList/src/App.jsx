import "./assets/myreset.css";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Input from "./components/input/Input.jsx";
import Totalcount from "./components/totalCount/Totalcount.jsx";
import Lists from "./components/lists/Lists.jsx";
import { useState } from "react";

function App() {
    let [text, setText] = useState("");
    let [list, setList] = useState([]);

    return (
        <div className="App">
            <Header />
            <Input
                text={text}
                list={list}
                setText={setText}
                setList={setList}
            />
            <Totalcount count={list.length} />
            <Lists list={list} setList={setList} />
        </div>
    );
}

export default App;
