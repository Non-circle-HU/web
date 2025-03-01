import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const LuxuryTopPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-serif">
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-3xl font-bold tracking-widest">北大ノンサー同好会</h1>
        </div>
        <nav className="flex justify-center space-x-8 mt-4">
          <a href="/" className="text-gray-600 hover:text-gray-900">ホーム</a>
          <a href="/announcement" className="text-gray-600 hover:text-gray-900">告知</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">連絡先</a>
        </nav>
      </header>

      <main className="container mx-auto text-center mt-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-4"
        >
          やりたいことを無理やり探さなくていい
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg mb-12"
        >
          なにかに打ち込むことは確かに輝かしい。<br />
          が、とりとめのない交友関係もまた輝かしくはないか？
        </motion.p>

        <button className="button">体験申込</button>
      </main>

      <footer className="border-t border-gray-200 py-6 mt-20">
        <div className="container mx-auto text-center text-sm text-gray-500">
          &copy; 2025 北大ノンサー同好会. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<LuxuryTopPage />, document.getElementById('root'));
