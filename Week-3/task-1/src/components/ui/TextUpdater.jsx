import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState("");
  const maxLength = 50;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">Text Preview</h2>
        <p className="text-gray-600">Type something to see it update in real-time</p>
      </div>
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            maxLength={maxLength}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <span className="absolute right-2 bottom-2 text-xs text-gray-500">
            {text.length}/{maxLength}
          </span>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">
            <span className="font-semibold">Preview:</span> {text || 'Nothing typed yet...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextUpdater;