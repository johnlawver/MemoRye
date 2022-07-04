import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card icon={"🐶"} name="Dog" set="Animals" color="blue" />
      <Navbar />
    </div>
  );
}

export default App;
