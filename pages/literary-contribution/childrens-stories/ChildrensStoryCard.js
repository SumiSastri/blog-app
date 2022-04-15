/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ChildrensStoryCard({ name, description }) {  
  return (
      <div>   
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
  );
}