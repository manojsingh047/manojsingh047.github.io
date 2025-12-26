import React, { useRef, useEffect, useState } from 'react';
import Square from './Square';

const Board = ({ squares, onSquareClick, winningLine }) => {
  const containerRef = useRef(null);
  const [boardDimensions, setBoardDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setBoardDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        isWinningSquare={winningLine && winningLine.includes(i)}
      />
    );
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: 'fit-content', margin: '2rem auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        maxWidth: '340px'
      }}>
        {squares.map((_, i) => renderSquare(i))}
      </div>
    </div>
  );
};

export default Board;
