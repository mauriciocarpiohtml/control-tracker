import { useEffect, useRef } from 'react'
import { categories } from '../utils/constants'
import Chart from 'chart.js/auto'

export function useChart({ balance, expensives }){
    const chartContainer = useRef(null)
    const chart = useRef(null)
  
    useEffect(() => {
      if (chart.current) {
        chart.current.destroy()
      }
  
  
      const data = {
        labels: [...expensives?.map((expensive) => expensive.category), 'Remaining budget'],
        datasets: [
          {
            data: [...expensives?.map((expensive) => expensive.cost), balance],
            backgroundColor: [
              ...expensives?.map((expensive) => {
                const category = categories.find((cat) => cat.name === expensive.category)
                return category ? category.color : ''
              }).concat('#1f9725') // Green color for balance
            ]
          }
        ]
      }
  
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            align: 'start', // Align the legend items to start horizontally
            labels: {
              font: {
                size: 12,
                weight: 'bold'
              }
            }
          }
        }
      }
  
      chart.current = new Chart(chartContainer.current, {
        type: 'pie',
        data: data,
        options: options
      })
    }, [balance, expensives])

    return {chartContainer}
}