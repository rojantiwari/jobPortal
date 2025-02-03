import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

function CategoryCarousel() {
  return (
    <>
      <div className="w-full max-w-xl mx-auto my-20">
        <Carousel
          className="w-full max-w-xl mx-auto my-auto"
          opts={{
            align: "start", // Align the active item to the start
            loop: true, // Enable infinite loop
          }}
        >
          <CarouselContent>
            {category.map((category, index) => (
              <CarouselItem key={index} className="basis-full">
                <Button variant="outline" className="rounded-lg min-w-full">
                  {category}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer hover:bg-[#6A38C2]" />
          <CarouselNext className="cursor-pointer hover:bg-[#6A38C2]" />
        </Carousel>
      </div>
    </>
  );
}

export default CategoryCarousel;
