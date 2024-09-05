import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import OurPage from "./pages/OurPage";

function App() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            // const url = `http://localhost:8000/products`;
            const url = `http://localhost:8000/products?_page=1&_per_page=6&category=new`;
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="wrap">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage products={products} />} />
                <Route
                    path="/shop"
                    element={<ShopPage products={products} />}
                />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/our" element={<OurPage />}>
                    <Route path="ceo" element={"CEO 페이지"} />
                    <Route path="history" element={"History 페이지"} />
                    <Route path="org" element={"Organization 페이지"} />
                </Route>
                <Route path="/search" element={"검색페이지"} />
                <Route path="/cart" element={"장바구니 페이지"} />
                <Route path="/mypage" element={"마이페이지"} />
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
