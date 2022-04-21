

export const CHARACTERS = (limit, offset, auth ) => `characters?orderBy=-modified&limit=${limit}&offset=${offset}&${auth}`;
export const CHARACTERS_DETAIL = (characterId,hash) => `characters/${characterId}?${hash}`;


