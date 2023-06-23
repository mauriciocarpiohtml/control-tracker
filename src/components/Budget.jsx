import { useContext, useEffect, useState } from 'react'
import ContextExpense from '../context/expense'
import ChartBudget from './ChartBudget'

function Budget() {

  const {presupuesto, expensives, setExpensives, balance, setBalance} = useContext(ContextExpense)
  
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('Expensives'))
  //   if(items){
  //     setExpensives(items)
  //   }
  // },[])

  useEffect(() => {
    const sumExpensives = expensives.reduce(
      (accumulator, expense) => accumulator + parseInt(expense.cost), 0
    )
    const updatedBalance = presupuesto - sumExpensives
    setBalance(updatedBalance)
  }, [expensives])

  return (
    <div className='p-5 lg:w-[60%] mt-3 bg-gray-100 shadow-lg rounded-md md:h-[360px]'>
      <div className='flex justify-between'>
        <h3 className='text-blue-500 font-bold text-xl text-left ml-3'>Budget:</h3>
        <h3 className='text-green-600 font-black text-2xl text-left ml-3'>{balance} $USD</h3>
      </div>
      
      <ChartBudget
      balance={balance}
      expensives={expensives}/>
    </div>
  )
}

export default Budget
