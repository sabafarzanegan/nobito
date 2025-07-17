'use client';

import { useEffect, useState } from 'react';

function Description({ text }: { text: string | undefined | null }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded ? text : text?.split(' ').slice(0, 60).join(' ') + '...';
  return (
    <div>
      <span className="text-gray-500 text-b2 leading-8">
        {displayText}
        {(text?.length as number) > 60 && (
          <button
            className={`
             text-primary-500 cursor-pointer `}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'مشاهده کمتر' : 'مشاهده بیشتر'}
          </button>
        )}
      </span>
    </div>
  );
}

export default Description;
