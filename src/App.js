import Cell from "./Cell.js";
import Column from "./Column.js";

function App() {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const columns = weekDays.map((day) => <Column key={day} day={day} length={24}/>)
  
  return (
    <div className="container">
      <div className="colContainer">
        { columns }
      </div>
    </div>
  );
}

export default App;

/*
Solved this problem using similar events between touch and mouse. touchStart/mouseDown or touchEnd/mouseUp. It fires one or another, according to each situation.
https://stackoverflow.com/questions/48048957/react-long-press-event
https://stackoverflow.com/questions/27908339/js-touch-equivalent-for-mouseenter

*/