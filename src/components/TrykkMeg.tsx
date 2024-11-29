"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const ShowImage: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const [showButton, setShowButton] = useState(true);


  const handleButtonClick = () => {
    setShowImage(true);
    setShowButton(false)
    setTimeout(() => {
        setShowImage(false)
        setShowButton(true)
    }, 4000);
  };

  return (
    <div className="fixed flex flex-col bottom-5 right-5 z-30">
        {showButton && (
            <button
                onClick={handleButtonClick}
                className="px-4 py-2 mb-4 text-white bg-indigo-500 rounded hover:bg-indigo-700"
            >
            Hvordan Det er å gå IT
        </button>
        )}
      {showImage && (
        <Image
          src="https://cdn.discordapp.com/attachments/1276088367699857450/1311992847674904616/cyberpunk-cyberpunk-anime.gif?ex=674ae00e&is=67498e8e&hm=fd0c1f069f96497808100a2de620406cea5bacfb0ff1744c5043b8587236973a&"
          alt="Description"
          className="w-64 h-auto rounded-3xl shadow-md"
        />
      )}
    </div>
  );
};

export default ShowImage;
