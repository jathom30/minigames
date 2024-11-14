import { QuestionsAndAnswers } from "./questions-and-answers";
import { TTrivia } from "./utils";

export default async function Trivia() {
  const data = await fetch(
    "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple"
  );
  const { results } = (await data.json()) as { results: TTrivia[] };
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Trivia
      </h1>
      {results?.length ? <QuestionsAndAnswers questions={results} /> : null}
    </div>
  );
}
