{\rtf1\ansi\ansicpg932\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from 'react';\
import ReactDOM from 'react-dom';\
import \{ motion \} from 'framer-motion';\
\
const LuxuryTopPage = () => \{\
  return (\
    <div className="min-h-screen bg-white text-gray-800 font-serif">\
      <header className="border-b border-gray-200 py-4">\
        <div className="container mx-auto flex justify-center items-center">\
          <h1 className="text-3xl font-bold tracking-widest">\uc0\u21271 \u22823 \u12494 \u12531 \u12469 \u12540 \u21516 \u22909 \u20250 </h1>\
        </div>\
        <nav className="flex justify-center space-x-8 mt-4">\
          <a href="/" className="text-gray-600 hover:text-gray-900">\uc0\u12507 \u12540 \u12512 </a>\
          <a href="/announcement" className="text-gray-600 hover:text-gray-900">\uc0\u21578 \u30693 </a>\
          <a href="#contact" className="text-gray-600 hover:text-gray-900">\uc0\u36899 \u32097 \u20808 </a>\
        </nav>\
      </header>\
\
      <main className="container mx-auto text-center mt-20 px-4">\
        <motion.h2 \
          initial=\{\{ opacity: 0, y: 30 \}\} \
          animate=\{\{ opacity: 1, y: 0 \}\} \
          transition=\{\{ duration: 1 \}\}\
          className="text-4xl font-extrabold mb-4"\
        >\
          \uc0\u12420 \u12426 \u12383 \u12356 \u12371 \u12392 \u12434 \u28961 \u29702 \u12420 \u12426 \u25506 \u12373 \u12394 \u12367 \u12390 \u12356 \u12356 \
        </motion.h2>\
\
        <motion.p \
          initial=\{\{ opacity: 0, y: 30 \}\} \
          animate=\{\{ opacity: 1, y: 0 \}\} \
          transition=\{\{ duration: 1, delay: 0.3 \}\}\
          className="text-lg mb-12"\
        >\
          \uc0\u12394 \u12395 \u12363 \u12395 \u25171 \u12385 \u36796 \u12416 \u12371 \u12392 \u12399 \u30906 \u12363 \u12395 \u36637 \u12363 \u12375 \u12356 \u12290 <br />\
          \uc0\u12364 \u12289 \u12392 \u12426 \u12392 \u12417 \u12398 \u12394 \u12356 \u20132 \u21451 \u38306 \u20418 \u12418 \u12414 \u12383 \u36637 \u12363 \u12375 \u12367 \u12399 \u12394 \u12356 \u12363 \u65311 \
        </motion.p>\
\
        <button className="button">\uc0\u20307 \u39443 \u30003 \u36796 </button>\
      </main>\
\
      <footer className="border-t border-gray-200 py-6 mt-20">\
        <div className="container mx-auto text-center text-sm text-gray-500">\
          &copy; 2025 \uc0\u21271 \u22823 \u12494 \u12531 \u12469 \u12540 \u21516 \u22909 \u20250 . All rights reserved.\
        </div>\
      </footer>\
    </div>\
  );\
\};\
\
ReactDOM.render(<LuxuryTopPage />, document.getElementById('root'));\
}