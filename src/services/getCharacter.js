/* eslint-disable quotes */
import axios from "axios";

export const getAllCharacters = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleCharacter = async (characterId) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPerPageCharacters = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
