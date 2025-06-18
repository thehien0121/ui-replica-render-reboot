import React from 'react';
import { Header } from '@/components/Header';
import { UserProfile } from '@/components/UserProfile';
import { PopularTopics } from '@/components/PopularTopics';
import { PostComposer } from '@/components/PostComposer';
import { PostCard } from '@/components/PostCard';
import { FriendSuggestions } from '@/components/FriendSuggestions';
import { RecentActivity } from '@/components/RecentActivity';

const samplePosts = [
  {
    id: '1',
    author: {
      name: '김민수',
      username: '@kimminsu',
      avatar: '김',
    },
    content: '오늘 서울 날씨가 정말 좋네요! 한강에서 산책하고 있습니다. 🌸',
    image: 'https://placehold.co/462x260/4a5568/4a5568',
    timestamp: '2시간 전',
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: '2',
    author: {
      name: '박지영',
      username: '@jiyoung_park',
      avatar: '박',
    },
    content: '새로운 카페에서 맛있는 커피 한 잔! ☕️ 분위기가 너무 좋아요.',
    image: 'https://placehold.co/462x260/8b7355/8b7355',
    timestamp: '4시간 전',
    likes: 156,
    comments: 23,
    shares: 12,
  },
  {
    id: '3',
    author: {
      name: '이현우',
      username: '@hyunwoo_lee',
      avatar: '이',
    },
    content: '우리 고양이가 너무 귀여워서 자꾸 사진을 찍게 되네요 😸',
    image: 'https://placehold.co/462x260/d4a574/d4a574',
    timestamp: '6시간 전',
    likes: 89,
    comments: 15,
    shares: 7,
  },
];

export default function Index() {
  return (
    <div className="w-full min-h-screen relative bg-gray-50">
      <Header />
      
      <main className="flex gap-6 max-w-[1200px] mx-auto my-0 pt-[89px] pb-[30px] px-[30px] max-md:flex-col max-md:pt-[89px] max-md:pb-5 max-md:px-5 max-sm:pt-[89px] max-sm:pb-4 max-sm:px-4">
        {/* Left Sidebar */}
        <div className="w-[262px] flex flex-col gap-6 max-md:w-full max-md:order-2">
          <UserProfile />
          <PopularTopics />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 max-w-[548px] flex flex-col gap-6 max-md:max-w-full max-md:order-1">
          <PostComposer />
          
          {samplePosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              image={post.image}
              timestamp={post.timestamp}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
            />
          ))}
        </div>
        
        {/* Right Sidebar */}
        <div className="w-[262px] flex flex-col gap-6 max-md:w-full max-md:order-3">
          <FriendSuggestions />
          <RecentActivity />
        </div>
      </main>
      
      {/* Builder.io Edit Badge */}
      <div className="fixed w-[141px] h-7 flex items-center justify-center gap-2 z-[1000] bg-black rounded-[5px] right-5 bottom-5 max-sm:right-4 max-sm:bottom-4">
        <div className="text-zinc-400 text-xs font-normal leading-[18px]">
          Edit with
        </div>
        <div className="text-zinc-400 text-xs font-normal leading-[18px]">
          Builder.io
        </div>
        <button className="text-zinc-400 text-sm font-normal leading-[21px] text-center cursor-pointer hover:text-white transition-colors">
          ×
        </button>
      </div>
    </div>
  );
}
