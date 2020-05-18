import React from "react";

const Header = ({ title }) => {
  return (
    <div className="my-8">
      <header className="text-center">
        <h1 className="uppercase text-6xl font-title">{title}</h1>
      </header>
    </div>
  );
};

export default Header;
