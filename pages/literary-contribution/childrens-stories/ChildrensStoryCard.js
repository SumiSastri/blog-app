/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

export default function ChildrensStoryCard({ name, description, id }) {
  const router = useRouter();
  
  return (
    <div
      onClick={() => {
        router.push(`/childrens-stories/${id}`);
      }}
    >
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}