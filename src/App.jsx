import Card from "./components/Card";
import { list } from "./projects/list";

function App() {
  return (
    <div className="App">
      {
        list.map((project, index) => (
          <Card project={project} key={index} />
        ))
      }
    </div>
  );
}

export default App;
