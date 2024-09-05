import ListCard from "../components/ListCard";
import style from "../styles/ProductList.module.css";

export default function ProductList({ products }) {
    return (
        <section className={style.ProductList}>
            <h2>신상품 리스트 (6개)</h2>
            <a href="#">전체보기</a>
            <ul className={style.listCon}>
                {products.map((item) => (
                    <ListCard key={item.id} item={item} />
                ))}
            </ul>
        </section>
    );
}
