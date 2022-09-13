/* eslint-disable quotes */
import axios from "axios";

export const getMultipleEpisodes = async (episodeListArr) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/${episodeListArr}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
