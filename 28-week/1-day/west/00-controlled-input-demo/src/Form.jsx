import { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

useEffect(() => {
    // if (submitted) {
        const errors = {};
        if (name.split(" ").length < 2) errors.name = "Please provide a first and last name";
        if (name.length < 5) errors.name = "Full name must be at least 5 characters";
        if (!email.includes("@")) errors.email = "Please provide a valid email";
        setValidationErrors(errors);
    // }
}, [name, email])

const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true);
    console.log({
        name,
        email,
        subbed
    })
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Component</h2>
      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{validationErrors.name}</p>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{validationErrors.email}</p>
      <p>Subscribe to email?</p>
      <input
        type="checkbox"
        value="subscribed"
        checked={subbed === "subscribed"}
        onChange={() => {
            subbed === "subscribed" ? setSubbed("") : setSubbed("subscribed")
        }}
      />
      <button type="submit" disabled={Object.keys(validationErrors).length}>Submit Form</button>
    </form>
  );
};

export default Form;
