const SpanSpam = ({ num }) => {
    return <div>#{num}.</div>;
};

export default function ComplexComponent() {
    const arr = [1, 2, 3, 4, 5];

    return (
        <>
            <div>
                <h1>Awkco taco</h1>
                {arr.map((num) => (
                    <SpanSpam key={num} num={num} />
                ))}

                {/* <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span> */}

                <div>
                    <ul>
                        <li>w</li>
                        <li>wija</li>
                        <li>awefa</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
