import React from "react";
import { ProfileCard } from "../../components";

export function Home() {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-evenly mt-[60px]">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      {/* <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard /> */}
      <div className="w-60"></div>
      <div className="w-60"></div>
      <div className="w-60"></div>
    </div>
  );
}
