import "./header.css";

export default function Header() {
    return (
        <h1 className="Header">
            <i className="fa-solid fa-rocket"></i>
            <div>
                <span className="front">가자</span>
                <span className="back">여행</span>
            </div>
        </h1>
    );
}
