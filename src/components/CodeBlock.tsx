"use client"

import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiClipboard } from 'react-icons/fi';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-docker.min'

interface CodeBlockProps {
  code: string;
  language: string;
  fileExtension: string;
  className: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, fileExtension, className }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className={`relative rounded-3xl bg-[#2d2d2d] overflow-hidden shadow-md ${className}`}>
      <div className="w-full flex items-center px-5 relative inset-0 my-5">
        <p className="p-2 font-bold">{fileExtension}</p>
        <p className="cursor-pointer bg-zinc-700 border border-zinc-600 rounded-md px-5 p-2 ml-4">Bun</p>
        <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
          <button
            className="transition p-2 absolute right-5"
            aria-label="Copy to clipboard"
          >
            <FiClipboard size={20} />
          </button>
        </CopyToClipboard>
        {copied && (
          <div className="absolute right-16  text-zinc-200 p-2">
            Copied!
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-zinc-700"></div>
      <pre>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
      <div className="h-10"></div>
    </div>
  );
};

export default CodeBlock;