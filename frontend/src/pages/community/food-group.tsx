import React from 'react';
import { ArrowLeftIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

// Placeholder component for a chat bubble
const ChatBubble: React.FC<{ isCurrentUser: boolean; text: string; avatarUrl: string }> = ({ isCurrentUser, text, avatarUrl }) => {
  return (
    <div className={`flex items-end ${isCurrentUser ? 'justify-end' : 'justify-start'} my-2`}>
      {!isCurrentUser && <img src={avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full ml-0 mr-4" />}
      <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-2xl ${isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
        {text}
      </div>
    </div>
  );
};

const ChatPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query; // You get the community's slug from the URL
  
  // Sample chat data
  const chatMessages = [
    { id: 1, text: "Hey foodies! Who's up for exploring the new vegan cafe downtown this weekend?", isCurrentUser: false },
    { id: 2, text: "I've heard they have an amazing gluten-free chocolate cake! 🍰", isCurrentUser: true },
    { id: 3, text: "I'm definitely in! Maybe we can go on Sunday afternoon?", isCurrentUser: false },
    { id: 4, text: "Great idea! I’d love to join and try some of their fresh salads. 🥗", isCurrentUser: false },
    { id: 5, text: "Can we also discuss some recipe ideas for the upcoming food blog post?", isCurrentUser: true },
    { id: 6, text: "Sure, let's brainstorm after our cafe visit. I've been experimenting with some fusion dishes lately. 🍲", isCurrentUser: false },
    // More messages...
  ];
  
  
  // Placeholder for an avatar URL
  const avatarUrl = "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?w=1380";

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 flex items-center border-b-2">
        <ArrowLeftIcon className="h-6 w-6 cursor-pointer" onClick={() => router.back()} />
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold">Food Group</h1>
          <p className="text-sm text-gray-500">Global</p>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {chatMessages.map(message => (
          <ChatBubble
            key={message.id}
            isCurrentUser={message.isCurrentUser}
            text={message.text}
            avatarUrl={avatarUrl} // Pass the avatar URL
          />
        ))}
      </div>
      <div className="p-4 flex items-center">
        <input type="text" placeholder="Type here" className="flex-1 p-3 border-2 rounded-full" />
        <button className="ml-2 bg-blue-500 rounded-full p-3">
          <MicrophoneIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
