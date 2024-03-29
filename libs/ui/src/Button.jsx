import React from 'react';

export function Button({ children, type }) {
  const isOutline = type === 'outline';
  return (
    <button
      style={{
        backgroundColor: isOutline ? 'transparent' : '#007BFF',
        color: isOutline ? '#007BFF' : 'white',
        padding: '10px 20px',
        border: isOutline ? '1px solid #007BFF' : 'none',
        borderRadius: '4px',
        fontSize: '15px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
