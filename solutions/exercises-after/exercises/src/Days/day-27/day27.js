import React, { useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RiFileCopyLine } from "react-icons/ri";
import "./day27.css";
const randomColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

function Day27() {
  const [color, setColor] = useState("");
  const [copy, setCopy] = useState(false);
  const change_color_click = () => {
    setColor(RandomColor());
  };

  const ChangeBtn = () => {
    const change_color_btn = useRef(null);
    return (
      <button
        ref={change_color_btn}
        onClick={change_color_click}
        className="btn"
      >
        Change Color
      </button>
    );
  };
  const copy__click = ({ copy }) => {
    copy = !copy;
    setCopy(copy);
    console.log("!!!");
    console.log(copy);
  };
  const RandomColor = () => {
    const color = randomColor();
    const colorStyle = {
      background: color
    };

    return (
      <>
        <div style={colorStyle} className="color__card">
          {color}
          <div className="copy">
            <CopyToClipboard text={color} className="wapper_copy">
              <RiFileCopyLine className="" onClick={copy__click} />
            </CopyToClipboard>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <ChangeBtn />
      <RandomColor /> <RandomColor /> <RandomColor /> <RandomColor />{" "}
      <RandomColor />
    </div>
  );
}

export default Day27;
