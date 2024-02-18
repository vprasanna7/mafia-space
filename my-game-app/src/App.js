// src/App.js

import React, { useState } from 'react';
import { GameProvider } from './GameContext';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';
import RoleManagement from './RoleManagement';
import GameStats from './GameStats';
import Gameplay from './Gameplay'; // Make sure to create this component

const App = () => {
  const [isGameplay, setIsGameplay] = useState(false); // State to toggle views

  const startGame = () => {
    setIsGameplay(true); // Change view to gameplay when Start Game is clicked
  };

  const goToSetup = () => {
    setIsGameplay(false); // Optional: Button in Gameplay to return to setup
  };

  return (
    <GameProvider>
      <div className="App">
        {isGameplay ? (
          <Gameplay goBackToSetup={goToSetup} />
        ) : (
          <>
            <h1>Game Setup</h1>
            <PlayerForm />
            <PlayerList />
            <RoleManagement />
            <GameStats />
            <button className="start-game-button" onClick={startGame}>Start Game</button>
          </>
        )}
      </div>
      <style jsx>{`
       .start-game-button {
        background-color: #007bff; /* Blue color for the button */
        color: white; /* White text color */
        padding: 15px 30px;
        border: none;
        border-radius: 5px;
        font-size: 1.2em;
        cursor: pointer;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease;
        margin: 20px auto; /* Top and bottom margins are 20px, and left/right are auto to center */
        display: block; /* Needed to allow margin auto to center the button */
      }
      
      `}</style>
        
        
    </GameProvider>
  );
};

export default App;
