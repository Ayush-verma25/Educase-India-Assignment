import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import NavigationButtons from '../components/NavigationButtons';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens here
    navigate('/login');
  };

  return (
    <div className="bg-white w-full max-w-[400px] h-auto min-h-[600px] sm:h-[844px] sm:max-h-[90vh] rounded-2xl shadow-lg flex flex-col p-6">
      <header className="py-4">
        <h1 className="text-xl font-bold text-gray-800">Account Settings</h1>
      </header>
      <main className="flex-grow flex flex-col">
        <div className="flex items-center space-x-4 py-4">
          <div className="relative">
            <img
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/A0BFFF/FFFFFF?text=MD"
              alt="Marry Doe"
              className="w-24 h-24 rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-popx-purple w-8 h-8 rounded-full flex items-center justify-center text-white border-2 border-white hover:bg-opacity-80 transition-colors">
              <Camera size={16} />
            </button>
          </div>
          <div>
            <p className="font-bold text-lg text-gray-800">Marry Doe</p>
            <p className="text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-gray-600 my-4 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum.
        </p>
        <hr className="border-t border-dashed border-gray-300" />
      </main>
      <footer className="mt-auto">
        <NavigationButtons />
         <button
          onClick={handleLogout}
          className="w-full bg-popx-light-purple text-black py-3 px-4 rounded-md font-semibold hover:bg-purple-200 transition-colors mt-4"
        >
          Logout
        </button>
      </footer>
    </div>
  );
};

export default Profile;
