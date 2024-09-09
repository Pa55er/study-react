import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/productStore";
import style from "../css/DetailPage.module.css";
import TabStyle from "../layout/TabStyle";
import Similar from "../layout/Similar";
import DetailModal from "../components/DetailModal";

export default function DetailPage() {
	const { id } = useParams();
	const dispatch = useDispatch();

	// 수정: singleProduct 상태를 사용
	const {
		singleProduct: product,
		status,
		error,
	} = useSelector((state) => state.productSlice);

	const [count, setCount] = useState(1);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		// 수정: fetchSingleProduct 액션을 디스패치
		dispatch(fetchSingleProduct(parseInt(id)));
	}, [dispatch, id]);

	const increment = () => {
		count < 10
			? setCount((prev) => prev + 1)
			: alert("최대 수량은 10개 입니다.");
	};
	const decrement = () => {
		count > 1
			? setCount((prev) => prev - 1)
			: alert("최소 수량은 1개 입니다.");
	};

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "failed") {
		return <div>Error: {error}</div>;
	}

	// 수정: product가 없을 때의 처리
	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<section className={`${style.DetailPage} mw`}>
			<h2 hidden>Detail Page</h2>
			<div className={style.productCon}>
				<div className={style.imgCon}>
					<img src={`/img/${product.img}`} alt={product.title} />
				</div>
				<div className={style.pInfo}>
					<p>
						상품명 : {product.title} / {product.category}
					</p>
					<p>가격 : {Number(product.price).toLocaleString()}원</p>
					<p>할인률 : {product.discount} %</p>
					<div className={style.count}>
						<button onClick={decrement} disabled={count === 1}>
							-
						</button>
						<span>{count}</span>
						<button onClick={increment} disabled={count === 10}>
							+
						</button>
					</div>
					<button onClick={handleShow}>장바구니</button>
				</div>
			</div>
			<TabStyle />
			{product.category && <Similar info={product.category} />}
			<DetailModal
				show={show}
				handleClose={handleClose}
				products={product}
				count={count}
			/>
		</section>
	);
}
