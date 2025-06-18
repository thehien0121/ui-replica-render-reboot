import React from 'react';

interface Topic {
  id: string;
  name: string;
}

const topics: Topic[] = [
  { id: '1', name: '#서울날씨' },
  { id: '2', name: '#한강산책' },
  { id: '3', name: '#카페추천' },
  { id: '4', name: '#고양이스타그램' },
  { id: '5', name: '#일상공유' },
];

export const PopularTopics: React.FC = () => {
  const handleTopicClick = (topicName: string) => {
    console.log(`Clicked topic: ${topicName}`);
  };

  return (
    <aside className="border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white p-6 rounded-lg border-solid border-gray-200 max-sm:p-4">
      <h2 className="text-black text-base font-semibold leading-6 mb-6">
        인기 토픽
      </h2>
      
      <nav role="navigation" aria-label="Popular topics">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleTopicClick(topic.name)}
            className="block w-full text-left text-blue-600 text-sm font-normal leading-5 cursor-pointer mb-2 hover:text-blue-800 transition-colors"
          >
            {topic.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};
