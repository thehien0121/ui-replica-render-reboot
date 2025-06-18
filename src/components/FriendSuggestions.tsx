import React, { useState } from 'react';

interface Friend {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

const suggestedFriends: Friend[] = [
  { id: '1', name: '최수영', username: '@suyoung_choi', avatar: '최' },
  { id: '2', name: '정민호', username: '@minho_jung', avatar: '정' },
  { id: '3', name: '한지민', username: '@jimin_han', avatar: '한' },
];

export const FriendSuggestions: React.FC = () => {
  const [followedFriends, setFollowedFriends] = useState<Set<string>>(new Set());

  const handleFollow = (friendId: string) => {
    const newFollowed = new Set(followedFriends);
    if (newFollowed.has(friendId)) {
      newFollowed.delete(friendId);
    } else {
      newFollowed.add(friendId);
    }
    setFollowedFriends(newFollowed);
  };

  return (
    <aside className="border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white p-6 rounded-lg border-solid border-gray-200 max-md:flex max-md:flex-row max-md:gap-4 max-md:overflow-x-auto max-sm:p-4">
      <h2 className="text-black text-base font-semibold leading-6 mb-6">
        추천 친구
      </h2>
      
      {suggestedFriends.map((friend) => (
        <div key={friend.id} className="flex items-center gap-3 mb-4 max-md:min-w-[200px] max-md:shrink-0">
          <div className="text-white text-xs font-semibold w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            {friend.avatar}
          </div>
          <div className="flex-1">
            <div className="text-black text-sm font-medium leading-5">
              {friend.name}
            </div>
            <div className="text-gray-500 text-xs font-normal leading-4">
              {friend.username}
            </div>
          </div>
          <button
            onClick={() => handleFollow(friend.id)}
            className={`text-sm font-medium text-center w-[68px] h-9 border cursor-pointer rounded-md transition-colors ${
              followedFriends.has(friend.id)
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-black border-gray-300 hover:border-blue-600'
            }`}
          >
            {followedFriends.has(friend.id) ? '팔로잉' : '팔로우'}
          </button>
        </div>
      ))}
    </aside>
  );
};
