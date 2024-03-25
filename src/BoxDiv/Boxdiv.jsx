import React, { useEffect, useState } from 'react';
import './BoxDiv.css'

export default function Boxdiv() {
  const colorsMatrix = [
    ["secondary", "secondary", "secondary", "secondary"],
    ["secondary", "secondary", "secondary", "secondary"],
    ["secondary", "secondary", "secondary", "secondary"],
    ["secondary", "secondary", "secondary", "secondary"]
  ];

  const [position, setPosition] = useState({ row: 0, col: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setPosition((prevPosition) => ({ row: (prevPosition.row + 3) % 4, col: prevPosition.col }));
          break;
        case 'ArrowDown':
          setPosition((prevPosition) => ({ row: (prevPosition.row + 1) % 4, col: prevPosition.col }));
          break;
        case 'ArrowLeft':
          setPosition((prevPosition) => ({ row: prevPosition.row, col: (prevPosition.col + 3) % 4 }));
          break;
        case 'ArrowRight':
          setPosition((prevPosition) => ({ row: prevPosition.row, col: (prevPosition.col + 1) % 4 }));
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="d-flex flex-row justify-content-center align-items-center text-center vh-100 v-100 w-100 BoxDiv">
      <div className="d-flex flex-wrap w-25 h-50 bg-secondary main-box">
        <div className="row row-cols-4 no-gutters">
          {colorsMatrix.map((row, rowIndex) => (
            row.map((color, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`col bg-${position.row === rowIndex && position.col === colIndex ? 'secondary-subtle' : color} 
                ${position.row === rowIndex && position.col === colIndex ? 'selected' : 'not-selected'}`}>
                <span style={{ color: (position.row === rowIndex && position.col === colIndex) ? 'black' : 'white' }}>
                  boo
                </span>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}
