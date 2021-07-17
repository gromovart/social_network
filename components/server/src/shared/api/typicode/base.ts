import axios from 'axios';
import { API_URL } from '../config/env';

// Потенциально, можно передавать accessToken
export const apiInstance = axios.create({
  baseURL: API_URL,
});
