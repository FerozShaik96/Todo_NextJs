import React from 'react';

function DateDisplay() {
  const date = new Date().getDate();
  const getMonth = new Date().getMonth();
  const getDay = new Date().getDay();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = weekdays[getDay];
  const month = months[getMonth];
  return (
    <div className="flex  items-end  gap-x-2 ">
      <h1 className="text-md font-bold sm:text-xl xl:text-2xl">Today</h1>
      <span className=" text-[10px] text-stone-500 sm:text-sm xl:text-base">
        {day} {date} {month}
      </span>
    </div>
  );
}

export default DateDisplay;
