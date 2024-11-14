"use client";
import { useState } from "react";
import { TTrivia } from "./utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const QuestionsAndAnswers = ({
  questions,
}: {
  questions: TTrivia[];
}) => {
  const [gameState, setGameState] = useState<"playing" | "finished">("playing");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctIndexes, setCorrectIndexes] = useState<number[]>([]);
  const question = questions[questionIndex];
  const answers = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5
  );
  const maxQuestions = questions.length;

  const handleAnswer = (answer: string) => {
    // if correct answer, move to next question
    setQuestionIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex === maxQuestions) {
        setGameState("finished");
        return prev;
      }
      return newIndex;
    });
    if (answer === question.correct_answer) {
      setCorrectIndexes((prev) => [...prev, questionIndex]);
      return;
    }
  };

  if (gameState === "finished") {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Trivia Complete!</CardTitle>
          <CardDescription>
            You got {correctIndexes.length} out of {maxQuestions} correct!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => {
              setQuestionIndex(0);
              setCorrectIndexes([]);
              setGameState("playing");
            }}
          >
            Play Again
          </Button>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="space-y-2">
      <Card>
        <CardHeader>
          <CardTitle>
            Question {questionIndex + 1} of {maxQuestions}
          </CardTitle>
          <CardDescription>
            {correctIndexes.length} correct answers so far
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h2 className="text-lg font-semibold">{question.question}</h2>
          <div className="flex flex-col gap-2">
            {answers.map((answer) => (
              <Button
                key={answer}
                variant="outline"
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
