import { AiChat } from "@nlux/react"

import { useUnsafeChatAdapter, ChatAdapterOptions } from '@nlux/openai-react';

const adapterOptions: ChatAdapterOptions = {
 apiKey: 'your-openai-api-key-here',
 model: 'gpt-3.5-turbo',
 systemMessage: 'Act as a helpful assistant and be funny and engaging.',
};

export default function ChatBot() {
 const openAiAdapter = useUnsafeChatAdapter(adapterOptions);
 return (
  <>
   <div className="bg-gray-200 border-bottom rounded-b-2xl border-gray-400 h-24 w-full flex flex-col items-center justify-end">
    <h1 className="font-bold text-gray-900 text-3xl pb-4">Carlotta</h1>
   </div>
   <AiChat adapter={openAiAdapter} promptBoxOptions={{ placeholder: "Hey! I am here to help you with everything health related. I can curate meal, workout " }} />
  </>
 )
}