import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}


const playStationPlatformIds = [18, 16, 15, 27, 187]; // PS4, PS3, PS2, PS Vita, PS5

const useGames = (gameQuery: GameQuery) => {
    const isPlayStation =
        gameQuery.platform?.name.toLowerCase().includes("playstation");

    const platformParam = isPlayStation
        ? playStationPlatformIds.join(",")
        : gameQuery.platform?.id;

    return useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: platformParam,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            },
        },
        [gameQuery]
    );
};
export default useGames;