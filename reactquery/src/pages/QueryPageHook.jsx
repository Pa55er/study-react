import { useProducts } from "../hooks/useProducts";

export default function QueryPageHook() {
    const { data, isError, isPending } = useProducts();

    if (isPending) return <div>로딩중...</div>;
    if (isError) return <div>에러났슈</div>;

    return (
        <div>
            <h2>Query</h2>
            <p>query 페이지 입니다.</p>
            <hr />
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </div>
    );
}
