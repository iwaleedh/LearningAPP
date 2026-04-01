import React from 'react';
import './Skeleton.css';

export function Skeleton({ width, height, radius = 'md', className = '' }) {
  const style = {
    width: width || '100%',
    height: height || '1em',
    borderRadius: `var(--radius-${radius})`
  };
  return <div className={`skeleton ${className}`} style={style} />;
}

export function SkeletonText({ lines = 3, width = '100%', gap = 'var(--space-2)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          width={i === lines - 1 ? '70%' : width} 
          height="1em" 
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = '', hasImage = false }) {
  return (
    <div className={`card skeleton-card ${className}`}>
      {hasImage && <Skeleton height="150px" radius="lg" className="skeleton-card-img" />}
      <div className="skeleton-card-content" style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Skeleton width="40%" height="1.5em" />
        <SkeletonText lines={2} />
        <Skeleton width="100px" height="2rem" radius="full" />
      </div>
    </div>
  );
}
