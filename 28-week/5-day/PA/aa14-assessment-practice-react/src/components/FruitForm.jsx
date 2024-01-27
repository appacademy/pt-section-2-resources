import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function FruitForm({ fruits }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState("orange");
  const [seeds, setSeeds] = useState("yes");
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const errors = {};
    if (name.length < 3) errors.name = "Name must be 3 or more characters";
    if (name.length > 20) errors.name = "Name must be 20 characters or less";
    const prevFruit = fruits.find((fruitObj) => fruitObj.name === name);
    if (prevFruit) errors.name = "Name already exists";
    if (sweetness < 1 || sweetness > 10)
      errors.sweetness = "Sweetness must be between 1 and 10";
    setValidationErrors(errors);
  }, [fruits, name, sweetness]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      sweetness: sweetness,
      color,
      seeds
    });
    navigate("/");
  }

  return (
    <form className="fruit-form" onSubmit={handleSubmit}>
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
      <p className="errors">{validationErrors.name}</p>
      <label>
        Select a Color
        <select value={color} onChange={(e) => setColor(e.target.value)}>
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
      <p className="errors">{validationErrors.sweetness}</p>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === "no"}
          onChange={(e) => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === "yes"}
          onChange={(e) => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button type="submit" disabled={Object.keys(validationErrors).length !== 0}>Submit Fruit</button>
    </form>
  );
}

export default FruitForm;
