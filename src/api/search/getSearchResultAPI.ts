import axios from "axios";
import { getCookie } from "../cookie";

export const getSearchResultAPI = async ({
  q,
  type,
  market,
  limit,
  offset,
}: SearchRequestTypes) => {
  try {
    const accessToken = getCookie("access");
    const response = await axios.get<SearchResponseTypes>(
      "https://api.spotify.com/v1/search",
      {
        params: { q: q, type: type.join(","), market, limit, offset },
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
