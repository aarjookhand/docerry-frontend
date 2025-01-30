import { jwtDecode} from "jwt-decode";

const getUserIdFromToken = () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return null;  
  }

  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.userId;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null; 
  }
};

export default {
  getUserIdFromToken,
};
