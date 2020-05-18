import React from "react";
import Ticket from "./components/Ticket";
import Header from "./components/Header";

function App() {
  return (
    <div className="container px-32">
      <Header title="Data Visualization Tickets" />
      <Ticket />
    </div>
  );
}

export default App;
