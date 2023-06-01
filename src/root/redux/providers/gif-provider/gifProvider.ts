"use client"

import { Gif } from "@/root/types/gifType";
const apiKey = "GwVQVT8x301MZCjrf720mTLCdeA6XPYx";
const getGifUrl = (searchTerm: string, limit = 10) =>
`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey
}&limit=${limit}`;

export const gifProvider = async (searchTerm: string) => { try {
const response = await fetch(getGifUrl(searchTerm)); if (!response.ok) {
throw new Error("Network response was not ok");
}

const data = await response.json(); const gifs = data.data.map(
(gif: any): Gif => ({
id: gif.id, title: gif.title,
url: gif.images.fixed_width.url,
})
);
return gifs;
} catch (error) {
return error;
}
};
