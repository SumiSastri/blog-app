/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
// import Image from 'next/image'


export default function ChildrensStoryCard({ name, description, id }) {
  // const { url, alt } = image;
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/childrens-stories/${id}`);
      }}
    >
      {/* <div> */}
      {/* <Image height={50} width={50} src={url} alt={alt} /> */}
      {/* <img src={url} alt={alt}/> */}
      {/* </div> */}
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}