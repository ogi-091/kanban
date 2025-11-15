'use client';

import { useKanban } from './lib/store';
import { DirectorySelector } from './components/DirectorySelector';
import { KanbanBoard } from './components/KanbanBoard';

export default function Home() {
  const {
    isLoading,
    directoryName,
    isFileSystemSupported,
    initializeDirectory,
  } = useKanban();

  const handleSelectDirectory = async () => {
    await initializeDirectory();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (!directoryName) {
    return (
      <DirectorySelector
        onSelectDirectory={handleSelectDirectory}
        isSupported={isFileSystemSupported}
      />
    );
  }

  return <KanbanBoard />;
}
