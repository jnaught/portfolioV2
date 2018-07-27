import React from "react";
import Button from "../ReusableAssets/Button";
import SiteTitle from "../ReusableAssets/SiteTitle";

export default function Home() {
  const homepage = {
    backgroundColor: "blue",
    width: "100vw",
    height: "84vh"
  };
  return (
    <div style={homepage}>
      <p>
        <SiteTitle
          props={{
            name: "Who Am I?",
            style: { color: "yellow", fontSize: "40px" }
          }}
        />
      </p>
      <div>
        <Button props={{ text: "Click Me", color: "blue", height: "20px" }} />
      </div>
    </div>
  );
}
