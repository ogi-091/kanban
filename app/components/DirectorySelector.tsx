'use client';

interface DirectorySelectorProps {
  onSelectDirectory: () => void;
  isSupported: boolean;
}

export function DirectorySelector({
  onSelectDirectory,
  isSupported,
}: DirectorySelectorProps) {
  if (!isSupported) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              お使いのブラウザは非対応です
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              このアプリケーションはFile System Access
              APIを使用しています。Chrome、Edge、またはOperaブラウザをご利用ください。
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-left">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">対応ブラウザ:</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Google Chrome 86+</li>
                <li>Microsoft Edge 86+</li>
                <li>Opera 72+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          <div className="text-6xl mb-6">📋</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            カンバンボード
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            ローカルファイルにデータを保存するタスク管理アプリです。
            始めるには、データを保存するディレクトリを選択してください。
          </p>
          <button
            onClick={onSelectDirectory}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            📁 ディレクトリを選択
          </button>
          <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-sm text-left">
            <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">💡 ポイント:</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>選択したディレクトリに kanban-data.json が作成されます</li>
              <li>データはブラウザではなくローカルに保存されます</li>
              <li>同じディレクトリを選択すれば続きから作業できます</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

