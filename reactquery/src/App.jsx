import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import FetchPage from "./pages/FetchPage";
import QueryPage from "./pages/QueryPage";
import QueryPageBtn from "./pages/QueryPageBtn";
import QueryPageDetail from "./pages/QueryPageDetail";
import QueryPageHook from "./pages/QueryPageHook";

function App() {
    return (
        <>
            <h1>react query 연습</h1>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/fetch">fetch</Link>
                <Link to="/query">react query</Link>
                <Link to="/querybtn">리스트 가져오기</Link>
                <Link to="/querydetail">상품상세정보</Link>
                <Link to="/queryhook">CustomHook</Link>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/fetch" element={<FetchPage />} />
                <Route path="/query" element={<QueryPage />} />
                <Route path="/querybtn" element={<QueryPageBtn />} />
                <Route path="/querydetail" element={<QueryPageDetail />} />
                <Route path="/queryHook" element={<QueryPageHook />} />
            </Routes>
        </>
    );
}

export default App;
