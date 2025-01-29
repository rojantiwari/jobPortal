import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

const filterData = [
  {
    filterType: "Location",
    arr: ["Pokhara", "Kathmandu", "Dharan", "Janakpur", "Palpa"],
  },
  {
    filterType: "Industry",
    arr: ["frontend", "backend", "fullstack"],
  },
  {
    filterType: "Salary",
    arr: ["0-40k", "40-1lakh", "1lakh-5lakh"],
  },
];
function FilterCard() {
  return (
    <div className="w-full bg-white p-3 rounded-md ">
      <h1 className="font-bold text-lg  ">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.arr.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label> {item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
