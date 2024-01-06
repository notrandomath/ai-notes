import Image from 'next/image'

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center my-[25px] space-y-[25px]">
        <h1>Home Page</h1>
        <p className='w-[70%]'>
          Welcome to my notes on AI! 
          The goal of this website is to explain the minimum topics necessary to understand relevant architectures used in today's AI fields like the transformer architecture while still keeping an in-depth overview of every topic.
          Click on the menu icon at the top right and then on the dropdowns to reveal links that navigate through the different pages. 
          Clicking the name of the website at the top left will redirect you to this page.
        </p>        
      </div>
    </main>
  )
}
