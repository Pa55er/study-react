import style from "../styles/CartPage.module.css";

export default function CartPage() {
    return (
        <section className="mw">
            <h2>장바구니</h2>
            <hr />
            <table className={style.cartTable}>
                <colgroup>
                    <col width="100px" />
                    <col width="*" />
                    <col width="150px" />
                    <col width="100px" />
                    <col width="150px" />
                    <col width="100px" />
                </colgroup>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>상품명 + 이미지 + 옵션 내용</th>
                        <th>상품가격</th>
                        <th>상품수량</th>
                        <th>결제금액</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>상품번호</th>
                        <td className={style.pImg}>
                            <div>
                                <p>
                                    <img src="/img/image1.jpg" alt="상품명" />
                                </p>
                                <span>상품명</span>
                            </div>
                        </td>
                        <td className={style.right}>100,000원</td>
                        <td className={style.center}>
                            <button onClick={() => {}}>-</button>2
                            <button onClick={() => {}}>+</button>
                        </td>
                        <td className={style.right}>200,000원</td>
                        <td className={style.center}>
                            <button onClick={() => {}}>삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <th>상품번호</th>
                        <td className={style.pImg}>
                            <div>
                                <p>
                                    <img src="/img/image1.jpg" alt="상품명" />
                                </p>
                                <span>상품명</span>
                            </div>
                        </td>
                        <td className={style.right}>100,000원</td>
                        <td className={style.center}>
                            <button onClick={() => {}}>-</button>2
                            <button onClick={() => {}}>+</button>
                        </td>
                        <td className={style.right}>200,000원</td>
                        <td className={style.center}>
                            <button onClick={() => {}}>삭제</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>총 결제 금액 :200,000원</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    );
}
