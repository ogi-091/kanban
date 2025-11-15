'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Task, TaskStatus } from '../lib/types';
import { TaskCard } from './TaskCard';

interface DroppableColumnProps {
  id: TaskStatus;
  title: string;
  color: string;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function DroppableColumn({
  id,
  title,
  color,
  tasks,
  onEdit,
  onDelete,
}: DroppableColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg text-gray-800">{title}</h2>
        <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>
      <div
        ref={setNodeRef}
        className={`min-h-[500px] ${color} rounded-lg p-3 transition-all ${
          isOver ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
        }`}
      >
        <SortableContext
          id={id}
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </SortableContext>
        {tasks.length === 0 && (
          <div className="text-center text-gray-400 py-8">
            タスクはありません
          </div>
        )}
      </div>
    </div>
  );
}

