import React from "react";

const RevenueCard = ({ title, orderAmount, orderCount }) => {
  return (
    <div className="shadow-md rounded p-4 m-2 ">
      <div className="text-gray-500 flex mb-3">
        <div className="text-sm">{title}</div>
        <div className="ml-1 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-3xl font-semibold">${orderAmount}</div>
        <div>
          {orderCount ? (
            <div className="flex text-[#146EB4] font-semibold underline cursor-pointer mt-3 text-sm">
              {orderCount} Orders{" "}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.2"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
