import ListCard from "../components/ListCard";
import style from "../styles/ShopPage.module.css";

export default function ShopPage({ products }) {
    return (
        <main className={`${style.ShopPage} mw`}>
            <h2>Shop Page</h2>
            <nav>
                <button>등록순</button>
                <button>낮은가격</button>
                <button>높은가격</button>
                <button>높은할인률</button>
            </nav>
            <ul className={style.listCon}>
                {products.map((item) => (
                    <ListCard key={item.id} item={item} />
                ))}
            </ul>
        </main>
    );
}
