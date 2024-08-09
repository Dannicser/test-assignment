import axios from "axios";

import { MAPBOX_GEOCODING_API_URL, MAPBOX_PUBLIC_ACCESS_TOKEN } from "../vars/localStorage";

export const api = axios.create({
  baseURL: MAPBOX_GEOCODING_API_URL,
  params: {
    access_token: MAPBOX_PUBLIC_ACCESS_TOKEN,
  },
});
