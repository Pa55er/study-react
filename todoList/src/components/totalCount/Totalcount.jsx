import "./totalCount.css";

export default function Totalcount({ count }) {
    return (
        <div className="Totalcount">
            <span>Total</span>
            <div className="count">{count}</div>
        </div>
    );
}
