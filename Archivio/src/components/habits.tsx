import React from 'react';

type HabitCardProps = {
    label: string;
    imageSrc: string;
};

const HabitCard: React.FC<HabitCardProps> = ({ imageSrc, label }) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg shadow-xxl m-3 bg-white">
            <img src={imageSrc} alt={label} className="w-36 h-38 rounded-md" />
        </div>
    );
};

type Habit = {
    label: string;
    imageSrc: string;
};

// Main page component
const TrackHabitsPage = () => {
    // Array of objects for each habit
    const habits: Habit[] = [
        { label: 'Food', imageSrc: 'https://utfs.io/f/87af47b8-331e-47dd-a398-8a36e59f1018-o6xs98.jpg' },
        { label: 'Water', imageSrc: 'https://utfs.io/f/a7de3a9a-f59b-4fca-b105-ab6c6bf35520-6eqhch.jpg' },
        { label: 'Steps', imageSrc: 'https://utfs.io/f/ba1aa081-91ca-476d-9047-5398d665462f-klj9gf.jpg' },
        { label: 'Activity', imageSrc: 'https://utfs.io/f/4df05200-539b-4602-a123-b3df1488bbaf-4pgz9l.jpg' },
        { label: 'Sleep', imageSrc: 'https://utfs.io/f/20916ce5-cdd7-4410-ac47-6813b7ebef2a-ptte5r.jpg' },
        { label: 'Stretches', imageSrc: 'https://utfs.io/f/434479c4-b65a-405c-b631-fdb1f5909c2e-p4ra2b.jpg' },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4 mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Track your habits</h1>
            <div className="grid grid-cols-2 gap-4">
                {habits.map((habit, index) => (
                    <HabitCard key={index} label={habit.label} imageSrc={habit.imageSrc} />
                ))}
            </div>
        </div>
    );
};

export default TrackHabitsPage;
