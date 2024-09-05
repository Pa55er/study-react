import style from "../styles/ListCard.module.css";

export default function ListCard({ item }) {
    return (
        <li className={style.ListCard}>
            <div>
                <div className={style.cardImg}>
                    <img src={`/img/${item.img}`} alt={item.title} />
                </div>
                <div className={style.cardInfo}>
                    <p>{item.title}</p>
                    <p>{item.price}원</p>
                </div>
                <span className={style.discount}>{item.discount}%</span>
            </div>
        </li>
    );
}
