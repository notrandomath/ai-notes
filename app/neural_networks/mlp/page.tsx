import PreReq from "@/app/components/prereq"
import { PreReqDictionary } from '../../../types';
import Image from "next/image"

const prereqs : PreReqDictionary  = {
  "Perceptron": "/neural_networks/perceptron",
}

export default function MLPPage() {
  return (
    <div className="flex flex-col items-center my-[25px]">
        <PreReq prereqs={prereqs}/>
        <h1>Multi-Layer Perceptron</h1>
        <p>
            WIP
        </p>
    </div>
  )
}