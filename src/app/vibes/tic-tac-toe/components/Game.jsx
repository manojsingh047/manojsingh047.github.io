'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Board from './Board';
import '../tictactoe.css';
import { calculateWinner, getComputerMove } from '../utils/gameLogic';
import { startListening, speak } from '../utils/voiceUtils';
import { playClickSound, playWinSound } from '../utils/soundUtils';
import confetti from 'canvas-confetti';

import { Mic, MicOff, RefreshCw, User, Cpu } from 'lucide-react';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameMode, setGameMode] = useState('pvc'); // 'pvp' or 'pvc'
  const [difficulty, setDifficulty] = useState('Hard'); // 'Easy', 'Medium', 'Hard'
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState(null);
  const [voiceRecognition, setVoiceRecognition] = useState(null);

  const winInfo = calculateWinner(squares);
  const winner = winInfo ? winInfo.winner : null;
  const isDraw = !winner && !squares.includes(null);
  const currentPlayer = xIsNext ? 'X' : 'O';

  // Handle move
  const handleMove = useCallback((i) => {
    if (squares[i] || winner) {
      if (squares[i]) speak("Invalid move. That square is occupied.");
      else speak("Game is over.");
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    playClickSound(); // Play pop sound on move
  }, [squares, xIsNext, winner]);

  // AI Turn
  useEffect(() => {
    if (gameMode === 'pvc' && !xIsNext && !winner && !isDraw) {
      // Small delay for natural feel
      const timer = setTimeout(() => {
        const move = getComputerMove(squares, difficulty);
        if (move) {
          handleMove(move.index);
        }
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [xIsNext, gameMode, winner, isDraw, squares, handleMove, difficulty]);

  // Announce Winner or Draw
  useEffect(() => {
    if (winner) {
      speak(`Player ${winner} wins!`);
      playWinSound();
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else if (isDraw) {
      speak("It's a draw!");
    }
  }, [winner, isDraw]);

  // Voice Command Processing
  const processVoiceCommand = useCallback((command) => {
    // Clean up the command: remove punctuation and whitespace
    const cmd = command.toLowerCase().replace(/[.,!]/g, '').trim();
    const map = {
      'top left': 0,
      'top center': 1,
      'top centre': 1,
      'top middle': 1,
      'top right': 2,
      'center left': 3,
      'centre left': 3,
      'middle left': 3,
      'center': 4,
      'centre': 4,
      'middle': 4,
      'center right': 5,
      'centre right': 5,
      'middle right': 5,
      'bottom left': 6,
      'bottom center': 7,
      'bottom centre': 7,
      'bottom middle': 7,
      'bottom right': 8,
      'reset': 'reset',
      'restart': 'reset',
      'new game': 'reset'
    };
    console.log("Voice recognized:", cmd, map, map[cmd]);
    setLastCommand(cmd); // Update visualizer

    if (map[cmd] !== undefined) {
      if (map[cmd] === 'reset') {
        resetGame();
        speak("Game reset.");
      } else {
        handleMove(map[cmd]);
      }
    } else {
      console.log("Command not understood:", cmd);
      speak("I didn't understand " + cmd);
    }
  }, [handleMove]);

  // Keep latest processVoiceCommand in ref to avoid stale closures in voice callback
  const processCommandRef = useRef(processVoiceCommand);
  useEffect(() => {
    processCommandRef.current = processVoiceCommand;
  }, [processVoiceCommand]);

  // Toggle Voice
  const toggleVoice = () => {
    if (isListening) {
      if (voiceRecognition) voiceRecognition.stop();
      setIsListening(false);
      setVoiceRecognition(null);
    } else {
      const recognition = startListening((text) => {
        if (processCommandRef.current) {
          processCommandRef.current(text);
        }
      });
      if (recognition) {
        setIsListening(true);
        setVoiceRecognition(recognition);
        recognition.onend = () => {
          // If continuous, it shouldn't end often, but if it does, update UI
          console.log("Voice recognition ended");
          setIsListening(false);
        };
      }
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const currentStatus = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "It's a Draw!"
      : `${currentPlayer}'s Turn`;

  return (
    <div className="game-container">
      <div className="status-bar" style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
        {currentStatus}
      </div>

      <Board
        squares={squares}
        onSquareClick={handleMove}
        winningLine={winInfo ? winInfo.line : null}
      />

      <div className="controls" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <button
          onClick={() => setGameMode(gameMode === 'pvp' ? 'pvc' : 'pvp')}
          title="Switch Game Mode"
        >
          {gameMode === 'pvp' ? <User size={20} /> : <Cpu size={20} />}
          <span style={{ marginLeft: '8px' }}>
            {gameMode === 'pvp' ? 'PvP' : 'PvC'}
          </span>
        </button>

        {gameMode === 'pvc' && (
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{
              padding: '0.6em 1.2em',
              fontSize: '1em',
              borderRadius: '8px',
              border: '1px solid transparent',
              backgroundColor: '#1e293b',
              color: 'white',
              fontFamily: 'inherit',
              cursor: 'pointer',
              fontWeight: 500,
              appearance: 'none', // Remove default arrow in some browsers for cleaner look
              backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.7em top 50%',
              backgroundSize: '0.65em auto',
              paddingRight: '2em' // Space for arrow
            }}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        )}

        <button
          onClick={resetGame}
          title="Reset Game"
        >
          <RefreshCw size={20} />
        </button>

        <button
          onClick={toggleVoice}
          className={isListening ? 'mic-active' : ''}
          title="Toggle Voice Control"
        >
          {isListening ? <Mic size={20} /> : <MicOff size={20} />}
        </button>
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8', minHeight: '1.5em' }}>
        {isListening ? (
          lastCommand ? (
            <span key={lastCommand} className="animate-pop" style={{ color: '#a855f7', fontWeight: 'bold' }}>
              " {lastCommand} "
            </span>
          ) : (
            <p>Listening... Say "top left", "center", etc.</p>
          )
        ) : (
          <p>Voice control inactive</p>
        )}
      </div>
    </div>
  );
};

export default Game;
