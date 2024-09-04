import "./Box.css";
import scissors from "/img/scissors.png";
import rock from "/img/rock.png";
import paper from "/img/paper.png";
import question from "/img/questionmark.png";

export default function Box({ user, item, result }) {
    const imgMap = {
        scissors,
        rock,
        paper,
        question,
    };

    const displayResult =
        user === "상대선수"
            ? result === "이겼다"
                ? "졌다"
                : result === "졌다"
                ? "이겼다"
                : result
            : result;

    const getClass = () => {
        if (displayResult === "이겼다") return "win";
        if (displayResult === "졌다") return "lose";
        return "tie";
    };

    return (
        <div className={`Box ${getClass()}`}>
            <h2>{user}</h2>
            <img
                className="item-img"
                src={imgMap[item?.img] || question}
                alt="rock"
            />
            <p>{displayResult}</p>
        </div>
    );
}
