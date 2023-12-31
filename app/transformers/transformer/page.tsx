import PreReq from "@/app/components/prereq"
import { PreReqDictionary } from '../../../types';
import Image from "next/image"

const prereqs : PreReqDictionary  = {
  "Attention": "/transformer/attention",
  "Embedding": "/transformer/embedding",
}

export default function TransformerPage() {
  return (
    <div className="flex flex-col items-center my-[25px]">
        <PreReq prereqs={prereqs}/>
        <h1>Transformer</h1>
        <p>
            WIP
        </p>
    </div>
  )
}