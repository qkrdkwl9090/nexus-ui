import React from 'react';
import './Skeleton.css';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
}

const Skeleton = ({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  animation = 'pulse',
  className = ''
}: SkeletonProps) => {
  const animationClass = animation === 'wave' ? 'animate-wave' : animation === 'none' ? '' : 'animate-pulse';

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius
  };

  return <div className={`bg-gray-300 dark:bg-gray-700 ${animationClass} ${className}`} style={style}></div>;
};

Skeleton.displayName = 'Skeleton';
export default Skeleton;
