import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../components/NavigationButtons';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = "PopX | Login";
  }, []);

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    setIsFormValid(isEmailValid && password.trim() !== '');
  }, [email, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      localStorage.setItem('loggedIn', true);
      navigate('/profile');
    } else {
      setError('Please enter a valid email and password');
    }
  };

  return (
    <div className="bg-white w-full max-w-[400px] h-auto min-h-[600px] sm:h-[844px] sm:max-h-[90vh] rounded-2xl shadow-lg flex flex-col p-6">
      <div className="flex-grow">
        <div className="pt-16">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Signin to your PopX account</h1>
          <p className="text-gray-500 mb-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-5 relative">
              <label
                htmlFor="email"
                className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-popx-purple font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-popx-purple hover:border-popx-purple transition-colors"
              />
            </div>
            <div className="mb-8 relative">
              <label
                htmlFor="password"
                className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-popx-purple font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-popx-purple hover:border-popx-purple transition-colors"
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
                isFormValid
                  ? 'bg-popx-purple text-white cursor-pointer hover:bg-opacity-90'
                  : 'bg-gray-300 text-white cursor-not-allowed'
              }`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <NavigationButtons className="mt-auto" />
    </div>
  );
};

export default Login;
