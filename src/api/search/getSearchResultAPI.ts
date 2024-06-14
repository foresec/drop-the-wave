import axios from "axios";
import { supabase } from "@/lib/supabase/supabaseClient";




export const getSearchResultAPI = async ({
  q,
  type,
  market,
  limit,
  offset,
}: SearchRequestTypes) => {
  try {
		// 기존 쿠키로 하는방법
    // const accessToken2 = getCookie("access");
		// 세션으로 가져오는법
    // const accessToken = await getSpotifyAccessToken();

		const accessToken = localStorage.getItem("oauth_provider_token")

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


// const getSpotifyAccessToken = async () => {
//   const { data, error } = await supabase.auth.getSession();

// 	if (error) {
//     throw new Error('세션을 가져오는 중 오류가 발생했습니다.');
//   }

//   const session = data.session;

//   if (session) {
//     const providerToken = session.provider_token;
// 		console.log(providerToken)
//     return providerToken;

//   } else {
//     throw new Error('사용자가 로그인되어 있지 않습니다.');
//   }
// };
