export default function WeatherBox({ data }) {
    const { city, country, description, temp } = data;

    return (
        <section>
            <h2>
                {country} / {city}
            </h2>
            <p>
                {temp} &deg;C / {description}
            </p>
        </section>
    );
}
