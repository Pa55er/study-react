import Button from "./Button";

export default function BtnCon({ cities, handleClick }) {
    return (
        <div>
            {cities.map((city, i) => (
                <Button
                    key={i}
                    name={city}
                    handleClick={() => {
                        handleClick(city);
                    }}
                />
            ))}
        </div>
    );
}
