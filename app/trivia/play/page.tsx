"use client";

import { useSearchParams } from "next/navigation";
import { QuestionsAndAnswers } from "../questions-and-answers";
import { TTrivia } from "../utils";
import { useEffect, useState } from "react";

export default function PlayingTrivia() {
  const [data, setData] = useState<TTrivia[] | null>(null);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const { results } = await response.json();
      setData(results);
    };

    if (category && difficulty) {
      fetchData();
    }
  }, [category, difficulty]);
  return (
    <div>{data?.length ? <QuestionsAndAnswers questions={data} /> : null}</div>
  );
}
