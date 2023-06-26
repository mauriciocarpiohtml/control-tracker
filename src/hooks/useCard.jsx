import { useContext } from "react"
import ContextExpense from "../context/expense"

export function useCard({item}){

    const {expensives, setExpensives} = useContext(ContextExpense)

    function deleteCharge() {
        const expensiveFilter = expensives.filter((charge) => charge !== item);
        setExpensives(expensiveFilter);
      }
    return {deleteCharge}
}