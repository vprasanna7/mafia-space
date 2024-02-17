// src/Gameplay.js

import React, { useContext, useState } from 'react';
import { GameContext } from './GameContext';

const Gameplay = ({ goBackToSetup }) => {
  const { players, eliminatePlayer, voteCounts, recordVote } = useContext(GameContext);
  const [votes, setVotes] = useState({});
  const [round, setRound] = useState(1);

  const handleVote = (voter, votedAgainst) => {
    setVotes(prevVotes => ({ ...prevVotes, [voter]: votedAgainst }));
    recordVote(voter, votedAgainst);
  };

  const isVoted = (voter, candidate) => {
    return votes[voter] === candidate;
  };

  const displayVotingResults = () => {
    return Object.entries(voteCounts).map(([player, info]) => (
      <p key={player}>
        {player} has been voted by {info.voters.join(", ")} (Total Votes: {info.totalVotes})
      </p>
    ));
  };

  const countAlivePlayersByRole = (role) => {
    return players.filter(player => {
      const isMafia = role === 'Mafia' && player.role.includes('Mafia');
      const isVillager = role === 'Villager' && !player.role.includes('Mafia');
      return (isMafia || isVillager) && !player.eliminated;
    }).length;
  };

  const goToSecondRound = () => {
    if (round === 1) {
      setRound(2);
    }
  };

  const initiateNextRound = () => {
    setVotes({});
    setRound(1);
  };

  const votedButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white'
  };

  return (
    <div>
      <h2>Gameplay - Round {round}</h2>
      {players.map((player) => (
        <div key={player.name} className={`player ${player.eliminated ? 'eliminated' : ''}`}>
          <p>{player.name} - {player.role}</p>
          {!player.eliminated && (
            <div className="votingButtons">
              {players.filter(p => p.name !== player.name).map((p) => (
                <button key={p.name} 
                        onClick={() => handleVote(player.name, p.name)}
                        disabled={player.eliminated}
                        style={isVoted(player.name, p.name) ? votedButtonStyle : null}>
                  Vote {p.name}
                </button>
              ))}
            </div>
          )}
          {!player.eliminated && (
            <div className="eliminationMethods">
              <button onClick={() => eliminatePlayer(player.name, 'Mafia')}>Killed by Mafia</button>
              <button onClick={() => eliminatePlayer(player.name, 'Vote')}>Voted Out</button>
              <button onClick={() => eliminatePlayer(player.name, 'Assassin')}>Killed by Assassin</button>
            </div>
          )}
        </div>
      ))}
      {round === 1 && <button onClick={goToSecondRound}>Go to Second Round</button>}
      <button onClick={initiateNextRound}>Go Next Round</button>
      <button onClick={goBackToSetup}>Back to Setup</button>
      <div>{displayVotingResults()}</div>
      <p>Mafia Count: {countAlivePlayersByRole('Mafia')}</p>
      <p>Villager Count: {countAlivePlayersByRole('Villager')}</p>
      {/* Include any additional styles you previously had here */}
    </div>
  );
};

export default Gameplay;
