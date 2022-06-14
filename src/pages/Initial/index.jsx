/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Initial() {
  const navigate = useNavigate();

  useEffect(() => {
   if(!localStorage.getItem('token')) navigate('/signin');
   else{
    //TODO: set user data
    navigate('/dashboard');
   }
  }, []);

  return null;
}