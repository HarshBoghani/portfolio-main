'use client';

import { useEffect, useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { AccordionSections } from "@/components/accordion-sections";
import Loading from "@/components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <main className="space-y-8">
      <h1 className="text-5xl font-bold mb-8">Harsh Boghani</h1>
      <div className="space-y-4">
        <Separator className="bg-gray-700" />
        <p className="text-xl text-gray-300">
          Just a braincell interested in competitive programming
        </p>
      </div>

      <AccordionSections />
    </main>
  );
}
