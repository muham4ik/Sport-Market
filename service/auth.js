import http from "./config";
import { saveToken } from "../helper/authHelper";

// Login funksiyasi
export const Login = async (data) => {
  try {
    const res = await http.post("/login", data);
    if (res.status === 200) {
      saveToken(res.data.access_token);
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};


