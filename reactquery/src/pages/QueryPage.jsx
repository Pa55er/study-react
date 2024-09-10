import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function QueryPage() {
    const fetchProducts = async () => {
        return await axios.get("http://localhost:8000/products");
    };

    const { data, isLoading, isError, error, isPending } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        retry: 1,
        gcTime: 2000,
        staleTime: 5000,
    });

    console.log("-----------------------");
    console.log("res", data);
    console.log("data", data?.data);
    console.log("isLoading", isLoading);
    console.log("isPending", isPending);
    console.log("isError", isError);
    console.log("error", error);

    if (isPending) return <div>로딩중...</div>;
    if (isError) return <div>에러났슈</div>;

    return (
        <div>
            <h2>Query</h2>
            <p>query 페이지 입니다.</p>
            <hr />
            {data.data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </div>
    );
}
