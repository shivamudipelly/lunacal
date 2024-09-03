import React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { MdDragIndicator } from 'react-icons/md';

const Side = () => {
  return (
    <div className="relative h-[100px] lg:h-[159.69px] flex-shrink-0">
      <div className="flex flex-col justify-between gap-4 smart">
        <HiQuestionMarkCircle className="text-white text-2xl lg:text-3xl" />
        <MdDragIndicator className="text-white text-2xl lg:text-3xl" />
      </div>
    </div>
  );
};

export default Side;
