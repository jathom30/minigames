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

export default function CardMemory() {
  const highScore = 0;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rules</CardTitle>
        <CardDescription>Card Memory is a card game</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Flip over two cards at a time to find a match. The less mistakes you
          make, the higher your score!
        </p>
        <p>
          Your current high score is <b>{highScore}</b>! Think you can beat it?
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/card-memory/play">Start Game</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
