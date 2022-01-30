import React from "react";
const Function = () => {
  function longestString() {
    var longest = ["assddd", "akddjh", "ahjkdkajdka"];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    return longest;
  }
  return <div>{longestString()}</div>;
};
export default Function;
