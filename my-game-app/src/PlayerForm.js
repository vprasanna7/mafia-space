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
    <div className="player-form-container">
      <form onSubmit={handleSubmit} className="player-form">
        <input 
          type="text" 
          value={name} 
          onChange={handleNameChange} 
          placeholder="Enter player's name"
          className="player-input"
        />
        <select value={role} onChange={handleRoleChange} className="player-select">
          {roles.map((role, index) => (
            <option key={index} value={role}>{role}</option>
          ))}
        </select>
        <button type="submit" className="submit-button">Add Player</button>
      </form>

      <style jsx>{`
        .player-form-container {
          max-width: 500px;
          margin: 20px auto;
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .player-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .player-input, .player-select {
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .submit-button {
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .submit-button:hover {
          background-color: #0056b3;
        }
      `}</style>
      
    </div>
  );
};

export default PlayerForm;
