import style from "../styles/ShopPage.module.css";
import ListCard from "../components/ListCard";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SORT_OPTIONS = {
    latest: "",
    lowPrice: "price",
    highPrice: "-price",
    discount: "-discount",
};
const SORT_LABELS = {
    latest: "최신순",
    lowPrice: "낮은가격순",
    highPrice: "높은가격순",
    discount: "높은할인율",
};
const CATEGORY_OPTIONS = {
    new: "신상품",
    top: "인기 제품",
};

export default function ShopPage({ products, getProducts, isLast }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(() =>
        parseInt(searchParams.get("page") || "1", 10)
    );
    const [sortType, setSortType] = useState(
        () => searchParams.get("sort") || "latest"
    );
    const [categoryType, setCategoryType] = useState(
        () => searchParams.get("category") || ""
    );

    const loadProducts = useCallback(() => {
        getProducts(1, currentPage * 8, SORT_OPTIONS[sortType], categoryType);
        setSearchParams({
            page: currentPage.toString(),
            sort: sortType,
            category: categoryType,
        });
    }, [currentPage, setSearchParams, sortType, categoryType]);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    const handleSort = (key) => {
        setSortType(key);
        setCurrentPage(1);
    };

    const handleCategory = (key) => {
        setCategoryType(key);
        setCurrentPage(1);
    };

    const loadMore = () => {
        setCurrentPage((prev) => prev + 1);
    };

    return (
        <main className={`${style.ShopPage} mw`}>
            <h2 hidden>Shop Page</h2>
            <nav>
                {Object.keys(SORT_OPTIONS).map((key) => (
                    <button
                        key={key}
                        onClick={() => {
                            handleSort(key);
                        }}
                        className={sortType === key ? style.active : ""}
                    >
                        {SORT_LABELS[key]}
                    </button>
                ))}
                {Object.keys(CATEGORY_OPTIONS).map((key) => (
                    <button
                        key={key}
                        onClick={() => {
                            handleCategory(key);
                        }}
                        className={`${
                            categoryType === key ? style.active2 : ""
                        } ${style.cateBtn}`}
                    >
                        {CATEGORY_OPTIONS[key]}
                    </button>
                ))}
            </nav>
            <ul className={style.listCon}>
                {products.map((item) => (
                    <ListCard key={item.id} item={item} />
                ))}
            </ul>
            {isLast ? (
                <div>더 이상 항목이 없습니다</div>
            ) : (
                <button onClick={loadMore}>상품 더 불러오기</button>
            )}
        </main>
    );
}
