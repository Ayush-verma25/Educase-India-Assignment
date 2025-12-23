import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../components/NavigationButtons';

const InputField = ({ id, label, placeholder, type = 'text', value, onChange }) => (
  <div className="mb-5 relative">
    <label
      htmlFor={id}
      className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-popx-purple font-semibold"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-popx-purple hover:border-popx-purple transition-colors"
      required
      autoComplete="off"
    />
  </div>
);

const Register = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false); // Added
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      alert('Please fill all required fields!');
      return;
    }

    console.log('Registration Data:', formData);

    // Show success message
    setSuccess(true);

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  return (
    <div className="bg-white w-full max-w-[400px] h-auto sm:h-[844px] sm:max-h-[90vh] rounded-2xl shadow-lg flex flex-col p-6">
      <div className="flex-grow overflow-y-auto pr-2">
        <div className="pt-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Create your PopX account</h1>
          <p className="text-gray-500 mb-6 text-sm">
            Join PopX to manage your work efficiently and grow your network.
          </p>

          <form onSubmit={handleRegister}>
            <InputField
              id="fullName"
              label="Full Name"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              id="phone"
              label="Phone Number"
              placeholder="Enter phone number"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              id="email"
              label="Email Address"
              placeholder="Enter email address"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              id="password"
              label="Password"
              placeholder="Enter password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <InputField
              id="company"
              label="Company Name"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
            />

            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Are you an Agency?</p>
              <div className="flex items-center">
                <label className="flex items-center mr-6 cursor-pointer">
                  <input
                    type="radio"
                    name="isAgency"
                    checked={formData.isAgency}
                    onChange={() => setFormData((prev) => ({ ...prev, isAgency: true }))}
                    className="w-5 h-5 accent-popx-purple"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isAgency"
                    checked={!formData.isAgency}
                    onChange={() => setFormData((prev) => ({ ...prev, isAgency: false }))}
                    className="w-5 h-5 accent-popx-purple"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-popx-purple text-white py-3 px-4 rounded-md font-semibold mt-4 hover:bg-opacity-90 transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Success Message */}
          {success && (
            <p className="text-green-600 text-center font-medium mt-4 animate-fade-in">
            Account created successfully! Redirecting to profile...
            </p>
          )}
        </div>
      </div>

      <NavigationButtons className="mt-auto" />
    </div>
  );
};

export default Register;
