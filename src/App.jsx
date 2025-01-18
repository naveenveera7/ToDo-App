import { useState, useRef } from "react";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [adds, setAdds] = useState([]);
  const rem=useRef([]);
  const text = (e) => setTask(e.target.value);

  const added = (e) => {
  if(e.key ==="Enter"){
    if (task.trim() !== "") {
      if(  task.length<=100){
      setAdds([task, ...adds]);
      setTask("");
      }else{
        alert('Task is Too Long')
      }
    }else{
      alert("Enter Something....")
    }
  }
  };
  const remove = (e,index) => {
   e.target.classList.toggle("active");

   if (rem.current[index]) {
    rem.current[index].classList.toggle("strike");
  }
  };

  const imp=(e)=>{
    e.target.classList.toggle("star");

  }

  return (

    <div className="App">
      <div className="personal">Naveen Veera
        {/* <p className="important">⭐ Important</p> */}
      </div>
      <div className="container">
        <h2>My Day...</h2>
        <ul>
          {adds.map((add, i) => (
            <li key={i} >
              <span  ref={(el) => (rem.current[i] = el)}>
                <button
                className="remove"
                onClick={(e) => remove(e, i)}
                ></button>
              <span className="text">{add}...</span>
              </span>

              <span className="star" onClick={imp}>⭐</span>
            </li>
          ))}
        </ul>

          <input
            type="text"
            value={task}
            placeholder="+ Add Task"
            onChange={text}
            onKeyDown={added}
          />
      </div>
    </div>
  );
}

export default App;
