import Form from './components/Form'
import Budget from './components/Budget'
import List from './components/List'


function App() {

  return (
    <>
      <div className='bg-white shadow-lg md:h-[80vh] my-3 mx-3 md:my-10 md:mx-20 rounded-md p-3 md:p-10'>
        <div className=" flex items-center 
        justify-center flex-col md:flex-row gap-5 md:gap-20">
          <Form/>
          <Budget/>
        </div>

        <List/>
      </div>
    </>
  )
}

export default App
