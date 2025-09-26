import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AppConetxt = createContext();

const AppConetxtProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [allProjects, setAllProjects] = useState([]);

  // fetch all projects

  const getAllProjects = async () => {
    try {
      const response = await axios.get(`${backendUrl}/project/allProjects`);
      if (response.data.success) {
        setAllProjects(response.data.allProjects);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }

    getAllProjects();
  }, []);

  const value = {
    backendUrl,
    token,
    navigate,
    setToken,
    getAllProjects,
    allProjects,
  };

  return (
    <AppConetxt.Provider value={value}>{props.children}</AppConetxt.Provider>
  );
};

export default AppConetxtProvider;
