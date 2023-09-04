import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col items-center'>
                    <span className='font-light'>30.08.23</span>
                    <span className='flex'>
                        <ShoppingBagIcon className='h-6 w-6 text-black'/>
                        <span className='font-light'>{totalProducts} articles</span>
                    </span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </p>
            </div>
        </div>
    )
}

export default OrdersCard