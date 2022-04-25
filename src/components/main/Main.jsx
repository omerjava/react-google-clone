
import "./Main.css";
import { useState, useEffect } from "react";
import Button from "../button/Button";
import Input from "../input/input.jsx";


function Main() {
  const [value, setValue] = useState("");
  const [paraValue, setParaValue] = useState("");

  const onChange= (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setParaValue(value);}
  , [value]);

  const handleSubmit = () => {
    return;
  };

  return (
    <div className="main">
      <div className="top">
        <div className="google-photo"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formDiv1">
          <Input type="text" value={value} onChange={onChange}/>
        </div>
        <div className="formDiv2">
          <Button name="Google Search" type="submit" />
          <Button name="I'm Feeling Lucky" type="click" />
        </div>
      </form>
      <p className={paraValue.length>0 ? "showParagraph" : "hideParagraph"}>{paraValue}</p>
    </div>
  );
}

export default Main;
