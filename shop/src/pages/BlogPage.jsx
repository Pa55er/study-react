import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function BlogPage() {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    const renderCount = useRef(0);
    renderCount.current += 1;

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <main className="mw">
            <h2>Blog Page</h2>
            <input type="text" ref={inputRef} />

            <h2>count : {count}</h2>
            <h2>renderCount : {renderCount.current}</h2>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                클릭하삼
            </button>
        </main>
    );
}
