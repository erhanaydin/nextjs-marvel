

export const CHARACTERS = (limit, offset, auth ) => `characters?orderBy=-modified&limit=${limit}&offset=${offset}&${auth}`;
export const CHARACTERS_DETAIL = (characterId, ts, apiKey, hash) => `characters/${characterId}?&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
export const CHARACTER_COMICS = (characterId, limit, ts, apiKey, hash) => `characters/${characterId}/comics?limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

