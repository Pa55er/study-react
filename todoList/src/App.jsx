import "./assets/myreset.css";
import "./assets/App.css";
import Header from "./components/header/Header.jsx";
import Input from "./components/input/Input.jsx";
import Totalcount from "./components/totalCount/Totalcount.jsx";
import Lists from "./components/lists/Lists.jsx";
import { useState } from "react";

function App() {
    let [list, setList] = useState([]);

    return (
        <div className="App">
            <Header />
            <Input list={list} setList={setList} />
            <Totalcount count={list.length} />
            <Lists list={list} setList={setList} />
        </div>
    );
}

export default App;
