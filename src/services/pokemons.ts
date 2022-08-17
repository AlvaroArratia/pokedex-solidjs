import { http } from "../config";

export const getAllPokemons = (limit: string = "", offset: string = "") => {
  const options =
    limit && offset
      ? `?limit=${limit}&offset=${offset}`
      : limit && !offset
      ? `?limit=${limit}`
      : !limit && offset
      ? `?offset=${offset}`
      : "";
  return http.get(`pokemon/${options}}`);
};
