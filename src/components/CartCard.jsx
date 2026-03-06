
import { RiDeleteBin6Line } from "react-icons/ri";

function CartCard({items}) {
      if (!items) return null;
    const { id, name, image, price } = items;
  return (
    <div id={id}  className='w-full shadow-md flex justify-between  items-center p-2 rounded-xl'>
        {/* left side */}
        <div className='flex justify-between items-center'>
            <div className='w-30 h-20 flex items-center justify-center cursor-pointer  ring-2 rounded-2xl overflow-hidden mr-4 ring-orange-500'>
                <img src={image} alt={name} />
            </div>
            <div className='text-xl space-y-4'>
                <h3>{name}</h3>
                <div className='w-[100px] items-center ring-2 text-orange-600 ring-orange-400 rounded-xl  flex justify-around items-center '>
                   <div className='cursor-pointer'>-</div>
                   <div className='bg-zinc-300 px-2'>1</div>
                   <div className='cursor-pointer'>+</div>
                </div>
            </div>
        </div>
        {/* right side */}
        <div className='flex flex-col gap-4'>
            <h3 className='text-orange-600 text-xl'>RS. {price}/-</h3>
            <RiDeleteBin6Line  className='text-red-500 text-xl self-end cursor-pointer'/>


        </div>

    </div>
  )
}

export default CartCard