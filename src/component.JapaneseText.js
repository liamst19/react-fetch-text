import React, { useState, useEffect, useRef } from "react";
import "./component.JapaneseText.css";

function JapaneseText(props) {
  // States -----------------------
  const [state, setState] = useState({
    text: "ロード中…"
  });

  // Ref -------------------------
  const refContainer = useRef();

  // Effect ------------------------
  useEffect(() => {

    // Fetch text data from an external file
    fetch(process.env.PUBLIC_URL + "/" + props.url)
      .then(response => response.json())
      .then(data => {
        setState(data);

        // Call resize event to adjust height of wrapper div
        window.dispatchEvent(new Event("resize"));
      });

    // Event listener for height adjustment upon resizing window
    window.addEventListener("resize", () => {
      // Reset height for adjustment
      refContainer.current.style.height = "auto";

      // Set to the calculated height
      refContainer.current.style.height =
        refContainer.current.scrollHeight + "px";

      //  refContainer.current.style.height = elemChildBottom + 'px';
    });
  }, [props.url]);

  return (
    <div ref={refContainer} className="JapaneseText">
      {state.text.split("/n").map((p, i) => (
        <p>{p}</p>
      ))}
    </div>
  );
}

export default JapaneseText;
