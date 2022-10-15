import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/HomePage";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes/>
    </div>
  );
}

export default App;
