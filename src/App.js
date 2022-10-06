import "./App.css";
import Home from "./components/screens/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Home />
            </div>
        </Router>
    );
}

export default App;
