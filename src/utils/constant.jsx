export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_API
  }
};

export const IMG_CARDS_CDN = "https://image.tmdb.org/t/p/w200";

export const OPENAI_GPT_KEY = import.meta.env.VITE_OPENAI_GPT_KEY