import React from "react";
import { Link } from "react-router-dom";

export function ProfileCard({ character }) {
  const statusClass = (status) => {
    const commonClass =
      "absolute px-2 py-0.5 rounded right-2 top-2 text-white font-semibold";
    if (status === "Alive") {
      return commonClass + " bg-green-500";
    } else if (status === "Dead") {
      return commonClass + " bg-red-500";
    } else {
      return commonClass + " bg-yellow-500";
    }
  };
  return (
    <div className="w-60">
      <Link to={`/profile/${character?.id}`}>
        <div className="flex flex-col relative gap-1 bg-slate-200 rounded pb-4">
          <img
            src={character?.image}
            alt="character image"
            className="w-full h-auto object-cover rounded-t"
          />
          <div className="flex flex-col px-3">
            <div>{character?.name}</div>
            <div className="truncate">
              Last Location: {character?.location?.name}
            </div>
          </div>
          <div className={statusClass(character.status)}>
            {character?.status}
          </div>
        </div>
      </Link>
    </div>
  );
}
