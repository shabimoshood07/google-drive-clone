"use client"
import { useState } from 'react';
import { BreadcrumbNav } from '~/components/BreadcrumbNav';
import { DriveHeader } from '~/components/DriveHeader';
import { DriveList } from '~/components/DriveList';
import { mockDriveData } from '~/lib/mockData';
import { DriveItem } from '~/types/global';


function App() {
  const [currentPath, setCurrentPath] = useState<string[]>([]);

  // Get items for current path
  const filteredItems = mockDriveData.filter(item => {
    // If we're at root, show only type folders
    if (currentPath.length === 0) {
      return item.owner === 'system';
    }
    // Otherwise show items in current path
    return JSON.stringify(item.path) === JSON.stringify(currentPath);
  });

  const handleNavigate = (item: DriveItem) => {
    if (item.type === 'folder') {
      setCurrentPath(item.path);
    } else {
      // For files, you would typically handle opening/downloading
      window.open(`https://example.com/files/${item.id}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DriveHeader />
      <BreadcrumbNav
        path={currentPath}
        onNavigate={setCurrentPath}
      />
      <main className="container mx-auto p-4">
        <DriveList
          items={filteredItems}
          onNavigate={handleNavigate}
        />
      </main>
    </div>
  );
}

export default App;