import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  }, []);
  return <h1>SOMETHING WENT WRONG</h1>;
};

export default ErrorPage;
