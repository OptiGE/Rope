import Cell from "./Cell.js";
import Column from "./Column.js";

function App() {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const columns = weekDays.map((day) => (<Column key={day} day={day} length={24}/>))
  
  return (
    <div className="container">
    Assnugget
      <div className="colContainer">
        { columns }
      </div>
    </div>
  );
}

export default App;
