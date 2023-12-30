/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-[70px] bg-purple-600 stick top-0 ">
      <div className="[items] w-full h-full flex flex-row items-center">
        <div className="[left] mx-[50px]">
          <h1 className="text-gray-200">Omar Yahia's AI Notes</h1>
        </div>
        <div className="[right] flex-1 mx-[50px] space-x-[50px]">
          <Link className="text-gray-200" href="/neural_networks/perceptron">Perceptron</Link>
          <Link className="text-gray-200" href="/neural_networks/mlp">Multi-Layer Perceptron</Link>
        </div>
      </div>
    </div>
  )
}
  
