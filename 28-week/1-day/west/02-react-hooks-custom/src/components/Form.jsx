import { textInputValidators } from '../utils/validations';
import { useTextInput } from '../hooks/textInput';

const Form = () => {
  const [name, setName, nameErrors] = useTextInput({
    validations: textInputValidators
  })
  // const [name, setName] = useState('');
  // const validatorResults = textInputValidators.map((validator) => validator(name));
  // const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
  // const nameErrors = failedValidators.map((validationObj) => validationObj.msg);

  return (
    <>
      <h1>Form Component</h1>
      <form>
        <ul>
          {nameErrors.map(err => <li key={err}>{err}</li>)}
        </ul>
        <label htmlFor="name">
          Name{" "}
          <input
            id="name"
            value={name}
            onChange={setName}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
