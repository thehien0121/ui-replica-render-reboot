import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface PostCardProps {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  content,
  image,
  timestamp,
  likes: initialLikes,
  comments,
  shares,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    console.log(`Commenting on post ${id}`);
  };

  const handleShare = () => {
    console.log(`Sharing post ${id}`);
  };

  return (
    <article className="border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white p-6 rounded-lg border-solid border-gray-200 max-sm:p-4">
      <header className="flex items-center gap-3 mb-4">
        <div className="text-white text-sm font-semibold w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          {author.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-black text-base font-semibold leading-6">
            {author.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm font-normal leading-5">
              {author.username}
            </span>
            <span className="text-gray-500 text-sm font-normal leading-5">
              ·
            </span>
            <time className="text-gray-500 text-sm font-normal leading-5">
              {timestamp}
            </time>
          </div>
        </div>
      </header>
      
      <div className="text-gray-800 text-base font-normal leading-6 mb-4">
        {content}
      </div>
      
      {image && (
        <img
          src={image}
          alt=""
          className="w-full h-[260px] object-cover mb-4 rounded-lg max-sm:h-[200px]"
        />
      )}
      
      <footer className="flex items-center gap-8">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 cursor-pointer transition-colors ${
            isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
          }`}
          aria-label={`${isLiked ? 'Unlike' : 'Like'} post`}
        >
          <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
          <span className="text-sm font-normal text-center">
            {likes}
          </span>
        </button>
        
        <button
          onClick={handleComment}
          className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-blue-500 transition-colors"
          aria-label="Comment on post"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-sm font-normal text-center">
            {comments}
          </span>
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-green-500 transition-colors"
          aria-label="Share post"
        >
          <Share2 className="w-6 h-6" />
          <span className="text-sm font-normal text-center">
            {shares}
          </span>
        </button>
      </footer>
    </article>
  );
};
