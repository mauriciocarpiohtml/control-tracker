import { useBudget } from '../hooks/useBudget'
import ChartBudget from './ChartBudget'

function Budget() {

 const {expensives, balance} = useBudget()

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
