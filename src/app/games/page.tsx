import GameList from "@/components/games/GameList";
import { Suspense } from "react";

const GamesPage = () => {
  return (
    <div className="bg-[#151131]">
      <div className="wrapper flex-center bg-[#151131] py-6">
        <Suspense fallback={<div>Loading...</div>}>
          <GameList />
        </Suspense>
      </div>
    </div>
  );
};

export default GamesPage;
