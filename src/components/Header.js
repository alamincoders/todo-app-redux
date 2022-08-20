import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { allClear, allCompleted, todoAdded } from "../redux/todos/actions";

export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const allCompleteHandler = () => {
    dispatch(allCompleted());
  };

  const clearAllCompleteHandler = () => {
    dispatch(allClear());
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid input");
    } else {
      dispatch(todoAdded(input));
    }
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          value={input}
          onChange={handleInput}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button type="submit" className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={allCompleteHandler} className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearAllCompleteHandler} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
}
