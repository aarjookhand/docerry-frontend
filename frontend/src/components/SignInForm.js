import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const navigate = useNavigate();
  // state for form fields and error msg
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [error, setError] = useState(null);

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload

    const loginData = { email, password };

    try {
      const response = await fetch("http://localhost:8081/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json(); 
        const token = data.token; 
        localStorage.setItem('authToken', token);
        navigate('/home');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="max-w-md w-full p-8">
      <h2 className="text-2xl font-bold mb-6">Welcome back ! 👋</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            EMAIL
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 bg-gray-100 rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded font-medium"
        >
          LOG IN
        </button>
        <p className="text-center text-sm text-emerald-700 cursor-pointer mt-4" onClick={handleSignUp}>
          CREATE NEW ACCOUNT
        </p>
      </form>
    </div>
  );
}
