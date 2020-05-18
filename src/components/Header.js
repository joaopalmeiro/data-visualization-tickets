import React from "react";

const Header = ({ title }) => {
  const titleArray = title.split(" ");
  const titleExceptLastWord = titleArray.slice(0, -1).join(" ").concat(" ");
  const lastWord = titleArray.pop();

  return (
    <div className="my-8">
      <header className="text-center">
        <h1 className="uppercase text-6xl font-title text-black">
          {titleExceptLastWord}
          <span className="bg-gray-200 pr-4 pl-3 rounded border-dotted border-l-4">
            {lastWord}
          </span>
        </h1>
      </header>
    </div>
  );
};

export default Header;
