import React, { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Games {
  id: number;
  name: string;
  background_image: string;
}

interface GamesResponse {
  count: number;
  results: Games[];
}

const useFetchGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setIsLoading(false);

      });

    return () => controller.abort();
  }, []);

  return { games, errors, isLoading };
};

export default useFetchGames;
