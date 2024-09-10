"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { findFirstNonRepeatingChar } from "@/lib/findFirstNonRepeatingChar";}

export default function AppPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved words from localStorage on component mount
    const saved = localStorage.getItem("savedWords");
    if (saved) {
      setSavedWords(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult("");

    const nonRepeatingChar = findFirstNonRepeatingChar(input);

    if (nonRepeatingChar) {
      setResult(nonRepeatingChar);

      // Save word if it's not already saved
      if (!savedWords.includes(input)) {
        const newSavedWords = [...savedWords, input];
        setSavedWords(newSavedWords);
        localStorage.setItem("savedWords", JSON.stringify(newSavedWords));
        toast({
          title: "Success",
          description: `Word "${input}" saved`,
        });
      }
    } else {
      setError(`No non-repeating characters found in the string "${input}"`);
      toast({
        title: "Error",
        description: `No non-repeating characters found in the string "${input}"`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>First Non-Repeating Character Finder</CardTitle>
          <CardDescription>
            Enter a string to find the first non-repeating character
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a string"
              required
            />
            <Button
              type="submit"
              className="w-full bg-sky-600 focus:bg-sky-800 hover:bg-sky-700"
            >
              Find
            </Button>
          </form>
          {result && (
            <div className="mt-4">
              <strong>Result:</strong> {result}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-2">Saved Words</h3>
            <ul className="list-disc pl-5">
              {savedWords.map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
