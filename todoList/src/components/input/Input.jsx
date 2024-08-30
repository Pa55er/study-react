import "./input.css";

export default function Input({ text, list, setText, setList }) {
    return (
        <div className="Input">
            <input
                id="textInput"
                type="text"
                placeholder="가고 싶은 여행지를 등록하세요"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                onKeyUp={(e) => {
                    if (e.target.value.trim() === "") {
                        alert("입력 내용이 없습니다.");
                    } else if (e.key === "Enter") {
                        setList([...list, text]);
                        setText("");
                        e.target.focus();
                    }
                }}
            />
            <div
                className="InputBtn"
                onClick={() => {
                    const target = document.getElementById("textInput");
                    if (text === "") {
                        alert("입력 내용이 없습니다.");
                    } else {
                        setList([...list, text]);
                        setText("");
                        target.focus();
                    }
                }}
            >
                <span>ADD</span>
                <i className="fa-solid fa-circle-plus"></i>
            </div>
        </div>
    );
}
