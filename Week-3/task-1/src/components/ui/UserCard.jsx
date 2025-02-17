import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-200">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-lg">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;