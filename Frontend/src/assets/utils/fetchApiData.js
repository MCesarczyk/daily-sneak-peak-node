import axios from "axios";

export const fetchApiData = async (url) => {
  try {
    const avatarSecureUrl = await axios.get(url);
    return avatarSecureUrl.data;
  } catch (error) {
    console.error(error);
  }
};