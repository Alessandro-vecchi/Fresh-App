import React from 'react';

type LeaderboardCardProps = {
    rank: number;
    name: string;
    points: number;
    nationality: string;
};

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ rank, name, points, nationality }) => {
    const flagImageUrl = `https://flagsapi.com/${nationality}/shiny/64.png`;

    return (
        <div className={`flex items-center justify-between px-4 py-2 mb-2 rounded-lg shadow-lg  ${rank === 5 ? 'bg-[#ffbdbd]' : 'bg-[#f8f8f8]'}`}>
            <span className="font-bold text-lg">{rank}</span>
            <span className="flex-1 mx-4 font-medium">{name}</span>
            <span className="font-medium">{points}</span>
            <img src={flagImageUrl} alt={`${nationality} flag`} className="w-6 h-4 object-cover ml-2" />
        </div>
    );
};

type LeaderboardEntry = {
    name: string;
    points: number;
    nationality: string;
};

export default function LeaderboardPage() {
    const leaderboardData: LeaderboardEntry[] = [
        { name: "Julien Dupont", points: 8920, nationality: "NO" },
        { name: "Gonzalo Paredes", points: 8920, nationality: "ES" },
        { name: "Mary Sullivan", points: 8856, nationality: "VE" },
        { name: "Maria Flores", points: 8660, nationality: "IT" },
        { name: "Me", points: 7517, nationality: "US" },
        { name: "Anonymous", points: 7733, nationality: "DE" },
        { name: "David Meier", points: 6890, nationality: "FR" },
        { name: "Anna Nagy", points: 6783, nationality: "HU" },
        { name: "Anonymous", points: 8920, nationality: "CA" },
    ];

    return (
        <div className="flex flex-col items-center p-4 bg-white min-h-screen">
            <h1 className="text-4xl font-bold text-gray-900 my-6">Leaderboard</h1>
            <div className="flex gap-4 mb-6">
                <button className="px-6 py-2 bg-[#ffbdbd] text-gray-700 font-semibold rounded-full shadow-md">Global</button>
                <button className="px-6 py-2 bg-[#f8f8f8] text-gray-700 font-semibold rounded-full shadow-xl">Local</button>
            </div>
            <div className="w-full max-w-md">
                {leaderboardData.map((entry, index) => (
                    <LeaderboardCard
                        key={index}
                        rank={index + 1}
                        name={entry.name}
                        points={entry.points}
                        nationality={entry.nationality}
                    />
                ))}
            </div>
        </div>
    );
}
