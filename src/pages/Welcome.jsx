import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="bg-white w-full max-w-[400px] h-auto min-h-[600px] sm:h-[844px] sm:max-h-[90vh] rounded-2xl shadow-lg flex flex-col justify-end p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ top: '8%', left: '35%' }}>1</div>
        <div className="absolute w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ top: '15%', left: '42%' }}>2</div>
        <div className="absolute w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ top: '22%', left: '33%' }}>3</div>
        <div className="absolute w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ top: '29%', left: '50%' }}>4</div>
        <div className="absolute w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ top: '34%', left: '65%' }}>5</div>
        <div className="absolute w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ top: '41%', left: '78%' }}>6</div>
      </div>

      <div className="z-10 mt-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link
          to="/register"
          className="w-full bg-popx-purple text-white py-3 px-4 rounded-md text-center block mb-3 font-semibold hover:bg-opacity-90 transition-colors"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="w-full bg-popx-light-purple text-black py-3 px-4 rounded-md text-center block font-semibold hover:bg-opacity-90 transition-colors"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
