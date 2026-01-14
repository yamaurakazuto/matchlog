import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

type TabType = "game" | "season";

// Mock game rankings data
const gameRankings = [
  { rank: 1, name: "Yuki Togashi", value: 28, trend: "up" },
  { rank: 2, name: "Keijuro Matsui", value: 26, trend: "up", isPlayer: true },
  { rank: 3, name: "Takumi Saito", value: 18, trend: "same" },
  { rank: 4, name: "Hiroshi Yamada", value: 14, trend: "down" },
  { rank: 5, name: "Ryo Tanaka", value: 12, trend: "up" },
  { rank: 6, name: "Kazuki Nakamura", value: 11, trend: "same" },
  { rank: 7, name: "Daiki Suzuki", value: 9, trend: "down" },
  { rank: 8, name: "Shota Kobayashi", value: 7, trend: "same" },
];

// Mock season rankings data
const seasonRankings = [
  { rank: 1, name: "Yuki Togashi", value: 25.4, trend: "up" },
  { rank: 2, name: "Keijuro Matsui", value: 23.2, trend: "up", isPlayer: true },
  { rank: 3, name: "Takumi Saito", value: 19.8, trend: "down" },
  { rank: 4, name: "Hiroshi Yamada", value: 16.5, trend: "up" },
  { rank: 5, name: "Ryo Tanaka", value: 14.3, trend: "same" },
  { rank: 6, name: "Kazuki Nakamura", value: 12.7, trend: "down" },
  { rank: 7, name: "Daiki Suzuki", value: 10.2, trend: "up" },
  { rank: 8, name: "Shota Kobayashi", value: 8.9, trend: "same" },
];

export function RankingsScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("season");
  
  const rankings = activeTab === "game" ? gameRankings : seasonRankings;

  return (
    <div className="min-h-full p-4 pb-6">
      {/* Header */}
      <div className="pt-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="size-2 rounded-full bg-[#FF6B35]" />
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Sendai 89ERS
          </span>
        </div>
        <h1 className="text-3xl tracking-tight mb-1">Team Rankings</h1>
        <p className="text-sm text-muted-foreground">Points Leaders</p>
      </div>

      {/* Tabs */}
      <div className="bg-card rounded-xl p-1 mb-6 border border-border inline-flex w-full">
        <button
          onClick={() => setActiveTab("season")}
          className={`flex-1 py-2.5 px-4 rounded-lg transition-all ${
            activeTab === "season"
              ? "bg-[#FF6B35] text-white shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Season
        </button>
        <button
          onClick={() => setActiveTab("game")}
          className={`flex-1 py-2.5 px-4 rounded-lg transition-all ${
            activeTab === "game"
              ? "bg-[#FF6B35] text-white shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Last Game
        </button>
      </div>

      {/* Rankings List */}
      <div className="space-y-2">
        {rankings.map((player, index) => (
          <div
            key={player.rank}
            className={`bg-card rounded-xl p-4 border border-border transition-all hover:border-[#FF6B35]/30 ${
              player.isPlayer ? "ring-2 ring-[#FF6B35]/30 bg-[#FF6B35]/5" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                {/* Rank Badge */}
                <div
                  className={`flex items-center justify-center min-w-10 h-10 rounded-lg ${
                    player.rank === 1
                      ? "bg-[#FFD700]/20 text-[#FFD700]"
                      : player.rank === 2
                      ? "bg-[#C0C0C0]/20 text-[#C0C0C0]"
                      : player.rank === 3
                      ? "bg-[#CD7F32]/20 text-[#CD7F32]"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <span className="font-bold">{player.rank}</span>
                </div>

                {/* Player Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p
                      className={`font-semibold ${
                        player.isPlayer ? "text-[#FF6B35]" : ""
                      }`}
                    >
                      {player.name}
                    </p>
                    {player.isPlayer && (
                      <span className="px-2 py-0.5 bg-[#FF6B35] text-white text-xs rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {player.trend === "up" && (
                      <div className="flex items-center gap-1 text-xs text-[#4ADE80]">
                        <TrendingUp className="size-3" />
                        <span>Rising</span>
                      </div>
                    )}
                    {player.trend === "down" && (
                      <div className="flex items-center gap-1 text-xs text-[#F87171]">
                        <TrendingDown className="size-3" />
                        <span>Falling</span>
                      </div>
                    )}
                    {player.trend === "same" && (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Points Value */}
              <div className="text-right">
                <p className="text-2xl font-bold">
                  {activeTab === "season" ? player.value.toFixed(1) : player.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activeTab === "season" ? "PPG" : "PTS"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="mt-6 bg-card rounded-xl p-5 border border-border">
        <h3 className="font-semibold mb-4">Your Performance</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-[#FF6B35]">2nd</p>
            <p className="text-xs text-muted-foreground mt-1">Team Rank</p>
          </div>
          <div>
            <p className="text-2xl font-bold">23.2</p>
            <p className="text-xs text-muted-foreground mt-1">PPG</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#4ADE80]">+8%</p>
            <p className="text-xs text-muted-foreground mt-1">vs Last Month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
