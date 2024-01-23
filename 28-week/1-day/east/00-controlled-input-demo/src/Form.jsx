// import { useState, useEffect } from "react";

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subbed, setSubbed] = useState("");
//   const [firstNameErrors, setFirstNameErrors] = useState("");
//   const [lastNameErrors, setLastNameErrors] = useState("");
//   const [emailErrors, setEmailErrors] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (submitted) {
//         if (firstName.length < 2) {
//           setFirstNameErrors("Name must be at least 2 characters");
//         } else {
//             setFirstNameErrors("");
//         }
//         if (lastName[0] !== lastName[0]?.toUpperCase() || !lastName) {
//             setLastNameErrors("Last name must be capitalized")
//         } else {
//             setLastNameErrors("");
//         }
//         if (!email.includes("@")) {
//             setEmailErrors("Invalid Email Format")
//         } else {
//             setEmailErrors("");
//         }
//     }
//   }, [firstName.length, lastName, email, submitted]);

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         setSubmitted(true);
//         console.log(firstName, lastName, email, subbed);
//       }}
//     >
//       <h2>Form Component</h2>
//       <p>{firstNameErrors}</p>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => {
//           setFirstName(e.target.value);
//         }}
//       />
//       <p>{lastNameErrors}</p>
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => {
//           setLastName(e.target.value);
//         }}
//       />
//       <p>{emailErrors}</p>
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       Subscribe to Emails?
//       <input
//         type="checkbox"
//         value="subscribed"
//         checked={subbed === "subscribed"}
//         onChange={() => {
//           setSubbed(subbed === "subscribed" ? "" : "subscribed");
//         }}
//       />
//       <button type="submit">Submit Form</button>
//     </form>
//   );
// };

// export default Form;

import { useState, useEffect } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = {};
    if (!name.length) errors['name']='Please enter your Name';
    if (!email.includes('@')) errors['email']='Please provide a valid Email';
    setValidationErrors(errors);
  }, [name, email])

  const onSubmit = e => {
    e.preventDefault();

    setHasSubmitted(true);
    if (Object.values(validationErrors).length)
      return alert(`The following errors were found:

        ${validationErrors.name ? "* " + validationErrors.name : ""}
        ${validationErrors.email ? "* " + validationErrors.email : ""}`);

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
    setValidationErrors({});
    setHasSubmitted(false);
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <div className='error'>
            {hasSubmitted && validationErrors.name && `* ${validationErrors.name}`}
          </div>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <div className='error'>
            {hasSubmitted && validationErrors.email && `* ${validationErrors.email}`}
          </div>
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
