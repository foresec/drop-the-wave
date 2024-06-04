import axios from "axios";

type TokenType = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

export const postBasicLoginAPI = async (): Promise<TokenType> => {
  try {
    if (!clientId || !clientSecret) {
      throw new Error("ClintId, ClientSecret 이 환경변수 상 존재하지 않습니다");
    }

    const response = await axios.post<TokenType>(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
