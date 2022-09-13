import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMultipleEpisodes,
  getSingleCharacter,
  getSingleLocation,
} from "../../services";

export function ProfilePage() {
  const { profileId } = useParams();
  const [profileCharacter, setProfileCharacter] = useState({
    profile: {},
    location: {},
    origin: {},
    episodesFeatured: [],
  });

  const episodeIdList = profileCharacter?.profile?.episode?.map((curr) => {
    let strArr = curr.split("/").reverse();
    return strArr[0];
  });

  // single character get call
  useEffect(() => {
    (async () => {
      try {
        const res = await getSingleCharacter(profileId);
        setProfileCharacter((prev) => ({ ...prev, profile: res }));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [profileId]);

  // location get call
  useEffect(() => {
    (async () => {
      try {
        const res = await getSingleLocation(
          profileCharacter?.profile?.location?.name
        );
        const resTwo = await getSingleLocation(
          profileCharacter?.profile?.origin?.name
        );

        if (res && resTwo) {
          setProfileCharacter((prev) => ({
            ...prev,
            location: res?.results[0],
            origin: resTwo?.results[0],
          }));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [profileCharacter?.profile]);

  //episodes get call
  useEffect(() => {
    (async () => {
      try {
        if (episodeIdList) {
          const res = await getMultipleEpisodes(episodeIdList);
          setProfileCharacter((prev) => ({
            ...prev,
            episodesFeatured: Array.isArray(res) ? res : [res],
          }));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [profileCharacter?.profile]);

  return (
    <div className="mt-[60px] flex justify-center p-8">
      <div className="flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="w-72">
          <img
            src={profileCharacter?.profile?.image}
            alt="character image"
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <div>
          <h2 className="text-2xl text-center">
            {profileCharacter?.profile?.name}
          </h2>
          <div className="flex flex-col p-2 gap-1">
            <div>
              <b>Species:</b> {profileCharacter?.profile?.species}
            </div>
            <div>
              <b>Gender: </b>
              {profileCharacter?.profile?.gender}
            </div>
            {profileCharacter?.profile?.type && (
              <div>
                <b>Type: </b>
                {profileCharacter?.profile?.type}
              </div>
            )}
            <div>
              <div className="font-bold underline">Location: </div>
              <div className="flex flex-col justify-center ml-10">
                <div>
                  <b>Name: </b>
                  {profileCharacter?.profile?.location?.name}
                </div>
                <div>
                  <b>Dimension: </b>
                  {profileCharacter?.location?.dimension}
                </div>
                <div>
                  <b>Type: </b>
                  {profileCharacter?.location?.type}
                </div>
                <div>
                  <b>Total Residents: </b>
                  {profileCharacter?.location?.residents?.length}
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold underline">Origin: </div>
              <div className="flex flex-col justify-center ml-10">
                <div>
                  <b>Name: </b>
                  {profileCharacter?.profile?.origin?.name}
                </div>
                <div>
                  <b>Dimension: </b>
                  {profileCharacter?.origin?.dimension}
                </div>
                <div>
                  <b>Type: </b>
                  {profileCharacter?.origin?.type}
                </div>
                <div>
                  <b>Total Residents: </b>
                  {profileCharacter?.origin?.residents?.length}
                </div>
              </div>
            </div>
            {profileCharacter?.episodesFeatured?.length > 0 && (
              <div>
                <div className="font-bold underline">Episodes Featured: </div>
                <div className="flex flex-col justify-center ml-10">
                  {profileCharacter?.episodesFeatured
                    ?.slice(0, 10)
                    .map((currEpi, index) => (
                      <div key={currEpi.id} className="flex gap-3">
                        <div>{index + 1}.</div>
                        <div>{currEpi.name}</div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
