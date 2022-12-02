import "./App.css";
import LineDiagram from "./components/lineDiagram/LineDiagram";
import ArcDiagram from "./components/arcDiagram/ArcDiagram";

function App() {
  return (
    <div className="App">
      <h1>HELLO D3 DIAGRAM</h1>
      <LineDiagram />
      <ArcDiagram />
    </div>
  );
}

export default App;
