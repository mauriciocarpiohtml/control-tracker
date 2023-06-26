import { useContext, useEffect } from 'react'
import ContextExpense from '../context/expense'

export function useBudget(){
    
    const {presupuesto, expensives, balance, setBalance} = useContext(ContextExpense)
  
    useEffect(() => {
      const sumExpensives = expensives.reduce(
        (accumulator, expense) => accumulator + parseInt(expense.cost), 0
      )
      const updatedBalance = presupuesto - sumExpensives
      setBalance(updatedBalance)
    }, [expensives])

    return {balance, expensives}
}