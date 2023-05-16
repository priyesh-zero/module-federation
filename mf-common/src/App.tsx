import React from "react";

import { Button } from "./components";
import "./App.css";

function App() {
    return (
        <>
            <section className="border border-gray-100 shadow p-4">
                <h1 className="font-bold text-3xl border-b border-b-gray-200 p-4 m-4 mt-0">
                    Buttons
                </h1>
                <Button onClick={() => alert("Hello from local")}>
                    Click Me
                </Button>
            </section>
        </>
    );
}

export default App;
