import React from 'react';

export const CommonHeader = ({ textTitle, textSubTitle }) => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      <div className="mt-6 mb-2 text-4xl text-center font-extrabold font-BBH">
        {textTitle}
      </div>
      <div className="text-lg text-center font-custom mb-6">
        {textSubTitle}
      </div>
    </div>
  );
};
