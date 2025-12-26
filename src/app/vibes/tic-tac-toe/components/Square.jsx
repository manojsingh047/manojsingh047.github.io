import React from 'react';

const Square = ({ value, onClick, isWinningSquare, disabled }) => {
  const getStyle = () => {
    let style = {
      width: '100px',
      height: '100px',
      fontSize: '3rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1e293b',
      border: '2px solid #334155',
      borderRadius: '12px',
      cursor: disabled || value ? 'default' : 'pointer',
      color: value === 'X' ? 'var(--x-color)' : 'var(--o-color)',
      transition: 'all 0.2s ease',
      position: 'relative',
      overflow: 'hidden',
    };

    if (isWinningSquare) {
      style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
      style.borderColor = '#6366f1';
      style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.3)';
    }

    if (!value && !disabled) {
       // Hover effect handled via CSS class in parent or external stylesheet usually, 
       // but inline styles for simplicity here alongside JS logic
    }
    
    return style;
  };

  return (
    <button
      className={`square ${value ? 'animate-pop' : ''} ${isWinningSquare ? 'winning-square' : ''}`}
      style={getStyle()}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled && !value) e.currentTarget.style.backgroundColor = '#334155';
      }}
      onMouseLeave={(e) => {
        if (!disabled && !value && !isWinningSquare) e.currentTarget.style.backgroundColor = '#1e293b';
      }}
    >
      {value}
    </button>
  );
};

export default Square;
