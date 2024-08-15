'use client';

import { useEffect, useRef, useState } from 'react';

const DinoGame = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([
    {
      text: "¿Qué es lo más importante para alcanzar el éxito según Yokoi Kenji?",
      options: ["Disciplina", "Suerte", "Conexiones", "Dinero"],
      correctAnswer: "Disciplina",
    },
    {
      text: "¿Qué mito sobre Japón desmiente Yokoi Kenji?",
      options: ["Que todos son ricos", "Que todos practican artes marciales", "Que todos son buenos en matemáticas", "Que no hay delincuencia"],
      correctAnswer: "Que no hay delincuencia",
    },
    {
      text: "Según Carlos Kasuga, ¿cuál es la clave para la calidad de vida?",
      options: ["Ahorro", "Disciplina", "Educación", "Trabajo en equipo"],
      correctAnswer: "Educación",
    },
    {
      text: "¿Qué aspecto cultural japonés destaca Carlos Kasuga?",
      options: ["Respeto", "Tecnología", "Moda", "Arte"],
      correctAnswer: "Respeto",
    },
    {
      text: "¿Qué representa la disciplina para Yokoi Kenji?",
      options: ["Cumplir reglas estrictas", "Un compromiso constante", "Evitar errores", "Seguir órdenes"],
      correctAnswer: "Un compromiso constante",
    },
    {
      text: "¿Cuál es una creencia errónea sobre Japón mencionada por Yokoi Kenji?",
      options: ["Que todos son inteligentes", "Que todos son felices", "Que todos son trabajadores", "Que todos son ricos"],
      correctAnswer: "Que todos son felices",
    },
    {
      text: "Según Carlos Kasuga, ¿qué deben aprender los países latinoamericanos de Japón?",
      options: ["La puntualidad", "La tecnología", "La moda", "El idioma"],
      correctAnswer: "La puntualidad",
    },
    {
      text: "¿Qué sugiere Carlos Kasuga para mejorar la calidad de vida?",
      options: ["Mejorar la educación", "Trabajar más horas", "Invertir en tecnología", "Aumentar la producción"],
      correctAnswer: "Mejorar la educación",
    },
    {
      text: "¿Qué elemento considera esencial Yokoi Kenji para el progreso personal?",
      options: ["Motivación", "Disciplina", "Suerte", "Oportunidades"],
      correctAnswer: "Disciplina",
    },
    {
      text: "¿Qué mito cultural sobre Japón se menciona en la conferencia de Yokoi Kenji?",
      options: ["Que no hay pobreza", "Que no hay desigualdad", "Que no hay corrupción", "Que no hay crimen"],
      correctAnswer: "Que no hay crimen",
    },
    {
      text: "¿Qué valor promueve Carlos Kasuga como fundamental?",
      options: ["Honestidad", "Éxito", "Popularidad", "Riqueza"],
      correctAnswer: "Honestidad",
    },
    {
      text: "¿Qué destaca Yokoi Kenji sobre el esfuerzo en Japón?",
      options: ["Es constante", "Es intermitente", "Es solo en el trabajo", "Es en la escuela"],
      correctAnswer: "Es constante",
    },
    {
      text: "¿Qué recomienda Carlos Kasuga para una vida equilibrada?",
      options: ["Ahorrar", "Comer bien", "Descansar", "Trabajar mucho"],
      correctAnswer: "Comer bien",
    },
    {
      text: "¿Cuál es una de las claves del éxito según Yokoi Kenji?",
      options: ["Tener suerte", "Trabajar duro", "Conocer a las personas adecuadas", "Viajar mucho"],
      correctAnswer: "Trabajar duro",
    },
    {
      text: "¿Qué práctica japonesa admira Carlos Kasuga?",
      options: ["La meditación", "La puntualidad", "La tecnología", "El sushi"],
      correctAnswer: "La puntualidad",
    },
    {
      text: "¿Qué concepto promueve Yokoi Kenji como esencial para la vida?",
      options: ["Disciplina", "Suerte", "Fortuna", "Conexiones"],
      correctAnswer: "Disciplina",
    },
    {
      text: "¿Qué valor considera Carlos Kasuga indispensable para el progreso?",
      options: ["Respeto", "Ambición", "Fuerza", "Popularidad"],
      correctAnswer: "Respeto",
    },
    {
      text: "¿Qué mito cultural sobre Japón menciona Yokoi Kenji?",
      options: ["Que todos son trabajadores", "Que todos son ricos", "Que todos son disciplinados", "Que todos son amables"],
      correctAnswer: "Que todos son ricos",
    },
    {
      text: "¿Qué acción considera Carlos Kasuga clave para la mejora continua?",
      options: ["Educarse", "Trabajar duro", "Ahorrar", "Innovar"],
      correctAnswer: "Educarse",
    },
    {
      text: "¿Qué mito sobre Japón menciona Yokoi Kenji?",
      options: ["Que todos son ricos", "Que todos son educados", "Que todos son saludables", "Que todos son pacíficos"],
      correctAnswer: "Que todos son ricos",
    },
  ]);

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
  }, [isPlaying]);

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
    setQuestions([
      // Repopulate the questions array with the original 20 questions
      // (use the same list of questions from above)
    ]);
  };

  return (
    <div className='container'>
      <h1 className='fw-bolder'>¡Esquiva los obstáculos!</h1>
      <p>Pica dentro del espacio del juego, o usa la barra de espacio para saltar</p>
      <canvas ref={canvasRef} width={400} height={200} style={{ border: '1px solid black' }} />
      <p>Puntuación: {score}</p>

      {showQuestion ? (
        currentQuestion ? (
          <div>
            <h2>{currentQuestion.text}</h2>
            <div className='row gx-5 row-cols-1 row-cols-md-2 justify-content-between'>
              {currentQuestion.options.map((option, index) => (
                <button className='btn btn-primary col mb-5 h-100' key={index} onClick={() => handleAnswer(option)}>
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