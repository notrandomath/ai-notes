import Link from 'next/link';
import { PreReqDictionary } from '../../types';

export default function PreReq({prereqs}: { prereqs: PreReqDictionary }) {
  return (
    <div className="w-[80%] flex flex-row items-center justify-center border-2 border-red-800 rounded p-[20px]">
    <div className='[left] mx-[20px]'>
        <h2 className='text-[150%]'>Prerequisites: </h2>
    </div>
    <div className='[right] flex flex-col text-center mx-[20px] space-x-[30px]' >
        <ul>
            {Object.entries(prereqs).map(([k, v]) => (
                <Link key={k} href={v}><li className='text-[100%] underline'>{k}</li></Link>
            ))}
            {(() => {
              if (Object.keys(prereqs).length === 0) {
                return <li className='text-[100%]'>None!</li>;
              }
            })()}
        </ul>
    </div>
    </div>
  )
}