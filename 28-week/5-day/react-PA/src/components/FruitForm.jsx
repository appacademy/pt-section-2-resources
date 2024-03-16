import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function FruitForm({ fruits }) {
    const navi = useNavigate();

    const [name, setName] = useState('');
    const [seeds, setSeeds] = useState('yes');
    const [color, setColor] = useState('orange');
    const [sweetness, setSweetness] = useState(1);
    const [errors, setErrors] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        console.log({ name, sweetness, color, seeds });

        navi('/');
    };

    useEffect(() => {
        const newErrors = {};

        if (name.length < 3) {
            newErrors.name = 'Name must be 3 or more characters';
        }

        if (name.length > 20) {
            newErrors.name = 'Name must be 20 characters or less';
        }

        if (sweetness < 1 || sweetness > 10) {
            newErrors.sweetness = 'Sweetness must be between 1 and 10';
        }

        const fruitAlreadyExists = fruits.some((el) => el.name === name);

        if (fruitAlreadyExists) {
            newErrors.name = 'Name already exists';
        }

        setErrors(newErrors);
    }, [name, sweetness, fruits]);

    return (
        <form onSubmit={onSubmit} className="fruit-form">
            <h2>Enter a Fruit</h2>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            {errors.name && <p className="errors">{errors.name}</p>}

            <label>
                Select a Color
                <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                >
                    {COLORS.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Sweetness
                <input
                    type="number"
                    name="sweetness"
                    value={sweetness}
                    onChange={(e) => setSweetness(e.target.value)}
                />
            </label>
            {errors.sweetness && <p className="errors">{errors.sweetness}</p>}

            <label>
                <input
                    type="radio"
                    value="no"
                    name="seeds"
                    checked={seeds === 'no'}
                    onChange={(e) => setSeeds(e.target.value)}
                />
                No Seeds
            </label>
            <label>
                <input
                    type="radio"
                    value="yes"
                    name="seeds"
                    checked={seeds === 'yes'}
                    onChange={(e) => setSeeds(e.target.value)}
                />
                Seeds
            </label>
            <button disabled={Object.keys(errors).length} type="submit">
                Submit Fruit
            </button>
        </form>
    );
}

export default FruitForm;
