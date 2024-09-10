import { useEffect, useState } from "react";

export default function FetchPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/products");
        const data = await res.json();
        setData(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) return <div>로딩중...</div>;

    return (
        <div>
            <h2>Fetch</h2>
            <p>fetch 페이지 입니다.</p>
            <hr />
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.id} : {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
