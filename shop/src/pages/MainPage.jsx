import BannerList from "../layout/BannerList";
import ProductList from "../layout/ProductList";

export default function MainPage({ products }) {
    return (
        <main className="mw">
            <h2 hidden>메인페이지</h2>
            <BannerList />
            <ProductList products={products} />
        </main>
    );
}
