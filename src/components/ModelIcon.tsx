import React from 'react';
import { ModelName } from '../types';

interface ModelIconProps {
  model: ModelName;
  className?: string;
}

export const ModelIcon: React.FC<ModelIconProps> = ({ model, className = 'w-4 h-4' }) => {
  if (model.includes('Gemini')) {
    // 4-pointed diamond / spark star for Google Gemini
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z" />
      </svg>
    );
  }

  if (model.includes('GPT')) {
    // OpenAI spiral glyph
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 3.5a6.5 6.5 0 0 1 6.5 6.5c0 2.2-1.1 4.1-2.8 5.2l-3.7-2.1V12a2.5 2.5 0 0 0-2.5-2.5H8.3A6.47 6.47 0 0 1 12 5.5Z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }

  if (model.includes('Claude')) {
    // Anthropic multi-ray spark glyph
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 2h-3v5.2l-3.7-3.7-2.1 2.1 3.7 3.7H3v3h5.4l-3.7 3.7 2.1 2.1 3.7-3.7V22h3v-5.4l3.7 3.7 2.1-2.1-3.7-3.7H21v-3h-5.4l3.7-3.7-2.1-2.1-3.7 3.7V2Z" />
      </svg>
    );
  }

  // Generic fallback AI spark
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 6.9 6.9 2.4-6.9 2.4L12 21l-2.4-6.9L2.7 11.3l6.9-2.4L12 2z" />
    </svg>
  );
};
