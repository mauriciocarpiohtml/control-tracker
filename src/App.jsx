import Form from './components/Form'
import Budget from './components/Budget'
import List from './components/List'
import { useSpeechContext } from '@speechly/react-client'


function App() {

  // const { listening, segment, attachMicrophone, start, stop } = useSpeechContext()

  // async function handleClick(){
  //   if (listening) {
  //     await stop();
  //   } else {
  //     await attachMicrophone();
  //     await start();
  //   }
  // }



  return (
    <>
    <div className='bg-white shadow-lg md:h-[80vh] my-3 mx-3 md:my-10 md:mx-20 rounded-md p-3 md:p-10'>
      <div className=" flex items-center 
       justify-center flex-col md:flex-row gap-5 md:gap-20">
        <Form/>
        <Budget/>
      </div>
      {/* <div className='flex justify-center items-center mt-5'>
        {/* <button 
        onClick={handleClick} 
        className='rounded-full p-3 bg-cyan-700 text-white font-bold  z-20'>
          {listening ? 'Stop' : 'Start'} 
        </button> */}
      {/* </div> */} 
      
      <List/>
    </div>
      
    </>
  )
}

export default App
