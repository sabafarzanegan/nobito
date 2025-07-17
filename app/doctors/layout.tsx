import React, { ReactNode } from 'react';

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 md:px-28 bg-gray-50 py-12 min-h-svh border-t border-t-gray-500">
      {children}
    </div>
  );
}

export default layout;
