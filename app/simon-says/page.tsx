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

export default function SimonSays() {
  const highScore = localStorage.getItem("highScore") || 0;
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
        <p>
          Your current high score is <b>{highScore}</b>! Think you can beat it?
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/simon-says/play">Start Game</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
