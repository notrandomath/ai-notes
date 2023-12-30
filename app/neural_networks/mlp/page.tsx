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
        <Image src="/images/perceptron.svg" alt="Diagram of Perceptron" width={800} height={600}/>
        <p>
            A multi-layer perceptron is
        </p>
    </div>
  )
}