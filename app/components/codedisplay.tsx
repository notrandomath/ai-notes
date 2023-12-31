"use client";

import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';
import axios from 'axios';

export default function CodeDisplay({file_name}: {file_name: string}) {
  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await axios.get('/code_snippets/' + file_name);
        setCode(response.data);
        Prism.highlightAll();
      } catch (error) {
        console.error('Error fetching code:', error);
      }
    };

    fetchCode();
  }, [file_name]);

  return (
    <div className='border-2 border-black w-[80%]'>
        <pre>
            <code className="language-python">{code}</code>
        </pre>
    </div>
  );
};