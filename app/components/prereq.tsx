import Link from 'next/link';
import { PreReqDictionary } from '../../types';

export default function PreReq({prereqs}: { prereqs: PreReqDictionary }) {
  return (
    <div className="w-[80%] flex flex-row items-center justify-center border-2 border-red-800 rounded p-[20px]">
    <div className='[left] mx-[20px]'>
        <h2>Prerequisites: </h2>
    </div>
    <div >
        <ul className='[right] flex flex-row mx-[20px] space-x-[30px]'>
            {Object.entries(prereqs).map(([k, v]) => (
                <Link key={k} href={v}><li>{k}</li></Link>
            ))}
        </ul>
    </div>
    </div>
  )
}