import React from 'react';
import { ArrowLeftIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

// Placeholder component for a chat bubble
const ChatBubble: React.FC<{ isCurrentUser: boolean; text: string; avatarUrl: string }> = ({ isCurrentUser, text, avatarUrl }) => {
  return (
    <div className={`flex items-end ${isCurrentUser ? 'justify-end' : 'justify-start'} my-2`}>
      {!isCurrentUser && <img src={avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />}
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
    { id: 1, text: "Hi everyone, I am Elena, from the HR team. We are organizing a run among colleagues at the park in front of this office. When do you like to do this?", isCurrentUser: false },
    { id: 2, text: "Let’s meet this Saturday at 9!", isCurrentUser: false },
    { id: 3, text: "I’ll be there for sure!!", isCurrentUser: true },
    // More messages...
  ];
  
  // Placeholder for an avatar URL
  const avatarUrl = "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg";

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 flex items-center border-b-2">
        <ArrowLeftIcon className="h-6 w-6 cursor-pointer" onClick={() => router.back()} />
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold">Running Club</h1>
          <p className="text-sm text-gray-500">Zürich, Switzerland</p>
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
