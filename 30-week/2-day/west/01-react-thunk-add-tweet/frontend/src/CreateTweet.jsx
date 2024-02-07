import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTweetThunk } from "./store/tweet";

const CreateTweet = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await dispatch(addTweetThunk({message}))
    if (ok) setMessage("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your tweet"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit Tweet</button>
    </form>
  );
};

export default CreateTweet;
