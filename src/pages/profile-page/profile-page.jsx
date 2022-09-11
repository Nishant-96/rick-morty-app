import React from "react";

export function ProfilePage() {
  return (
    <div className="mt-[60px] flex justify-center p-8">
      <div className="flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="w-72">
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/3/d0/60464e1695be7/clean.jpg"
            alt="character image"
            className="w-full h-auto object-cover rounded"
          />
        </div>
        {/* <div className="bg-green-500">Alive</div> */}
        <div>
          <h2 className="text-2xl text-center">Character Name</h2>
          <div className="flex flex-col p-2 gap-1">
            <div>
              <b>Species:</b> Something
            </div>
            <div>
              <b>Gender: </b>Male
            </div>
            <div>
              <div className="font-bold underline">Location: </div>
              <div className="flex flex-col justify-center ml-10">
                <div>
                  <b>Name:</b>Earth
                </div>
                <div>
                  <b>Dimension: </b>C137
                </div>
                <div>
                  <b>Type: </b>C137
                </div>
                <div>
                  <b>Total Residents: </b>1000
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold underline">Origin: </div>
              <div className="flex flex-col justify-center ml-10">
                <div>
                  <b>Name:</b>Earth
                </div>
                <div>
                  <b>Dimension: </b>C137
                </div>
                <div>
                  <b>Type: </b>C137
                </div>
                <div>
                  <b>Total Residents: </b>1000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
