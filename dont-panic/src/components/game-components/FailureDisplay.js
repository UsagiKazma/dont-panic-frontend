import React from "react";

export default function FailureDisplay({ failures }) {
  let failureDisplay = []
  if(failures>0){
   failureDisplay = [...Array(failures)].map((e, i) => {
        return <p key={i}>X</p>;
      })
      return failureDisplay;
    }

  return (
    <div className="failures">
      {failureDisplay}
    </div>
  );
}
