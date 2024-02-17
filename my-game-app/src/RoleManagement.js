// src/RoleManagement.js

import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const RoleManagement = () => {
  const { shuffleRoles, clearAll } = useContext(GameContext);

  return (
    <div>
      <button onClick={shuffleRoles}>Shuffle Roles</button>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default RoleManagement;
