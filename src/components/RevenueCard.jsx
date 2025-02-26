import React from 'react'

const RevenueCard = ({
    title,
    orderAmount,
    orderCount
}) => {
  return (
    <div className='shadow-md rounded p-4 m-3'>
        <div>
            {title + " ?"}
        </div>
        <div className='flex justify-between'>
            <div>
                ${orderAmount}
            </div>
            <div >
                {orderCount ? orderCount + " Orders" + <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
: ""}
            </div>

        </div>
    </div>
  )
}

export default RevenueCard