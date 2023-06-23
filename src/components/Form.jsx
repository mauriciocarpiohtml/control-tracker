import { useState, useContext, useEffect } from 'react'
import { categories } from '../utils/constants'
import ContextExpense from '../context/expense'
import { useSpeechContext } from '@speechly/react-client'
import Record from './Record'

function Form() {
    // Me traigo la lista de todos los gastos del context
    const {expensives, setExpensives, balance} = useContext(ContextExpense)

    // Estados para validar el form
    const [expense, setExpense] = useState('')
    const [category, setCategory] = useState('')
    const [cost, setCost] = useState('')
    const [date, setDate] = useState('')
    
   async function handleForm(e){
        e.preventDefault()
        if(balance === 0 || cost > balance){
          alert(`you don't have enough funds`)
          return
        }

        
          if([expense, category, cost, date].includes('') ){
            alert('All fields are require')
            return
        }
        const objExpense ={expense, category, cost, date}
        setExpensives([...expensives,objExpense])    
        
        setExpense('')
        setCategory('')
        setCost('')
        setDate('')
    }

    // Formulario a voz
    const { listening, segment, attachMicrophone, start, stop } = useSpeechContext()

    // funcion para activar el microfono
    async function handleClick(){
      if (listening) {
        await stop()
      } else {
        await attachMicrophone()
        await start()
      }
    }

    useEffect(() => {
      if (segment && segment.isFinal) {
        segment.entities.forEach((entitie) => {
          //El caso que voy a evaluar es el tipo de entidad
          switch(entitie.type){
            case 'word':
              setExpense(entitie.value)
              break
              // Convirtiendo la primera letra de categoria en mayuscula porque no coincide el value
            case 'category': setCategory(`${entitie.value.charAt(0)}${entitie.value.slice(1).toLowerCase()}`)
            break
            case 'cost': setCost(entitie.value)
            break
            case 'date': setDate(entitie.value)
            break
          }
        })
        
      }
    }, [segment])

    useEffect(() => {
      localStorage.setItem('expensives', JSON.stringify(expensives))
    },[expensives])


  return (
    <div className='mt-3 p-5 lg:w-[40%] bg-gray-100 shadow-lg rounded-md md:h-[360px] mx-auto'>
      <form
      onSubmit={handleForm}
      className='md:flex flex-wrap gap-5 p-3'>
        <div className='md:w-[45%]'>
            <label className='text-blue-500 font-bold'>Expense</label>
              <input
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              type='text' 
              className='w-full rounded-lg p-2 border border-blue-300 mt-1'
              id='expense'
              placeholder='Fruits'/>
        </div>
        <div className='md:w-[45%]'>
            <label className='text-blue-500 font-bold block'>Category</label>
              <select
              value={category}
              onChange={(e) => setCategory(e.target.value)} 
              className='w-full rounded-lg p-2 border border-blue-300 mt-1'>
                <option disabled>Select category</option>
                {categories.map(category => (
                  <option
                  value={category.value} 
                  key={category.name}>{category.name}</option>
                ))}

              </select>
        </div>

        <div className='md:w-[45%]'>
            <label 
            className='text-blue-500 font-bold block'>Cost</label>
            <input
              value={cost}
              onChange={(e) => setCost(parseInt(e.target.value))}
              type='number' 
              className='w-full rounded-lg p-2 border border-blue-300 mt-1'
              id='cost'
              placeholder='75$'/>
        </div>

        <div className='md:w-[45%]'>
            <label 
            className='text-blue-500 font-bold block'>Date</label>
            <input
            value={date}
              onChange={(e) => setDate(e.target.value)}
              type='date' 
              className='w-full rounded-lg p-2 border border-blue-300 mt-1'
              id='date'
              />
        </div>

        <input
        type='submit'
        className='w-full text-white font-bold text-center p-3 bg-cyan-600 rounded-lg
         cursor-pointer transition-colors duration-300 ease-in hover:bg-cyan-700 mt-3'
        value='Add expense'
        />
        <button
          type='button' 
          onClick={handleClick} 
          className='rounded-md p-3 md:mt-0 mt-2 bg-orange-500 text-white font-bold  mx-auto w-full'>
          {listening ? 'Stop' : 'Start'} 
        </button>
      </form>
    </div>
  )
}

export default Form
