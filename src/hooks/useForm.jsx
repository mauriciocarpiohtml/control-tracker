import { useState, useContext, useEffect } from 'react'
import ContextExpense from '../context/expense'

export function useForm(){
    const {expensives, setExpensives, balance} = useContext(ContextExpense)
     // Estados para validar el form
     const [expense, setExpense] = useState('')
     const [category, setCategory] = useState('')
     const [cost, setCost] = useState('')
     const [date, setDate] = useState('')
     
       function handleForm(e){
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

     useEffect(() => {
        localStorage.setItem('expensives', JSON.stringify(expensives))
      },[expensives])

    return {expense, setExpense, category, setCategory, cost, setCost, date, setDate,
    handleForm}
}