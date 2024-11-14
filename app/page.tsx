import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>Minigames</CardTitle>
            <CardDescription>Select your game!</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <Button variant="secondary" asChild>
                  <Link href="simon-says">Simon Says</Link>
                </Button>
              </li>
              <li>
                <Button variant="secondary" asChild>
                  <Link href="card-memory">Card Memory</Link>
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
