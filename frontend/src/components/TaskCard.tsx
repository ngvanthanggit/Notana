// components/TaskCard.tsx
import React from 'react';

type TaskCardProps = {
  taskName: string;
  taskStatus: 'pending' | 'completed';
};

export const TaskCard = ({ taskName, taskStatus }: TaskCardProps) => {
  const statusColors = {
    pending: 'bg-yellow-300',
    completed: 'bg-green-500',
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h4 className="font-medium text-lg">{taskName}</h4>
      <span className={`text-sm text-white p-1 rounded-md ${statusColors[taskStatus]}`}>
        {taskStatus}
      </span>
    </div>
  );
};
