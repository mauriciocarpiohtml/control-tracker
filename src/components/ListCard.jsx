import { useCard } from "../hooks/useCard"

function ListCard({item}) {
    
const {deleteCharge} = useCard({item})
  
  return (
    <div className='h-[35] bg-gray-100 flex justify-between shadow-lg' >
      <div className='flex gap-5 p-3'>
        <svg
        className='rounded-full bg-green-500 text-white font-black p-3 w-[45px]' 
        xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
        </svg>
        <div className='flex flex-col'>
            <h3 className='text-stone-500 font-bold uppercase text-md'>{item.expense}</h3>
            <p className='text-stone-500 text-sm'>{item.date}</p>
        </div>
      </div>
      <div className='p-3 flex items-center mr-3'>
       <svg
       onClick={deleteCharge}
        className='rounded-md bg-red-500 text-white font-black p-3 w-[40px] cursor-pointer transition-color duration-300 hover:bg-red-700' 
        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
       </svg>
      </div>
      
    </div>
  )
}

export default ListCard
