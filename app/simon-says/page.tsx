"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SimonSays() {
  const [highScore, setHighScore] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running on the client-side
      const storedValue = localStorage.getItem("highScore-simon");
      if (storedValue) {
        setHighScore(storedValue);
      }
    }
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rules</CardTitle>
        <CardDescription>Simon Says is a memory game</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Follow the patterns Simon creates. If you mess up, you start back at
          zero. So pay attention!
        </p>
        {highScore ? (
          <p>
            Your current high score is <b>{highScore}</b>! Think you can beat
            it?
          </p>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/simon-says/play">Start Game</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
