import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from "react-dnd";

const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Header />
            <Homepage />
        </DndProvider>
    );
};

export default App;