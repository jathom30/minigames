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

export default function GameOverSimonSays() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Game Over!</CardTitle>
        <CardDescription>
          Don&apos;t worry, it happens to the best of us.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="gap-2">
        <Button asChild>
          <Link href="/simon-says/play">Play Again?</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/simon-says">Back to game home</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
