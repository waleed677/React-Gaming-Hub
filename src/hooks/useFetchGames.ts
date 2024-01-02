import React, { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useFetchData from "./useFetchData";
import { Genre } from "./useFetchGenre";
import { GameQuery } from "../App";



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



const useFetchGames = (gameQuery : GameQuery) => useFetchData<Games>('/games', 
{ 
  params : {
    genres: gameQuery.genre?.id,
    platform : gameQuery.platform?.id
  
  } 
}, 
  [gameQuery]);

export default useFetchGames;
    