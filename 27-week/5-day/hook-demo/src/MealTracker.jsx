import { useState, useEffect } from "react";

const MealTracker = () => {
  const [dish, setDish] = useState("Rice Bowl");
  const [servings, setServings] = useState(0);
  const [people, setPeople] = useState(["Greg", "Mike"]);
  const [ingredients, setIngredients] = useState({ rice: "1 cup" });
  const [dog, setDog] = useState("");
  const [dogErrors, setDogErrors] = useState("");

  useEffect(() => {
    console.log("yerr");
    // console.log(dish)
  }, []);

  useEffect(() => {
    console.log("useEffect Ran")
    if (dog.length < 3) {
      setDogErrors("Name must be at least 3 characters");
    } else {
      setDogErrors("");
    }
  }, [dog]);
  let notStateVar = "Welcome!";

  return (
    <>
      <h2>Dinner Party Component</h2>
      <h3>{notStateVar}</h3>
      <button
        onClick={() => {
          console.log("Before:", notStateVar);
          notStateVar = "Greetings!";
          console.log("After:", notStateVar);
        }}
      >
        Change Greeting?
      </button>
      <h3>Dish: {dish}</h3>
      <button
        onClick={() => {
          setDish("Burrito de Carne Asada");
          console.log(dish);
        }}
      >
        Update dish to a burrito!
      </button>
      <h3>Servings: {servings}</h3>
      <button
        onClick={() => {
          setServings(servings + 1);
        }}
      >
        Moar Food!
      </button>
      <h3>Guestlist: {people.join(", ")}</h3>
      <input
        type="text"
        id="ppl-input"
        placeholder="Add names to the guestlist"
      />
      <button
        onClick={() => {
          const person = document.querySelector("#ppl-input").value;
          console.log(person);
          //   people.push(person) // BAD DO NOT DO
          setPeople([...people, person]);
          document.querySelector("#ppl-input").value = "";
        }}
      >
        Add person
      </button>
      <h3>Ingredients:</h3>
      {Object.keys(ingredients).map((item, i) => {
        return (
          <p key={`${item}.${i}`}>
            {item}: {ingredients[item]}
          </p>
        );
      })}
      <input type="text" id="ing-input" placeholder="Add ingredient" />
      <input type="number" id="ing-quant-input" placeholder="Quantity" />
      <input type="text" id="ing-unit-input" placeholder="Specify units" />
      <button
        onClick={() => {
          const newIng = document.querySelector("#ing-input").value;
          const newQuant = document.querySelector("#ing-quant-input").value;
          const newUnit = document.querySelector("#ing-unit-input").value;
          //  ingredients[newIng] = `${newQuant} ${newUnit}`; // BAD, DO NOT MODIFY STATE VARIABLE DIRECTLY
          //   console.log(ingredients);
          //   setIngredients(ingredients);
          setIngredients({
            ...ingredients,
            [newIng]: `${newQuant} ${newUnit}`,
          });
          document.querySelector("#ing-input").value = "";
          document.querySelector("#ing-quant-input").value = "";
          document.querySelector("#ing-unit-input").value = "";
        }}
      >
        Add Ingredient
      </button>

      <p>{dogErrors}</p>
      <input
        type="text"
        placeholder="Add dog"
        value={dog}
        onChange={(e) => {
          setDog(e.target.value);
        }}
      />
    </>
  );
};

export default MealTracker;
