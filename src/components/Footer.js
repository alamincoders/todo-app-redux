import { useSelector, useDispatch } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const { status, colors } = filters;
  const taskRemaining = todos.filter((todo) => !todo.completed).length;

  const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
      case 0:
        return "No task";
      case 1:
        return `${no_of_todos} task`;
      default:
        return `${no_of_todos} tasks`;
    }
  };

  //   handle status change
  const statusHandler = (status) => {
    dispatch(statusChanged(status));
  };

  //   handle filters by colors

  const filterByColors = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(taskRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li onClick={() => statusHandler("All")} className={`cursor-pointer ${status === "All" && "font-bold"}`}>
          All
        </li>
        <li>|</li>
        <li onClick={() => statusHandler("Incomplete")} className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}>
          Incomplete
        </li>
        <li>|</li>
        <li onClick={() => statusHandler("Complete")} className={`cursor-pointer ${status === "Complete" && "font-bold"}`}>
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => filterByColors("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`}
          onClick={() => filterByColors("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => filterByColors("yellow")}
        ></li>
      </ul>
    </div>
  );
}
