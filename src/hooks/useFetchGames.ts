import useFetchData from "./useFetchData";
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
    platform : gameQuery.platform?.id,
    ordering: gameQuery.ordering,
    search: gameQuery.search
  
  } 
}, 
  [gameQuery]);

export default useFetchGames;
    