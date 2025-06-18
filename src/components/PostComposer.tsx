import React, { useState } from 'react';
import { User, Image, Video, MapPin } from 'lucide-react';

export const PostComposer: React.FC = () => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postContent.trim()) {
      console.log('Posting:', postContent);
      setPostContent('');
    }
  };

  const handleMediaClick = (type: string) => {
    console.log(`Adding ${type}`);
  };

  return (
    <section className="border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white p-6 rounded-lg border-solid border-gray-200 max-sm:p-4">
      <div className="w-10 h-10 flex items-center justify-center mb-4 rounded-full bg-blue-600">
        <User className="w-6 h-6 text-white" />
      </div>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="무슨 일이 일어나고 있나요?"
          className="w-full text-gray-600 text-sm font-normal h-20 bg-gray-50 mb-4 px-4 py-3 rounded-md border-0 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Post content"
        />
        
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => handleMediaClick('photo')}
              className="text-blue-600 text-sm font-normal text-center cursor-pointer hover:text-blue-800 transition-colors flex items-center gap-1"
              aria-label="Add photo"
            >
              <Image className="w-4 h-4" />
              사진
            </button>
            <button
              type="button"
              onClick={() => handleMediaClick('video')}
              className="text-blue-600 text-sm font-normal text-center cursor-pointer hover:text-blue-800 transition-colors flex items-center gap-1"
              aria-label="Add video"
            >
              <Video className="w-4 h-4" />
              동영상
            </button>
            <button
              type="button"
              onClick={() => handleMediaClick('location')}
              className="text-blue-600 text-sm font-normal text-center cursor-pointer hover:text-blue-800 transition-colors flex items-center gap-1"
              aria-label="Add location"
            >
              <MapPin className="w-4 h-4" />
              위치
            </button>
          </div>
          
          <button
            type="submit"
            disabled={!postContent.trim()}
            className="text-slate-50 text-sm font-medium w-[52px] h-9 cursor-pointer bg-slate-900 rounded-md hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            게시
          </button>
        </div>
      </form>
    </section>
  );
};
