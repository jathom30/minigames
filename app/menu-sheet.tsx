"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const MenuSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Main Nav</SheetTitle>
          <SheetDescription>Where do you want to go?</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-1">
          <Button onClick={() => setIsOpen(false)} variant="link" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button onClick={() => setIsOpen(false)} variant="link" asChild>
            <Link href="/#skills">Skills</Link>
          </Button>
          <Button onClick={() => setIsOpen(false)} variant="link" asChild>
            <Link href="/#projects">Projects</Link>
          </Button>
          <Button onClick={() => setIsOpen(false)} variant="link" asChild>
            <Link href="/#contact">Contact</Link>
          </Button>
          <Button onClick={() => setIsOpen(false)} variant="link" asChild>
            <Link href="/#mini-games">Minigames</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
