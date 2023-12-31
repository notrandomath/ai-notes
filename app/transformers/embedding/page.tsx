import PreReq from "@/app/components/prereq"
import { PreReqDictionary } from '../../../types';
import Image from "next/image"

const prereqs : PreReqDictionary  = {}

export default function EmbeddingPage() {
  return (
    <div className="flex flex-col items-center my-[25px]">
        <PreReq prereqs={prereqs}/>
        <h1>Embedding</h1>
        <p>
            WIP
        </p>
    </div>
  )
}