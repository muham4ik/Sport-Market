import Cookies from "js-cookie";

// Tokenni saqlash funksiyasi
export const saveToken = (access_token) => {
  Cookies.set("token", access_token);
};

// Tokenni olish funksiyasi
export const getToken = () => {
  return Cookies.get("token");
};
