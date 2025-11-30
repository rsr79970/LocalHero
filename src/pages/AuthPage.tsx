// pages/AuthPage.tsx
import { useState } from 'react';

type AuthMode = 'login' | 'register';

const AuthPage = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will go here
    alert(mode === 'login' ? 'Login successful!' : 'Registration successful!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>{mode === 'login' ? 'Login' : 'Create Account'}</h1>
        <p className="auth-subtitle">
          {mode === 'login' 
            ? 'Welcome back! Please sign in to your account.' 
            : 'Join our community of local heroes!'}
        </p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {mode === 'register' && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="auth-btn">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        
        <div className="auth-switch">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setMode('register')}>
                Sign up here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button onClick={() => setMode('login')}>
                Sign in here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;