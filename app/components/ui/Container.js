import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  size = 'lg',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl', 
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
  };
  
  const baseClasses = 'mx-auto px-4 sm:px-6 lg:px-8';
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container; 