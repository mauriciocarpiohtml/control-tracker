import React from 'react'
import { useSpeechContext } from '@speechly/react-client'

function Record() {
    const { listening, segment, attachMicrophone, start, stop } = useSpeechContext()

    async function handleClick(){
        if (listening) {
          await stop()
        } else {
          await attachMicrophone()
          await start()
        }
      }

  return (
    <button 
     onClick={handleClick} 
     className='rounded-md p-3 bg-orange-500 text-white font-bold  mx-auto w-full'>
          {listening ? 'Stop' : 'Start'} 
    </button>
  )
}

export default Record
