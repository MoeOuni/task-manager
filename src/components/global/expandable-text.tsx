'use client';

import React, { useState } from "react";

const ExpandableText = ({
  content,
  maxCharacters,
}: {
  content: string;
  maxCharacters: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {content.length > maxCharacters && !expanded ? (
        <>
          {content.slice(0, maxCharacters)}
          <button
            onClick={toggleExpand}
            className="text-black font-bold dark:text-white"
          >
            ...Read More
          </button>
        </>
      ) : (
        <>
          {content}
          {content.length > maxCharacters && (
            <button
              onClick={toggleExpand}
              className="text-black font-bold dark:text-white"
            >
              {" "}
              Show Less
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ExpandableText;
