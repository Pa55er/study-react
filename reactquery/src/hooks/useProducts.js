import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
    return await axios.get("http://localhost:8000/products");
};

export const useProducts = () => {
    return useQuery({
        queryKey: ["products-hook"],
        queryFn: fetchProducts,
        select: (data) => data.data,
        retry: 1,
    });
};
