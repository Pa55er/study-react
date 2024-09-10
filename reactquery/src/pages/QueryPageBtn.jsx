import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function QueryPageBtn() {
    const fetchProducts = async () => {
        return await axios.get("http://localhost:8000/products");
    };

    const { data, isError, isPending, refetch } = useQuery({
        queryKey: ["products-btn"],
        queryFn: fetchProducts,
        retry: 1,
        gcTime: 2000,
        staleTime: 5000,
        enabled: false,
    });

    // if (isPending) return <div>로딩중...</div>;
    if (isError) return <div>에러났슈</div>;

    return (
        <div>
            <h2>Query</h2>
            <p>
                query btn 페이지 입니다.{" "}
                <button onClick={refetch}>데이터 가져오기</button>
            </p>
            <hr />
            {data?.data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </div>
    );
}
