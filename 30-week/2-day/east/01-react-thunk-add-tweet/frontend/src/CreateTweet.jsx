import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTweet } from "./store/tweet";

const CreateTweet = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      message,
    };
    let newTweet;
    newTweet = await dispatch(postTweet(payload));
    if (newTweet) setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your tweet"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button type="submit">Submit Tweet</button>
    </form>
  );
};

export default CreateTweet;
