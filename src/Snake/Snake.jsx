import React, { useEffect, useState } from 'react';
import './Snake.css';

export default function Snake() {
  // Define the matrix representing the grid colors
  const initialColorsMatrix = [
    ["secondary", "secondary", "secondary", "secondary"],
    ["secondary", "secondary", "secondary", "secondary"],
    ["secondary", "secondary", "secondary", "secondary"],
    ["secondary", "secondary", "secondary", "secondary"]
  ];

  // Define the initial state for whether each box is activated
  const initialActivatedStatus = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ];

  // State variables
  const [activatedStatus, setActivatedStatus] = useState(initialActivatedStatus);
  const [position, setPosition] = useState({ row: 0, col: 0 });
  const [visitedBoxes, setVisitedBoxes] = useState([]);

  // Handle keyboard input
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

  // Update activated status when a box is visited
  useEffect(() => {
    const updateVisitedBoxes = (row, col) => {
      const boxIndex = `${row}-${col}`;
      if (!visitedBoxes.includes(boxIndex)) {
        // Update visited boxes
        setVisitedBoxes((prevVisited) => [...prevVisited, boxIndex]);
        // Update activated status
        const updatedActivatedStatus = [...activatedStatus];
        updatedActivatedStatus[row][col] = true;
        setActivatedStatus(updatedActivatedStatus);
      }
    };

    updateVisitedBoxes(position.row, position.col);
  }, [position, visitedBoxes, activatedStatus]);

  return (
    // Render the grid
    <div className="d-flex flex-row justify-content-center align-items-center text-center vh-100 v-100 w-100 SnakeDiv">
      <div className="d-flex flex-wrap w-25 h-50 bg-secondary main-box">
        <div className="row row-cols-4 no-gutters">
          {initialColorsMatrix.map((row, rowIndex) => (
            row.map((color, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`col bg-${activatedStatus[rowIndex][colIndex] ? 'success' : 'secondary'} 
                ${position.row === rowIndex && position.col === colIndex ? 'selected' : 'not-selected'}`}
              >
                {/* Display content */}
                <span style={{ color: activatedStatus[rowIndex][colIndex] ? 'black' : 'white' }}>
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
