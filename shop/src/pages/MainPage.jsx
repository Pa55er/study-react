import BannerList from "../layout/BannerList";
import ProductsList from "../layout/ProductsList";

export default function MainPage() {
	return (
		<main className="mw">
			<h2>메인페이지</h2>
			<BannerList />
			<ProductsList />
		</main>
	);
}
