import React from 'react';

interface Activity {
  id: string;
  message: string;
}

const activities: Activity[] = [
  { id: '1', message: '김민수님이 회원님의 게시물에 좋아요를 눌렀습니다' },
  { id: '2', message: '박지영님이 회원님을 팔로우하기 시작했습니다' },
  { id: '3', message: '이현우님이 회원님의 게시물에 댓글을 달았습니다' },
];

export const RecentActivity: React.FC = () => {
  return (
    <aside className="border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white p-6 rounded-lg border-solid border-gray-200 max-md:flex max-md:flex-row max-md:gap-4 max-md:overflow-x-auto max-sm:p-4">
      <h2 className="text-black text-base font-semibold leading-6 mb-6">
        최근 활동
      </h2>
      
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3 mb-4 max-md:min-w-[200px] max-md:shrink-0">
          <div className="w-1.5 h-2 mt-1.5 rounded-full bg-blue-600" />
          <div className="text-black text-sm font-normal leading-5 flex-1">
            {activity.message}
          </div>
        </div>
      ))}
    </aside>
  );
};
