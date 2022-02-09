import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDIyYjk1OWU1ZDg0NGJkNzM2MDIwZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDMwOTg1NCwiZXhwIjoxNjQ0NTY5MDU0fQ.C01AiMEGOkjiEUTEsOv51aZEzw0YcV-Dzoi3o5wQyhk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
