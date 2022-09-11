import React from "react";

export function ProfileCard() {
  return (
    <div className="w-60">
      <div className="flex flex-col relative gap-1 bg-slate-200 rounded pb-4">
        <img
          src="https://i.annihil.us/u/prod/marvel/i/mg/3/d0/60464e1695be7/clean.jpg"
          alt="character image"
          className="w-full h-auto object-cover rounded-t"
        />
        <div className="flex flex-col px-3">
          <div>Character Name</div>
          <div>Last Location</div>
        </div>
        <div className="bg-green-500 absolute px-2 py-0.5 rounded right-2 top-2 text-white font-semibold">
          Alive
        </div>
      </div>
    </div>
  );
}
