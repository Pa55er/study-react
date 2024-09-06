import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useEffect, useRef, useState } from "react";
import style from "../styles/Similar.module.css";
import ListCard from "../components/ListCard";

export default function Similar({ info }) {
    const [similarList, setSimilarList] = useState([]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const getProductsSim = useCallback(async () => {
        try {
            const url = `http://localhost:8000/products?category=${info}`;
            const res = await fetch(url);
            const data = await res.json();
            setSimilarList(data);
        } catch (error) {
            console.error(error);
        }
    }, [info]);

    useEffect(() => {
        getProductsSim();
    }, [getProductsSim]);

    return (
        <div>
            <Swiper
                slidesPerView={4}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                spaceBetween={16}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className={style.bannerList}
            >
                {similarList.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ListCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button ref={prevRef} className={style.btnPrev}>
                이전
            </button>
            <button ref={nextRef} className={style.btnNext}>
                다음
            </button>
        </div>
    );
}
