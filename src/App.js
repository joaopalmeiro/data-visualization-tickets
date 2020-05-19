import React from "react";
import TicketGrid from "./components/TicketGrid";
import Header from "./components/Header";

function App() {
  return (
    <div className="container px-32">
      <Header title="Data Visualization Tickets" />
      <TicketGrid />
    </div>
  );
}

export default App;
