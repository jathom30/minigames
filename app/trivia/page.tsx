import { CategorySelect } from "./category-select";
import { TTriviaCategory } from "./utils";

export default async function Trivia() {
  const categoryData = await fetch("https://opentdb.com/api_category.php");
  const { trivia_categories } = (await categoryData.json()) as {
    trivia_categories: TTriviaCategory[];
  };
  return (
    <div className="space-y-2">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Trivia
      </h1>
      <CategorySelect categories={trivia_categories} />
    </div>
  );
}
