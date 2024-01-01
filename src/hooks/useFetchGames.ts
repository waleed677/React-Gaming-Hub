import React, { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Games {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Games[];
}

const useFetchGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError ) return   ; 
        setErrors(err.message)
    
    });

    return () => controller.abort();
  }, []);


  return { games, errors} 
};

export default useFetchGames;
