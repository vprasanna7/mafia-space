// src/PlayerForm.js

import React, { useState, useContext } from 'react';
import { GameContext } from './GameContext';

const PlayerForm = () => {
  const { addPlayer, roles } = useContext(GameContext);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Villager');

  const handleNameChange = (e) => setName(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addPlayer({ name, role });
      setName('');
      setRole('Villager');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Enter player's name"
      />
      <select value={role} onChange={handleRoleChange}>
        {roles.map((role, index) => (
          <option key={index} value={role}>{role}</option>
        ))}
      </select>
      <button type="submit">Add Player</button>
    </form>
  );
};

export default PlayerForm;
