"use client";
import { useState } from "react";
import Button from "../ui/Button";

import { STACKS_DATA } from "@/data/stacks";
import Card from "../ui/Card";

const StackCard = () => {
  const [showMore, setShowMore] = useState(false);

  //
  const handleShowLess = () => {
    const savedPosition = [...document.querySelectorAll(".item")][3].offsetTop;
    console.log(savedPosition);
    if (savedPosition) {
      window.scrollTo({ top: savedPosition * 2, behavior: "smooth" });
      setShowMore(false);
    }
  };

  // show only first 4 items if ShowMore is false
  const stacks = showMore ? STACKS_DATA : STACKS_DATA.slice(0, 4);

  return (
    <div className="grid gap-4">
      {stacks.map((item, i) => (
        <Card key={i} className="flex flex-col justify-center min-h-40 item">
          <div
            className="mb-4 inline-flex p-3 rounded-lg bg-gray-950 border border-gray-800 w-fit group-hover:scale-[1.09]
        group-hover:border-white transition-transform cursor-pointer duration-500"
          >
            <item.icon className="h-5 w-5 text-primary-400" />
          </div>
          <h4 className="text-base font-bold text-gray-100 mb-2">
            {item.title}
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
            {item.desc}
          </p>
        </Card>
      ))}
      <Button
        className="w-max"
        variant="outline"
        onClick={!showMore ? () => setShowMore(true) : handleShowLess}
      >
        {showMore ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default StackCard;
