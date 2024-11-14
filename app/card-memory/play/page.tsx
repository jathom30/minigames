"use client";

import { useMemo, useState } from "react";
import { createRandomSequence, icons, TIcon } from "../utils";
import { MemoryCardButton } from "../memory-card-button";
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

export default function CardMemoryPlay() {
  const [turns, setTurns] = useState(0);
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);
  const [foundPairIds, setFoundPairIds] = useState<string[]>([]);
  const [seed, setSeed] = useState(0);
  const iconPairs = useMemo(() => createRandomSequence(icons), [seed]);
  const winner = icons.length === foundPairIds.length;

  const handleCardClick = (cardId: string) => {
    const pair = selectedCardIds.concat(cardId);
    const cleanKeys = pair.map((id) => id.split("-")[0]);
    if (pair.length > 2) return;
    setSelectedCardIds(pair);
    if (pair.length === 2) {
      setTurns((prev) => prev + 1);
    }
    // if match, add to found pairs
    if (cleanKeys[0] === cleanKeys[1]) {
      setFoundPairIds((prev) => prev.concat(cleanKeys[0]));
      setSelectedCardIds([]);
      return;
    }
    if (pair.length === 2) {
      // if not a match, reset selected cards
      setTimeout(() => setSelectedCardIds([]), 500);
    }
  };

  const handleReset = () => {
    setSelectedCardIds([]);
    setFoundPairIds([]);
    setSeed((prev) => prev + 1);
    setTurns(0);
  };

  return (
    <div className="space-y-2">
      <p>Turn: {turns}</p>
      <div className="grid gap-1 grid-cols-3">
        {iconPairs.map(({ icon, id }) => (
          <MemoryCardButton
            key={id}
            cardIcon={icon}
            onClick={() => handleCardClick(id)}
            isFlipped={
              selectedCardIds.includes(id) ||
              foundPairIds.includes(id.split("-")[0])
            }
          />
        ))}
      </div>
      {winner && (
        <Card>
          <CardHeader>
            <CardTitle>You've won!</CardTitle>
            <CardDescription>I always thought you could do it.</CardDescription>
          </CardHeader>
          <CardContent>For the record, we never doubted you.</CardContent>
          <CardFooter className="gap-2">
            <Button onClick={handleReset}>Play again</Button>
            <Button asChild variant="outline">
              <Link href="/card-memory">Back to game home</Link>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
