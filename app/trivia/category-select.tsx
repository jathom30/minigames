"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TTriviaCategory } from "./utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CategorySelect = ({
  categories,
}: {
  categories: TTriviaCategory[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");

  const handleSubmit = () => {
    router.push(`/trivia/play?category=${category}&difficulty=${difficulty}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your quiz</CardTitle>
        <CardDescription>
          Select from the dropdowns below to create the perfect trivia for you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Select
          value={category || ""}
          onValueChange={(val) => {
            const params = new URLSearchParams(window.location.search);
            params.set("category", val);
            router.push(`${window.location.pathname}?${params.toString()}`);
          }}
        >
          <SelectTrigger className="max-w-72">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={difficulty || ""}
          onValueChange={(val) => {
            const params = new URLSearchParams(window.location.search);
            params.set("difficulty", val);
            router.push(`${window.location.pathname}?${params.toString()}`);
          }}
        >
          <SelectTrigger className="max-w-72">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button disabled={!(categories && difficulty)} onClick={handleSubmit}>
          GO!
        </Button>
      </CardFooter>
    </Card>
  );
};
