import { ChevronRight, TrendingUp } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

interface PlayerHomeScreenProps {
  onGameClick: () => void;
}

// Mock performance data
const performanceData = [
  { game: 1, points: 18 },
  { game: 2, points: 24 },
  { game: 3, points: 15 },
  { game: 4, points: 28 },
  { game: 5, points: 22 },
  { game: 6, points: 26 },
  { game: 7, points: 31 },
];

export function PlayerHomeScreen({ onGameClick }: PlayerHomeScreenProps) {
  return (
    <div className="min-h-full p-4 pb-6 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="size-2 rounded-full bg-[#FF6B35]" />
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            Sendai 89ERS
          </span>
        </div>
        <h1 className="text-3xl tracking-tight mb-1">Keijuro Matsui</h1>
        <p className="text-sm text-muted-foreground">#24 • Guard</p>
      </div>

      {/* Next Game Card */}
      <div className="bg-card rounded-2xl p-5 border border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">NEXT GAME</p>
            <p className="font-semibold">Jan 15 • 7:00 PM</p>
          </div>
          <div className="size-10 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
            <span className="text-[#FF6B35] text-sm font-semibold">VS</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-secondary flex items-center justify-center">
              <span className="text-lg">🏀</span>
            </div>
            <div>
              <p className="font-medium">Niigata Albirex BB</p>
              <p className="text-xs text-muted-foreground">Home Game</p>
            </div>
          </div>
          <button
            onClick={onGameClick}
            className="size-9 rounded-full bg-[#FF6B35] flex items-center justify-center hover:bg-[#E85A28] transition-colors"
          >
            <ChevronRight className="size-5 text-white" />
          </button>
        </div>
      </div>

      {/* Season Stats Grid */}
      <div>
        <h3 className="mb-3 text-sm text-muted-foreground uppercase tracking-wide">
          Season Overview
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-xl p-4 border border-border">
            <p className="text-xs text-muted-foreground mb-1">TOTAL POINTS</p>
            <p className="text-3xl font-semibold mb-0.5">487</p>
            <div className="flex items-center gap-1 text-xs text-[#4ADE80]">
              <TrendingUp className="size-3" />
              <span>+12%</span>
            </div>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <p className="text-xs text-muted-foreground mb-1">PPG AVERAGE</p>
            <p className="text-3xl font-semibold mb-0.5">23.2</p>
            <div className="flex items-center gap-1 text-xs text-[#4ADE80]">
              <TrendingUp className="size-3" />
              <span>+8%</span>
            </div>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <p className="text-xs text-muted-foreground mb-1">GAMES PLAYED</p>
            <p className="text-3xl font-semibold">21</p>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border">
            <p className="text-xs text-muted-foreground mb-1">TEAM RANK</p>
            <p className="text-3xl font-semibold">#2</p>
          </div>
        </div>
      </div>

      {/* Performance Trend */}
      <div className="bg-card rounded-2xl p-5 border border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold mb-1">Performance Trend</h3>
            <p className="text-xs text-muted-foreground">Last 7 Games</p>
          </div>
          <div className="px-2 py-1 bg-[#FF6B35]/10 rounded-md">
            <p className="text-xs text-[#FF6B35] font-medium">+5 PPG</p>
          </div>
        </div>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <YAxis hide domain={[0, 35]} />
              <Line
                type="monotone"
                dataKey="points"
                stroke="#FF6B35"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="text-center flex-1">
            <p className="text-xs text-muted-foreground mb-0.5">MIN</p>
            <p className="font-semibold">15</p>
          </div>
          <div className="text-center flex-1 border-l border-r border-border">
            <p className="text-xs text-muted-foreground mb-0.5">AVG</p>
            <p className="font-semibold">23.2</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-xs text-muted-foreground mb-0.5">MAX</p>
            <p className="font-semibold">31</p>
          </div>
        </div>
      </div>
    </div>
  );
}
