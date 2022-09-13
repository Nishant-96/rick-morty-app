import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="w-full bg-slate-50 p-4 fixed top-0 left-0 right-0 z-10">
      <Link to="/">
        <div className="font-bold text-lg text-center">Rick and Morty</div>
      </Link>
    </div>
  );
}
