"use client";

import { useCallback, useEffect, useState } from "react";
import { PlayerIndicator } from "../player-indicator";
import { SimonButton } from "../simon-button";
import { getRandomTile, Tile, tiles } from "../utils";
import { useRouter } from "next/navigation";

export default function PlayingSimonSays() {
  const [turn, setTurn] = useState<"user" | "simon" | "playing">("simon");
  const [sequence, setSequence] = useState<Tile[]>([]);
  const [userSequence, setUserSequence] = useState<string[]>([]);
  const [activeTile, setActiveTile] = useState<Tile | null>(null);
  const highScore = localStorage.getItem("highScore-simon") || 0;
  const router = useRouter();

  // handle high score
  const handleHighScore = useCallback(
    (newSeqLength: number) => {
      if (newSeqLength > Number(highScore)) {
        localStorage.setItem("highScore-simon", `${sequence.length}`);
      }
    },
    [highScore, sequence.length]
  );

  // create new sequence on simon's turn
  useEffect(() => {
    const createSequence = () => {
      const newSequence = [...sequence];
      const newTile = getRandomTile();
      newSequence.push(newTile);
      setSequence(newSequence);
      handleHighScore(newSequence.length - 1);
      setTurn("playing");
    };
    if (turn === "simon") {
      createSequence();
    }
  }, [handleHighScore, sequence, turn]);

  // Active tile for 300 ms
  const activateTile = (tile: Tile) => {
    setActiveTile(tile);
    setTimeout(() => setActiveTile(null), 300);
  };

  // play sequence on playing turn (after simon's turn)
  useEffect(() => {
    if (turn !== "playing") return;
    let i = 0;
    // set active tile for 500 ms, then move to next tile in sequence
    const interval = setInterval(() => {
      activateTile(sequence[i]);
      i++;
      if (i > sequence.length) {
        clearInterval(interval);
        setActiveTile(null);
        setTurn("user");
      }
    }, 500);
    return () => clearInterval(interval);
  }, [sequence, turn]);

  // handle user click
  const handleUserClick = useCallback(
    (tile: Tile) => {
      if (turn !== "user") return;
      activateTile(tile);

      const newUserSequence = [...userSequence, tile];
      sequence.forEach((tile, i) => {
        if (newUserSequence[i] && newUserSequence[i] !== tile) {
          router.push("/simon-says/game-over");
        }
      });

      setUserSequence((prev) => {
        const newuserSequence = [...prev, tile];
        if (newuserSequence.length === sequence.length) {
          // if user sequence is correct, set turn to simon
          if (newuserSequence.join("") === sequence.join("")) {
            setTimeout(() => setTurn("simon"), 500);
          }
          return [];
        }
        return newuserSequence;
      });
    },
    [router, sequence, turn, userSequence]
  );

  // handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (tiles.includes(e.key as Tile)) {
        handleUserClick(e.key as Tile);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleUserClick]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Current Score: {sequence.length - 1}</span>
        <span>High Score: {highScore}</span>
      </div>
      <div className="flex justify-between">
        <PlayerIndicator
          name="Simon"
          isActive={["simon", "playing"].includes(turn)}
        />
        <PlayerIndicator name="User" isActive={turn === "user"} />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        {tiles.map((tile) => (
          <SimonButton
            key={tile}
            keyCode={tile}
            onClick={() => handleUserClick(tile)}
            isActive={activeTile === tile}
          />
        ))}
      </div>
    </div>
  );
}
