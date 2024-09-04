import "./styles/App.css";
import BtnCon from "./BtnCon";
import WeatherBox from "./WeatherBox";
import { useState, useEffect, useCallback } from "react";

function App() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    const [weatherInfo, setWeatherInfo] = useState({});
    const [city, setCity] = useState("current");
    const cities = ["current", "hongkong", "paris", "new york", "seoul"];

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("서버 오류");
            const data = await res.json();
            return {
                city: data.name,
                country: data.sys.country,
                description: data.weather[0].description,
                temp: (data.main.temp - 273.15).toFixed(2),
            };
        } catch (e) {
            console.error(e);
            return null;
        }
    };

    const getWeather = useCallback(
        async (lat, lon) => {
            let url = `${BASE_URL}?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}`;
            const result = await fetchData(url);
            if (result) setWeatherInfo(result);
        },
        [fetchData]
    );

    const getWeatherByCity = useCallback(
        async (city) => {
            let url = `${BASE_URL}?q=${city}&lang=kr&appid=${API_KEY}`;
            const result = await fetchData(url);
            if (result) setWeatherInfo(result);
        },
        [fetchData]
    );

    // 현재 위치의 위도와 경도 가져오기
    const getCurrentLocation = useCallback(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            getWeather(latitude, longitude);
        });
    }, [getWeather]);

    useEffect(() => {
        city === "current" ? getCurrentLocation() : getWeatherByCity(city);
    }, [city]);

    const handleClick = (btnName) => {
        setCity(btnName);
    };

    return (
        <main className="main">
            <h1>날씨 api 활용</h1>
            <WeatherBox data={weatherInfo} />
            <BtnCon cities={cities} handleClick={handleClick} />
        </main>
    );
}

export default App;
