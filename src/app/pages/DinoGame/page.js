
"use client"

import { useEffect, useRef, useState } from 'react';

const DinoGame = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const canvasRef = useRef(null);

  const question = {
    text: "¿Cuál es la capital de Francia?",
    options: ["París", "Londres", "Madrid", "Berlín"],
    correctAnswer: "París",
  };

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Variables del juego
    let dino = { x: 50, y: 150, width: 50, height: 50, vy: 0, gravity: 2 };
    let cactus = { x: 300, y: 150, width: 20, height: 50 };
    let isJumping = false;
    let gameOver = false;

    // Manejo de salto
    const jump = () => {
      if (!isJumping) {
        dino.vy = -20;
        isJumping = true;
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === ' ') {
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Ciclo del juego
    const gameLoop = () => {
      if (gameOver) {
        setIsPlaying(false);
        setShowQuestion(true);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Movimiento del dinosaurio
      dino.y += dino.vy;
      dino.vy += dino.gravity;

      if (dino.y > 150) {
        dino.y = 150;
        isJumping = false;
      }

      // Movimiento del cactus
      cactus.x -= 5;
      if (cactus.x < -cactus.width) {
        cactus.x = canvas.width;
        setScore((prevScore) => prevScore + 1);
      }

      // Detección de colisiones
      if (
        dino.x < cactus.x + cactus.width &&
        dino.x + dino.width > cactus.x &&
        dino.y < cactus.y + cactus.height &&
        dino.y + dino.height > cactus.y
      ) {
        gameOver = true;
      }

      // Dibujar dinosaurio y cactus
      ctx.fillStyle = 'green';
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
      ctx.fillStyle = 'brown';
      ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying]);

  const handleAnswer = (answer) => {
    if (answer === question.correctAnswer) {
      setIsPlaying(true);
      setShowQuestion(false);
    } else {
      alert("¡Juego Terminado!");
    }
  };

  return (
    <div>
      <h1>Juego del Dinosaurio</h1>
      <canvas ref={canvasRef} width={400} height={200} style={{ border: '1px solid black' }} />
      <p>Puntuación: {score}</p>

      {showQuestion && (
        <div>
          <h2>{question.text}</h2>
          <div>
            {question.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DinoGame;
