import { BrowserRouter,  Route , Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Pricing from "./components/pricing";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Pricing/>} path="/pricing"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
