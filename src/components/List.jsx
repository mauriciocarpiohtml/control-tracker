import ListCard from "./ListCard"
import { useContext } from "react"
import ContextExpense from "../context/expense"

function List() {
    const {expensives} = useContext(ContextExpense)
  return (
    <div className="w-full p-3 mx-auto flex flex-col gap-3 h-[80px] mt-1 overflow-y-scroll">
      {expensives?.map((item) => 
      <ListCard
      key={item.expense}
      item={item}/>
      )}
    </div>
  )
}

export default List
