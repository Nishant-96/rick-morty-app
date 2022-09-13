/* eslint-disable quotes */
import axios from "axios";

export const getSingleLocation = async (characterLocation) => {
  if (characterLocation) {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/?name=${characterLocation}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
