import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full flex items-center justify-center py-10 bg-gray-50">
      <div className="w-full max-w-2xl px-5 py-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Subscribe Our Newsletter</h2>
        <p className="text-center mb-6">Subscribe to our newsletter to get our news</p>
        <form className="flex flex-row w-full space-x-2">
          <input
            type="email"
            placeholder="Your email address.."
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            className="p-3 text-white bg-yellow-500 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
