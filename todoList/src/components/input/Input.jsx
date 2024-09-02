import { useState, useRef } from "react";
import "./input.css";

export default function Input({ list, setList }) {
    let [text, setText] = useState("");
    const inputRef = useRef();

    return (
        <div className="Input">
            <input
                id="textInput"
                type="text"
                placeholder="가고 싶은 여행지를 등록하세요"
                value={text}
                ref={inputRef}
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
                    if (text === "") {
                        alert("입력 내용이 없습니다.");
                    } else {
                        setList([...list, text]);
                        setText("");
                        inputRef.current.focus();
                    }
                }}
            >
                <span>ADD</span>
                <i className="fa-solid fa-circle-plus"></i>
            </div>
        </div>
    );
}
