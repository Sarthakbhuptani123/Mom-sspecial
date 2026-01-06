export const API_URL = import.meta.env.MODE === "development"
    ? "http://localhost:5000/api/menu"
    : "https://mom-sspecial.onrender.com/api/menu";
