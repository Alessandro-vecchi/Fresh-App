import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react';
import Link from 'next/link';

// This is a placeholder type for your community card
type CommunityCardProps = {
    title: string;
    location: string;
    membersCount: number;
    backgroundImage: string; // This will be the URL or path to the image
};

const CommunityCard: React.FC<CommunityCardProps> = ({ title, location, membersCount, backgroundImage }) => {
    // Create a URL-friendly id or slug
    const slug = title.toLowerCase().split(' ').join('-');
    return (
        <Link href={`/community/${slug}`}>
            <div  className="relative text-black font-semibold rounded-lg overflow-hidden shadow-lg mb-4">
                <img src={backgroundImage} alt={`${title}`} className="w-full h-40" />
                <div className="absolute bottom-0 left-1 p-4 bg-white bg-opacity-0 w-full">
                    <h3 className="text-lg">{title}</h3>
                    <p className="text-sm">{location}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
                        Join
                    </button>
                    <span className="absolute right-4 bottom-4">
                        👥 {membersCount}
                    </span>
                </div>

            </div>
        </Link >
    );
};

const ForumsPage: React.FC = () => {
    // Mock data for the communities
    const communities: CommunityCardProps[] = [
        { title: 'Running Club', location: 'Zürich, Switzerland', membersCount: 120, backgroundImage: 'https://utfs.io/f/b8de00c7-21ee-43e1-8f58-48e356dc26a6-pnaojj.jpg' },
        { title: 'Food Group', location: 'Global', membersCount: 836, backgroundImage: 'https://utfs.io/f/202d2cc2-4b39-4fae-82c1-3e520dce2987-1vhpa.jpg' },
        // Add more communities as needed
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-extrabold text-center">Forums</h1>
            <div className="my-4 p-4">
                <div className="bg-white flex items-center rounded-full shadow-xl">
                    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search for communities" />
                    <div className="p-4">
                        <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                            <MagnifyingGlassIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended</h2>
            <div>
                {communities.map((community, index) => (
                    <CommunityCard key={index} {...community} />
                ))}
            </div>
        </div>
    );
};

export default ForumsPage;
