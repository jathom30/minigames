import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { skillsList } from "./skills-list";
import { projectsList } from "./projects-list";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-3xl m-auto">
      <main className="p-4 space-y-8">
        <div className="space-y-4">
          <Image
            className="rounded-lg"
            src={"/jeff-head.jpeg"}
            alt="Jeff Thomas"
            width={500}
            height={300}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Jeff Thomas
          </h1>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            Frontend Developer fleunt in React, TypeScript, Tailwind, and more.{" "}
            <Button variant="link" className="text-primary" asChild>
              <Link href="#">See my full skill list here.</Link>
            </Button>
          </blockquote>
        </div>
        <Card id="about-me">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>
              Want to learn a little more about me?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Hello! My name is Jeff Thomas and I love building things. I love
              problem solving, learning new things, and working with my hands.
              When my wife needed an app to track her clients&apos; hair
              formulas at work, I built her an app. When I needed a place to
              work, I built myself a desk. My band needed an app to create and
              track our setlists at shows; no problem, I learned more about
              databases, back-ends, and built an app for us. When I needed a
              place to sit in the evenings, I built a deck off my house.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I get excited at new problems. Each feature, structure, repo, and
              project is its own challenge and has its own opportunities for
              growth.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              My additude towards programing has allowed me to learn an ever
              increasing number of skills. After picking up React, I quickly
              dove into TypeScript. Tailwind came soon after, then Remix, then
              Next.js, then more and more.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I&apos;ve taught cohorts of students at{" "}
              <Button asChild variant="link">
                <Link href="https://code-you.org/" target="_blank">
                  Code:You
                </Link>
              </Button>{" "}
              in Louisville, KY the basics of web development. I&apos;ve
              introduced typescript to entire companies. I&apos;ve built apps
              for friends, family, and myself in my off-time.
            </p>
          </CardContent>
        </Card>

        <Card id="skills">
          <CardHeader>
            <CardTitle>Skills List</CardTitle>
            <CardDescription>
              Here&apos;s what I&apos;m comfortable with so far (in random
              order).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4">
              {skillsList
                .sort(() => Math.random() - 0.5)
                .map((skill) => (
                  <SkillIcon key={skill.label} {...skill} />
                ))}
            </div>
          </CardContent>
        </Card>

        <Card id="projects">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Check out some of my projects!</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-8">
              {projectsList.map((project) => (
                <li key={project.github} className="space-y-4">
                  <h2 className="text-xl font-bold">{project.label}</h2>
                  <blockquote className="mt-6 border-l-2 pl-6 italic">
                    {project.tagline}
                  </blockquote>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="link" className="w-full" asChild>
                      <Link href={project.github} target="_blank">
                        Github Link
                      </Link>
                    </Button>
                    {project.link ? (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={project.link} target="_blank">
                          Deployed App
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                  <p className="text-sm">{project.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card id="mini-games">
          <CardHeader>
            <CardTitle>Minigames</CardTitle>
            <CardDescription>Select your game!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Looking at portfolio websites is boring, here are some minigames
              to waste time on instead!
            </p>
            <div className="flex gap-2">
              <Button className="w-full" variant="secondary" asChild>
                <Link href="simon-says">Simon Says</Link>
              </Button>
              <Button className="w-full" variant="secondary" asChild>
                <Link href="card-memory">Card Memory</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

const SkillIcon = ({
  label,
  link,
  Icon,
}: {
  label: string;
  link: string;
  Icon: IconType;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col items-center gap-1 rounded p-2 text-center hover:text-primary"
    >
      <Icon className="text-4xl" />
      <span>{label}</span>
    </Link>
  );
};
