import { useChart } from '../hooks/useChart'

function ChartBudget({ balance, expensives }) {
  
const {chartContainer} = useChart({balance, expensives})

  return (
    <div className='w-[200px] h-[200px] mx-auto mt-3'>
      <canvas ref={chartContainer} className='w-full h-full cursor-pointer' />
    </div>
  )
}

export default ChartBudget
