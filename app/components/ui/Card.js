import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl border border-neutral-200 transition-all duration-200';
  const hoverClasses = hover ? 'hover:shadow-md hover:border-neutral-300' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card; 