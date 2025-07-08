import React from 'react';
import { Button } from '../ui/Button';

export default function CTASection() {
  return (
    <section className="py-32 container mx-auto px-6 lg:px-16 hero-pattern">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">READY TO TAKE YOUR</h2>
            <div className="flex items-center justify-center gap-8">
              <h2 className="text-5xl lg:text-7xl font-bold text-white">IDEA TO</h2>
              <Button size="lg" className="rounded-full bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-6">
                Start Project
              </Button>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-white">THE NEXT LEVEL?</h2>
          </div>
        </div>
      </div>
    </section>
  );
}