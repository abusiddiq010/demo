import React from 'react';

const Button = (props) => {
  const { children, style } = props;

  return (
    <button className={`bg-[#111B47] text-white min-w-[160px] px-7 py-1`} style={style}>
      {children}
    </button>
  );
};

export default Button;
