'use client';

import { useEffect, useRef, useState } from 'react';

const DinoGame = () => {
  const backQuestions = [
    {
      text: "¿Qué efecto puede tener una intervención excesiva en un sistema lento según el arquetipo 'Compensación entre Proceso y Demora'?",
      options: ["Produce estabilidad", "Genera inestabilidad", "Mejora la rapidez", "Elimina la demora"],
      correctAnswer: "Genera inestabilidad",
    },
    {
      text: "¿Qué representa el 'límite' en el arquetipo 'Límites del Crecimiento'?",
      options: ["Una restricción de recursos", "Un aumento en la demanda", "Una ventaja competitiva", "Un cambio en el mercado"],
      correctAnswer: "Una restricción de recursos",
    },
    {
      text: "¿Qué sucede cuando se usa una solución de corto plazo en el arquetipo 'Desplazamiento de la Carga'?",
      options: ["El problema se resuelve permanentemente", "La dependencia de la solución aumenta", "La solución fundamental mejora", "La carga se elimina"],
      correctAnswer: "La dependencia de la solución aumenta",
    },
    {
      text: "En el arquetipo 'Desplazamiento de la Carga hacia la Intervención', ¿qué es esencial para evitar la dependencia?",
      options: ["Intervención constante", "Capacitación interna", "Recursos externos ilimitados", "Incremento de la carga"],
      correctAnswer: "Capacitación interna",
    },
    {
      text: "¿Qué implica el arquetipo 'Erosión de Metas' para los objetivos a largo plazo?",
      options: ["Los mejora", "Los mantiene", "Los degrada", "Los elimina"],
      correctAnswer: "Los degrada",
    },
    {
      text: "¿Cómo se describe el ciclo competitivo en el arquetipo 'Escalada'?",
      options: ["Colaborativo", "Destructivo", "Inofensivo", "Eficiente"],
      correctAnswer: "Destructivo",
    },
    {
      text: "En el arquetipo 'Éxito para quien tiene Éxito', ¿qué ocurre cuando un grupo tiene éxito inicial?",
      options: ["Recibe menos apoyo", "Atrae más recursos", "Pierde importancia", "Mejora al grupo opuesto"],
      correctAnswer: "Atrae más recursos",
    },
    {
      text: "¿Cuál es un síntoma del arquetipo 'Tragedia del Terreno Común'?",
      options: ["Abundancia de recursos", "Uso sostenible del recurso", "Disminución del recurso compartido", "Mejor distribución del recurso"],
      correctAnswer: "Disminución del recurso compartido",
    },
    {
      text: "¿Qué tipo de soluciones genera problemas adicionales en el arquetipo 'Soluciones Rápidas que Fallan'?",
      options: ["Soluciones estructurales", "Soluciones de largo plazo", "Soluciones de corto plazo", "Soluciones fundamentadas"],
      correctAnswer: "Soluciones de corto plazo",
    },
    {
      text: "¿Qué ocurre cuando no se invierte en capacidad según el arquetipo 'Crecimiento y Subinversión'?",
      options: ["El crecimiento se detiene", "El crecimiento se acelera", "La capacidad aumenta", "La competencia desaparece"],
      correctAnswer: "El crecimiento se detiene",
    },
    {
      text: "En el arquetipo 'Compensación entre Proceso y Demora', ¿qué debe evitarse para mantener estabilidad?",
      options: ["Reacción lenta", "Acciones agresivas", "Medición de resultados", "Cambios menores"],
      correctAnswer: "Acciones agresivas",
    },
    {
      text: "¿Qué fase suele preceder a la desaceleración en el arquetipo 'Límites del Crecimiento'?",
      options: ["Fase de planificación", "Fase de estabilidad", "Fase de colapso", "Fase de crecimiento acelerado"],
      correctAnswer: "Fase de crecimiento acelerado",
    },
    {
      text: "En el arquetipo 'Desplazamiento de la Carga', ¿qué tipo de solución se usa comúnmente?",
      options: ["Solución estructural", "Solución temporal", "Solución permanente", "Solución educacional"],
      correctAnswer: "Solución temporal",
    },
    {
      text: "¿Qué indica el arquetipo 'Erosión de Metas' sobre los estándares durante una crisis?",
      options: ["Se elevan", "Se eliminan", "Se rebajan", "Se mantienen iguales"],
      correctAnswer: "Se rebajan",
    },
    {
      text: "¿Qué pueden hacer las partes en conflicto en el arquetipo 'Escalada' para evitar la destrucción mutua?",
      options: ["Escalar aún más", "Retirarse de la competencia", "Buscar soluciones de ganar-ganar", "Aumentar la agresividad"],
      correctAnswer: "Buscar soluciones de ganar-ganar",
    },
    {
      text: "¿Qué tipo de competencia se describe en 'Éxito para quien tiene Éxito'?",
      options: ["Competencia destructiva", "Competencia sostenible", "Competencia por recursos limitados", "Competencia saludable"],
      correctAnswer: "Competencia por recursos limitados",
    },
    {
      text: "¿Cuál es una causa común del agotamiento de recursos en 'Tragedia del Terreno Común'?",
      options: ["Uso consciente del recurso", "Consumo limitado", "Falta de regulación", "Redistribución del recurso"],
      correctAnswer: "Falta de regulación",
    },
    {
      text: "¿Qué sucede cuando se usa una solución rápida en 'Soluciones Rápidas que Fallan'?",
      options: ["El problema se agrava a largo plazo", "El problema se resuelve permanentemente", "La solución es definitiva", "Se mejora el problema"],
      correctAnswer: "El problema se agrava a largo plazo",
    },
    {
      text: "¿Qué se requiere para mantener el crecimiento en 'Crecimiento y Subinversión'?",
      options: ["Limitar la inversión", "Incrementar la competencia", "Invertir en capacidad anticipadamente", "Disminuir la demanda"],
      correctAnswer: "Invertir en capacidad anticipadamente",
    },
    {
      text: "En el arquetipo 'Compensación entre Proceso y Demora', ¿cuál es un ejemplo de sistema que reacciona lentamente?",
      options: ["El mercado bursátil", "Un sistema de retroalimentación instantánea", "El clima", "Un grifo de agua caliente con demora"],
      correctAnswer: "Un grifo de agua caliente con demora",
    },
  ];
  

  const [isPlaying, setIsPlaying] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(backQuestions);

  const [currentQuestion, setCurrentQuestion] = useState(null);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Cargar imágenes
    const dinoImg = new Image();
    const cactusImg = new Image();

    dinoImg.src = '/dinosaur_sprite.png'; // Ruta a tu imagen de dinosaurio
    cactusImg.src = '/cactu.png'; // Ruta a tu imagen de cactus

    // Variables del juego
    let dino = { x: 50, y: 150, width: 50, height: 50, vy: 0, gravity: 1 };
    let cactus = { x: 300, y: 150, width: 50, height: 50 };
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

    const handleCanvasClick = () => {
      jump();
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleCanvasClick);

    // Ciclo del juego
    const gameLoop = () => {
      if (gameOver) {
        setIsPlaying(false);
        if (questions.length > 0) {
          const randomIndex = Math.floor(Math.random() * questions.length);
          setCurrentQuestion(questions[randomIndex]);
          setQuestions(questions.filter((_, index) => index !== randomIndex));
          setShowQuestion(true);
        } else {
          setShowQuestion(false);
          setIsPlaying(false);
        }
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

      // Dibujar dinosaurio y cactus con imágenes
      ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
      ctx.drawImage(cactusImg, cactus.x, cactus.y, cactus.width, cactus.height);

      requestAnimationFrame(gameLoop);
    };

    // Asegurarse de que las imágenes estén cargadas antes de iniciar el juego
    dinoImg.onload = () => {
      cactusImg.onload = () => {
        gameLoop();
      };
    };

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [isPlaying, questions]);

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setIsPlaying(true);
      setShowQuestion(false);
    } else {
      alert("¡Juego Terminado!");
      setIsPlaying(false);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setIsPlaying(true);
    setShowQuestion(false);
    setQuestions(backQuestions);
  };

  return (
    <div className='container'>
      <h1 className='fw-bolder'>¡Esquiva los obstáculos!</h1>
      <p>Pica dentro del espacio del juego, o usa la barra de espacio para saltar</p>
      <canvas ref={canvasRef} width={400} height={200} />
      <div>
        <p className='badge text-bg-info'>Puntuación: {score}</p>
      </div>

      {showQuestion ? (
        currentQuestion ? (
          <div>
            <h2>{currentQuestion.text}</h2>
            <div className='d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xl-start'>
              {currentQuestion.options.map((option, index) => (
                <button className='btn btn-primary col mt-4' key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2>¡Ya no hay más preguntas!</h2>
            <button className='btn btn-success' onClick={handleRestart}>
              Reiniciar el juego
            </button>
          </div>
        )
      ) : null}
    </div>
  );
};

export default DinoGame;