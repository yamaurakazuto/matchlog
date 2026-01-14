import { useState } from "react";
import { Home, FileText, Trophy } from "lucide-react";
import { PlayerHomeScreen } from "@/app/components/player-home-screen";
import { GameDetailScreen } from "@/app/components/game-detail-screen";
import { RankingsScreen } from "@/app/components/rankings-screen";

type Screen = "home" | "game" | "rankings";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");

  return (
    <div className="dark size-full flex flex-col bg-background text-foreground max-w-[430px] mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {currentScreen === "home" && (
          <PlayerHomeScreen onGameClick={() => setCurrentScreen("game")} />
        )}
        {currentScreen === "game" && <GameDetailScreen />}
        {currentScreen === "rankings" && <RankingsScreen />}
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-card border-t border-border">
        <div className="flex items-center justify-around h-16">
          <button
            onClick={() => setCurrentScreen("home")}
            className={`flex flex-col items-center gap-1 px-6 py-2 transition-colors ${
              currentScreen === "home"
                ? "text-[#FF6B35]"
                : "text-muted-foreground"
            }`}
          >
            <Home className="size-5" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setCurrentScreen("game")}
            className={`flex flex-col items-center gap-1 px-6 py-2 transition-colors ${
              currentScreen === "game"
                ? "text-[#FF6B35]"
                : "text-muted-foreground"
            }`}
          >
            <FileText className="size-5" />
            <span className="text-xs">Game</span>
          </button>
          <button
            onClick={() => setCurrentScreen("rankings")}
            className={`flex flex-col items-center gap-1 px-6 py-2 transition-colors ${
              currentScreen === "rankings"
                ? "text-[#FF6B35]"
                : "text-muted-foreground"
            }`}
          >
            <Trophy className="size-5" />
            <span className="text-xs">Rankings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
