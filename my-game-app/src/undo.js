// src/Undo.js

import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const Undo = () => {
  const { undoLastAction } = useContext(GameContext);

  return (
    <button onClick={undoLastAction}>Undo Last Action</button>
  );
};

export default Undo;
