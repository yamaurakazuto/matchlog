import { ChevronLeft, Clock, MapPin, Calendar } from "lucide-react";

// Mock team rankings data for the game
const gameRankings = [
  { rank: 1, name: "Yuki Togashi", points: 28 },
  { rank: 2, name: "Keijuro Matsui", points: 26, isPlayer: true },
  { rank: 3, name: "Takumi Saito", points: 18 },
  { rank: 4, name: "Hiroshi Yamada", points: 14 },
  { rank: 5, name: "Ryo Tanaka", points: 12 },
];

export function GameDetailScreen() {
  return (
    <div className="min-h-full">
      {/* Header with Score */}
      <div className="bg-gradient-to-b from-[#FF6B35]/20 to-transparent p-4 pb-8">
        <div className="pt-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-2 rounded-full bg-[#FF6B35]" />
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              B.LEAGUE • DIVISION 1
            </span>
          </div>
          <h2 className="text-xl font-semibold mb-4">January 12, 2026</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Calendar className="size-4" />
            <span>Wed, 7:00 PM</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>Kamei Arena Sendai</span>
          </div>
        </div>

        {/* Score Display */}
        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3 flex-1">
              <div className="size-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                <span className="text-xl">🏀</span>
              </div>
              <div>
                <p className="font-semibold">Sendai 89ERS</p>
                <p className="text-xs text-muted-foreground">Home</p>
              </div>
            </div>
            <div className="text-3xl font-bold">98</div>
          </div>
          <div className="h-px bg-border my-3" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="size-12 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-xl">🏀</span>
              </div>
              <div>
                <p className="font-semibold">Niigata Albirex BB</p>
                <p className="text-xs text-muted-foreground">Away</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-muted-foreground">92</div>
          </div>
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-2">
            <div className="size-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              Final
            </span>
          </div>
        </div>
      </div>

      {/* Player Stats */}
      <div className="px-4 pb-6 space-y-6">
        <div>
          <h3 className="mb-3 text-sm text-muted-foreground uppercase tracking-wide">
            Keijuro Matsui Stats
          </h3>
          <div className="bg-card rounded-xl p-5 border border-border space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#FF6B35]">26</p>
                <p className="text-xs text-muted-foreground mt-1">PTS</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">32</p>
                <p className="text-xs text-muted-foreground mt-1">MIN</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">7</p>
                <p className="text-xs text-muted-foreground mt-1">REB</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs text-muted-foreground mt-1">AST</p>
              </div>
            </div>
            <div className="pt-4 border-t border-border grid grid-cols-3 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">FG</span>
                <span className="font-medium">9/15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">3PT</span>
                <span className="font-medium">3/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">FT</span>
                <span className="font-medium">5/6</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Rankings for This Game */}
        <div>
          <h3 className="mb-3 text-sm text-muted-foreground uppercase tracking-wide">
            Team Scoring Leaders
          </h3>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            {gameRankings.map((player, index) => (
              <div
                key={player.rank}
                className={`flex items-center justify-between p-4 ${
                  index !== gameRankings.length - 1 ? "border-b border-border" : ""
                } ${player.isPlayer ? "bg-[#FF6B35]/5" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center size-8 rounded-lg ${
                      player.rank === 1
                        ? "bg-[#FFD700]/20 text-[#FFD700]"
                        : player.rank === 2
                        ? "bg-[#C0C0C0]/20 text-[#C0C0C0]"
                        : player.rank === 3
                        ? "bg-[#CD7F32]/20 text-[#CD7F32]"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <span className="text-sm font-semibold">{player.rank}</span>
                  </div>
                  <div>
                    <p className={`font-medium ${player.isPlayer ? "text-[#FF6B35]" : ""}`}>
                      {player.name}
                    </p>
                    {player.isPlayer && (
                      <p className="text-xs text-muted-foreground">You</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{player.points}</p>
                  <p className="text-xs text-muted-foreground">PTS</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
