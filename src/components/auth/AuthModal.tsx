import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { toast } from 'react-hot-toast';
import { Lock, Mail } from 'lucide-react';

export function AuthModal() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(email, password);
        toast.success('Welcome back!');
      } else {
        await signUp(email, password);
        toast.success('Account created successfully!');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-kustom-purple/20 p-6">
      <h2 className="text-xl font-semibold text-kustom-gold mb-6">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-kustom-gold" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-kustom-black border border-kustom-purple/30 text-white rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-kustom-gold" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-kustom-black border border-kustom-purple/30 text-white rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-kustom-purple to-kustom-gold text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="text-center text-white/60">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-kustom-gold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </form>
    </div>
  );
}