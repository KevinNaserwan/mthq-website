import axios from "axios";

// process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: "https://backend.mthq-bangka.site",
});
