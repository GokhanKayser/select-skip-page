import { data as fallbackData } from "./data";
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchSkips() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("API response not ok");
    const result = await res.json();
    return result;
  } catch (error) {
    console.warn("API response not ok, using local data :", error.message);
    return fallbackData;
  }
}
