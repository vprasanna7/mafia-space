// src/GameStats.js

import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const GameStats = () => {
  const { players } = useContext(GameContext);

  const totalPlayerCount = players.length;
  const mafiaCount = players.filter(player => player.role.toLowerCase().includes('mafia')).length;
  const villagerCount = totalPlayerCount - mafiaCount;

  return (
    <div>
      <p>Total Players: {totalPlayerCount}</p>
      <p>Mafia Count: {mafiaCount}</p>
      <p>Villager Count: {villagerCount}</p>
    </div>
  );
};

export default GameStats;
