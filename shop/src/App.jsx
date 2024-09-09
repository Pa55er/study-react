import { Route, Routes } from "react-router-dom";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import OurPage from "./pages/OurPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

function App() {
	return (
		<div className="wrap">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/our" element={<OurPage />}>
					<Route index element={"CEO 페이지"} />
					<Route path="history" element={"History 페이지"} />
					<Route path="org" element={"Organization 페이지"} />
				</Route>
				<Route path="/search" element={"검색페이지"} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/mypage" element={"마이페이지"} />
				<Route path="/detail/:id" element={<DetailPage />} />

				<Route
					path="*"
					element={
						<section
							style={{
								height: "100vh",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "lightgray",
							}}
						>
							내용이 없어요
						</section>
					}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
