import React from 'react';
import { ArrowLeftIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
// pages/community/[slug].tsx
import { useRouter } from 'next/router';

// Placeholder component for a chat bubble
const ChatBubble: React.FC<{ isCurrentUser: boolean; text: string }> = ({ isCurrentUser, text }) => {
  const bubbleTailClasses = isCurrentUser ? "right-0 mr-2" : "left-0 ml-2";
  const bubbleClasses = isCurrentUser
    ? "bg-blue-500 text-white text-right" : "bg-gray-200 text-gray-700 text-left";

  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${bubbleClasses}`}>
        <div className={`absolute -bottom-2 w-5 h-5 transform rotate-45 ${bubbleTailClasses} ${bubbleClasses}`}></div>
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

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 flex items-center border-b-2">
        <ArrowLeftIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold ml-4">Running Club</h1>
        <p className="ml-4 text-gray-500">Zürich, Switzerland</p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {chatMessages.map(message => (
          <ChatBubble key={message.id} isCurrentUser={message.isCurrentUser} text={message.text} />
        ))}
      </div>
      <div className="p-4 flex items-center">
        <input type="text" placeholder="Type here" className="flex-1 p-2 border-2 rounded-l-lg" />
        <button className="bg-blue-500 p-2 rounded-r-lg">
          <MicrophoneIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
