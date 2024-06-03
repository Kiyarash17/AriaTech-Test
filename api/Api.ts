// api.js
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const Api = axios.create({
  baseURL: BASE_URL,
});

export const login = async (mobile: any, password: any) => {
    const response = await Api.post('/login', new URLSearchParams({
      mobile,
      password,
    }));
    return response.data;
  };