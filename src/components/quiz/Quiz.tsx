import React, { useState } from "react";
import { Question } from "./Question";
import { Results } from "./Result";
import "./css/Quiz.css";


const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];

export function Quiz() {
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentOption, setCurrentOption] = useState<number>(-1)
  const [answers, setAnswers] = useState<number[]>([])

  function confirm(isCorrect: boolean) {
    if(isCorrect){
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setCurrentOption(-1)
    }
    else {
      setShowResults(true)
    }
  }

  function select(optionIndex: number) {
    setCurrentOption(optionIndex)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  function reset() {
    setCurrentOption(-1)
    setCurrentQuestion(0)
    setShowResults(false)
    setScore(0)
  }

  const questionMode = (
    <div>
      <div className="questionPane">
        <div className="questionNumber">
          Questão {currentQuestion + 1} de {questions.length}
        </div>
        <Question
          statement={questions[currentQuestion].questionText}
          options={questions[currentQuestion].answerOptions.map((answerOption) => answerOption.answerText)}
          onSelection={select}
          selected={currentOption}
        />
      </div>
      <button 
        onClick={ () => confirm(questions[currentQuestion].answerOptions[currentOption].isCorrect)}
        disabled={ currentOption === -1 }
        >Confirma resposta</button>
    </div>
  )

  const resultStatements = questions.map(question => question.questionText)
  const resultsAnswers = answers.map((optionIndex, questionIndex) => questions[questionIndex].answerOptions[optionIndex].answerText)
  const resultMode = (
    <div>
      <div className="questionPane">
        <Results statements={resultStatements} answers={resultsAnswers} />
        <div>
					Pontuação {score} de {questions.length}
				</div>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  )

  return (
    <div className="quizPane">
      {showResults ? resultMode : questionMode}
    </div>
  )
}