import Image from "next/image";

const standings = [
  { rank: 1, team: "Liverpool", played: 26, won: 18, drawn: 7, lost: 1, gf: 62, ga: 36, gd: 26, points: 61 },
  { rank: 2, team: "Arsenal", played: 26, won: 15, drawn: 8, lost: 3, gf: 51, ga: 23, gd: 28, points: 53 },
  { rank: 3, team: "Nottm Forest", played: 25, won: 14, drawn: 5, lost: 6, gf: 41, ga: 29, gd: 12, points: 47 },
  { rank: 4, team: "Man City", played: 25, won: 13, drawn: 5, lost: 7, gf: 52, ga: 35, gd: 17, points: 44 },
  { rank: 5, team: "Bournemouth", played: 26, won: 12, drawn: 7, lost: 7, gf: 44, ga: 30, gd: 14, points: 43 },
  { rank: 6, team: "Chelsea", played: 26, won: 12, drawn: 7, lost: 7, gf: 48, ga: 36, gd: 12, points: 43 },
  { rank: 7, team: "Aston Villa", played: 27, won: 11, drawn: 9, lost: 7, gf: 39, ga: 41, gd: -2, points: 42 },
  { rank: 8, team: "Newcastle", played: 25, won: 12, drawn: 5, lost: 8, gf: 42, ga: 33, gd: 9, points: 41 },
  { rank: 9, team: "Brighton", played: 26, won: 10, drawn: 10, lost: 6, gf: 42, ga: 38, gd: 4, points: 40 },
  { rank: 10, team: "Fulham", played: 26, won: 10, drawn: 9, lost: 7, gf: 38, ga: 35, gd: 3, points: 39 },
  { rank: 11, team: "Brentford", played: 26, won: 11, drawn: 4, lost: 11, gf: 47, ga: 42, gd: 5, points: 37 },
  { rank: 12, team: "Tottenham", played: 26, won: 10, drawn: 3, lost: 13, gf: 53, ga: 38, gd: 15, points: 33 },
  { rank: 13, team: "Crystal Palace", played: 26, won: 8, drawn: 9, lost: 9, gf: 31, ga: 32, gd: -1, points: 33 },
  { rank: 14, team: "Everton", played: 26, won: 7, drawn: 10, lost: 9, gf: 29, ga: 33, gd: -4, points: 31 },
  { rank: 15, team: "Man United", played: 26, won: 8, drawn: 6, lost: 12, gf: 30, ga: 37, gd: -7, points: 30 },
  { rank: 16, team: "West Ham", played: 26, won: 8, drawn: 6, lost: 12, gf: 30, ga: 47, gd: -17, points: 30 },
  { rank: 17, team: "Wolves", played: 26, won: 6, drawn: 4, lost: 16, gf: 36, ga: 54, gd: -18, points: 22 },
  { rank: 18, team: "Ipswich Town", played: 26, won: 3, drawn: 5, lost: 18, gf: 24, ga: 54, gd: -30, points: 17 },
  { rank: 19, team: "Leicester City", played: 26, won: 4, drawn: 5, lost: 17, gf: 25, ga: 39, gd: -14, points: 17 },
  { rank: 20, team: "Southampton", played: 26, won: 2, drawn: 3, lost: 21, gf: 19, ga: 61, gd: -42, points: 9 },
];

export default function StandingsTable() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Heading with Lines */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex-grow h-[2px] bg-gray-300"></div>
        <h2 className="text-3xl font-bold text-center mx-4">Standings</h2>
        <div className="flex-grow h-[2px] bg-gray-300"></div>
      </div>

      {/* Standings Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-300">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3">Pos</th>
              <th className="p-3">Team</th>
              <th className="p-3">P</th>
              <th className="p-3">W</th>
              <th className="p-3">D</th>
              <th className="p-3">L</th>
              <th className="p-3">GF</th>
              <th className="p-3">GA</th>
              <th className="p-3">GD</th>
              <th className="p-3">Pts</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {standings.map((team, index) => (
              <tr
                key={team.rank}
                className={`border-b 
                  ${index < 4 ? "bg-green-100" : 
                  index === 4 ? "bg-orange-100" : 
                  index > 16 ? "bg-red-100" : 
                  "bg-white"}`}
              >
            
                <td className="p-3 font-bold">{team.rank}</td>
                <td className="p-3">{team.team}</td>
                <td className="p-3">{team.played}</td>
                <td className="p-3">{team.won}</td>
                <td className="p-3">{team.drawn}</td>
                <td className="p-3">{team.lost}</td>
                <td className="p-3">{team.gf}</td>
                <td className="p-3">{team.ga}</td>
                <td className="p-3">{team.gd}</td>
                <td className="p-3 font-bold">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
