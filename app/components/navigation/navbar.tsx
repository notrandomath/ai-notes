"use client";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../dropdown";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="w-full h-[70px] bg-purple-600 fixed top-0 z-[3]">
      <div className="[items] w-full h-full flex flex-row items-center">
        <div className="[left] flex-1 mx-[50px]">
        <Link className="text-gray-200" href="/"><h1 className="text-gray-200 text-[100%]">Omar Yahia's AI Notes</h1></Link>
        </div>
        <div className="[right] mx-[50px] space-x-[50px]">
          <div className={"[hamburger] w-[30px] h-[25px] flex flex-col justify-between cursor-pointer"} onClick={()=>setMenuOpen(!menuOpen)}>
            <span className={"[line1] w-full h-[3px] bg-gray-200 origin-left transition-all ease duration-[2s] [&.active]:rotate-45 " + (menuOpen && "active")}></span>
            <span className={"[line2] w-full h-[3px] bg-gray-200 origin-left transition-all ease duration-[2s] [&.active]:opacity-0 " + (menuOpen && "active")}></span>
            <span className={"[line3] w-full h-[3px] bg-gray-200 origin-left transition-all ease duration-[2s] [&.active]:-rotate-45 " + (menuOpen && "active")}></span>
          </div>
          {/* 
            
          */}
        </div>
      </div>
      
      <div className={"[menu] w-[100%] h-screen space-y-[50px] bg-purple-600 fixed top-70 right-[-100%] z-[2] flex flex-col items-center justify-center transition-all ease duration-[2s] [&.active]:right-0 " + (menuOpen && "active")}>
          <Dropdown heading="Neural Networks" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
            <Link className="text-gray-200 underline" href="/neural_networks/perceptron">Perceptron</Link>
            <Link className="text-red-400 underline" href="/neural_networks/mlp">Multi-Layer Perceptron</Link>
          </Dropdown>
          <Dropdown heading="Transformers" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
            <Link className="text-gray-200 underline" href="/transformers/attention">Attention</Link>
            <Link className="text-red-400 underline" href="/transformers/embedding">Embeddings</Link>
            <Link className="text-red-400 underline" href="/transformers/transformer">Transformers</Link>
          </Dropdown>
      </div>
    </div>
  )
}
  
