import { createContext } from "react"
import { useState } from "react"

const ContextExpense = createContext()

function Expense({children}) {
    const [presupuesto, setPresupuesto] = useState(1500)

    // Lista de gastos acumulados
    const [expensives, setExpensives] = useState(
      JSON.parse(localStorage.getItem('expensives')) ?? []
    )

    // Para calcular el saldo restante
    const [balance, setBalance] =useState(presupuesto)
    

  return (
    <ContextExpense.Provider
    value={{presupuesto, expensives, setExpensives,balance, setBalance}}>
    {children}
    </ContextExpense.Provider>
  )
}


export default ContextExpense

export {Expense}
