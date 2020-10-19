import React, { useState } from "react";
import StopIcon from '@material-ui/icons/Stop';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

function CheckBox(props) {
  const [inputMode, setInputMode] = useState(true);
  const [inputValue, setInputValue] = useState(props.value);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitOption = (event) => {
    if (event.key === "Enter") {
      props.submit(props.quesId, props.optionId, inputValue);
      setInputMode(false);
    }
  };
  return (
    <div>
      <StopIcon />
      {inputMode ? (
        <div style={{ display: "inline-block" }}>
          <input
            type="text"
            value={inputValue}
            name={inputValue}
            onChange={onInputChange}
            onKeyPress={onSubmitOption}
          />
        </div>
      ) : (
        <div
          onClick={() => setInputMode(true)}
          style={{ display: "inline-block", margin: "1rem" }}
        >
          {inputValue}
        </div>
      )}
      <RemoveCircleOutlineIcon
        onClick={() => props.remove(props.quesId, props.optionId)}
      />
    </div>
  );
}

export default CheckBox;
