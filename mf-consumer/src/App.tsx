import "./App.css";
import { HeroBanner, Nav } from "./components";

function App() {
    return (
        <>
            <Nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Team</a>
                <a href="#">Contact Us</a>
            </Nav>

            <HeroBanner />
        </>
    );
}

export default App;
