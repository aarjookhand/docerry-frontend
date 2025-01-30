import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function SignUpForm() {
    const navigate = useNavigate();
    // state for form fields and error msg
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [serverError, setServerError] = useState(false);

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-z\d@$!%*?&#.]{6,}$/;

    // handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault(); // prevent reload

      setError(null);
      setServerError(false);

      
      if (!passwordRegex.test(password)) {
        setError(
          'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
        );
        return;
      }

      
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }


      

      const signupData = { email, password };

      
      try {
          const response = await fetch("http://localhost:8081/auth/signup", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
          });

          if (response.ok) {
            const data = await response.json();
            const token = data.token; 
            localStorage.setItem('authToken', token);
            navigate('/home');
          } else {
            const errorData = await response.json();
            setError(errorData.message || 'Registration failed');
          }
        } catch (error) {
          setServerError(true); 
        }
      };


    const handleSignIn = () => {
        navigate('/signin')        
    }

    return (
        <div className="max-w-md w-full p-8">
          <h2 className="text-2xl font-bold mb-6">Welcome! 👋</h2>
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 bg-gray-100 rounded"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {serverError && (
              <p className="text-red-500 text-sm">
                Something went wrong. Please try again later.
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded font-medium"
            >
              CREATE NEW ACCOUNT
            </button>
            <p className="text-center text-sm text-emerald-700 cursor-pointer mt-4"  onClick={handleSignIn}>
              ALREADY HAVE AN EXISTING ACCOUNT?
            </p>
          </form>
        </div>
      )
    }
