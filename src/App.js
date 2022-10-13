import "./App.css";
import Home from "./components/screens/Home";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./routing/router/MainRouter";

function App() {
    return (
        <Router>
            <MainRouter />
        </Router>
    );
}

export default App;
