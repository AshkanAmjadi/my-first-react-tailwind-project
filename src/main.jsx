
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router} from "react-router";
// import App from "./classbased/App.jsx";
import App from "./App.jsx";


createRoot(document.getElementById('root')).render(
    <Router>
        <App/>
    </Router>,
)
