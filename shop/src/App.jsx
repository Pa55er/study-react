import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import OurPage from "./pages/OurPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";

const SORT_OPTIONS = {
    latest: "",
    lowPrice: "price",
    highPrice: "-price",
    discount: "-discount",
};

function App() {
    const location = useLocation();
    const BASE_URL = "http://localhost:8000/products";
    const [products, setProducts] = useState([]);
    const [isLast, setIsLast] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const getProducts = useCallback(
        async (
            page = 1,
            perPage = 6,
            sort = SORT_OPTIONS[searchParams.get("sort") || "latest"],
            category = searchParams.get("category") || ""
        ) => {
            try {
                const url = `${BASE_URL}?_page=${page}&_per_page=${perPage}&_sort=${sort}&category=${category}`;
                const res = await fetch(url);
                const data = await res.json();
                setProducts(data.data);
                if (data.next === null) setIsLast(true);
                else setIsLast(false);
            } catch (error) {
                console.error(error);
            }
        },
        []
    );

    useEffect(() => {
        if (location.pathname === "/shop") {
            getProducts(1, 8);
        } else if (location.pathname === "/") {
            getProducts(1, 6, "", "");
        }
        // getProducts();
    }, [location.pathname, getProducts]);

    return (
        <div className="wrap">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage products={products} />} />
                <Route
                    path="/shop"
                    element={
                        <ShopPage
                            products={products}
                            getProducts={getProducts}
                            isLast={isLast}
                        />
                    }
                />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/our" element={<OurPage />}>
                    <Route path="ceo" element={"CEO 페이지"} />
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
