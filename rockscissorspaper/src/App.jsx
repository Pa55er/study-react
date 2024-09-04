import "./styles/myreset.css";
import "./styles/App.css";
import Box from "./components/Box";
import { useState } from "react";

function App() {
    const choice = {
        scissors: {
            name: "가위",
            img: "scissors",
        },
        rock: {
            name: "바위",
            img: "rock",
        },
        paper: {
            name: "보",
            img: "paper",
        },
    };

    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState("시작");

    const play = (item) => {
        let userChoice = choice[item];
        let computerChoice = randomSelect();
        setUserSelect(userChoice);
        setComputerSelect(computerChoice);
        setResult(judgement(userChoice, computerChoice));
    };

    const randomSelect = () => {
        let itemArr = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArr.length);
        let final = itemArr[randomItem];
        return choice[final];
    };

    const judgement = (user, computer) => {
        return user.name === computer.name
            ? "비김"
            : user.name === "가위"
            ? computer.name === "보"
                ? "이겼다"
                : "졌다"
            : user.name === "바위"
            ? computer.name === "가위"
                ? "이겼다"
                : "졌다"
            : computer.name === "바위"
            ? "이겼다"
            : "졌다";
    };

    return (
        <main className="App">
            <h1>신나는 가위바위보 게임</h1>
            <section>
                <Box user="나님" item={userSelect} result={result} />
                <Box user="상대선수" item={computerSelect} result={result} />
            </section>
            <div className="btns">
                <button
                    onClick={() => {
                        play("scissors");
                    }}
                >
                    가위
                </button>
                <button
                    onClick={() => {
                        play("rock");
                    }}
                >
                    바위
                </button>
                <button
                    onClick={() => {
                        play("paper");
                    }}
                >
                    보
                </button>
            </div>
        </main>
    );
}

export default App;
