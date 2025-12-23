import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const NavigationButtons = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex justify-between items-center pt-4 border-t border-gray-200 ${className}`}>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-semibold"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back
      </button>
      <button
        onClick={() => navigate(1)}
        className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-semibold"
      >
        Forward
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default NavigationButtons;
