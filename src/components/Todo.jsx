import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/Slices/TodoSlice";

function Todo() {
  const allTodo = useSelector((state) => state.todog.todos);
const dispatch = useDispatch();

  return (
    <div className="flex flex-col my-10 items-center jusfity-center ">
      <ul className="w-[90%] max-w-6xl space-y-5">
        {allTodo.map((todo) => (
        <li key={todo.id} className="flex justify-between w-[100%]  px-5 py-3 bg-green-300"><span>{todo.text}</span>
            <button className="font-extrabold ml-4 cursor-pointer" onClick={() => {
                dispatch(removeTodo(todo.id))
            }}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
