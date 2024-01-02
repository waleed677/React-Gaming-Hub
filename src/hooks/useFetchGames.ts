import React, { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useFetchData from "./useFetchData";
import { Genre } from "./useFetchGenre";



export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}



const useFetchGames = (selectedGenre : Genre | null ) => useFetchData<Games>('/games', {params : {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useFetchGames;
