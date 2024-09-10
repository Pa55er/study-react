import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function QueryPageDetail() {
    const [pID, setPID] = useState(1);

    const fetchProducts = async ({ queryKey }) => {
        const id = queryKey[1].toString();
        return await axios.get(`http://localhost:8000/products/${id}`);
    };

    const { data, isError, isPending } = useQuery({
        queryKey: ["products-detail", pID],
        queryFn: fetchProducts,
        select: (data) => data.data,
        retry: 1,
    });

    if (isPending) return <div>로딩중...</div>;
    if (isError) return <div>에러났슈</div>;

    return (
        <div>
            <h2>Query</h2>
            <p>query 페이지 입니다.</p>
            <hr />
            <button
                onClick={() => {
                    setPID(1);
                }}
            >
                1번 상품
            </button>
            <button
                onClick={() => {
                    setPID(2);
                }}
            >
                2번 상품
            </button>

            {data && (
                <div>
                    <h2>{data.title}</h2>
                    <p>가격 : {data.price}</p>
                </div>
            )}
        </div>
    );
}
