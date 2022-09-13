import React, { useEffect, useState } from "react";
import { ProfileCard } from "../../components";
import { useData } from "../../context/data-context";
import { getPerPageCharacters } from "../../services";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export function Home() {
  const {
    data: {
      characters: { info: charactersInfo, results: charactersDataArr },
    },
    setData,
  } = useData();
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    apiCallFlag: false,
    nextOrPrev: "",
  });
  const getCallUrl = () => {
    if (pagination.nextOrPrev === "next") {
      return charactersInfo?.next;
    } else {
      return charactersInfo?.prev;
    }
  };

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      pageNumber: Number(charactersInfo?.next?.split("=")[1]) - 1,
    }));
  }, [charactersInfo]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getPerPageCharacters(getCallUrl());
        if (res) {
          setData((prev) => ({ ...prev, characters: res }));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [pagination.apiCallFlag]);

  return (
    <div className="mt-[60px] flex flex-col p-4">
      <div className="flex flex-wrap gap-4 py-4 justify-evenly">
        {charactersDataArr?.length > 0 &&
          charactersDataArr?.map((curr) => (
            <ProfileCard key={curr?.id} character={curr} />
          ))}
        <div className="w-60"></div>
        <div className="w-60"></div>
        <div className="w-60"></div>
      </div>
      <div className="mx-auto px-4 rounded flex gap-6 border-solid border-black border-2">
        <button
          className={`${
            pagination?.pageNumber === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          } "border-solid border-black border-r-2 pr-4 flex items-center"`}
          disabled={pagination.pageNumber === 1 ? true : false}
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              apiCallFlag: !pagination.apiCallFlag,
              nextOrPrev: "prev",
            }))
          }
        >
          <NavigateBeforeIcon />
        </button>
        <div className="font-semibold">{pagination?.pageNumber}</div>
        <button
          className={`${
            pagination?.pageNumber > 41
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          } "border-solid border-black border-l-2 pl-4 flex items-center"`}
          disabled={pagination.pageNumber > 41 ? true : false}
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              apiCallFlag: !pagination.apiCallFlag,
              nextOrPrev: "next",
            }))
          }
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
}
