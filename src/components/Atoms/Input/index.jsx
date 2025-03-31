import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export default function Input({ onEditComplete, defaultValue }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEditComplete(inputRef.current.value);
    }
  };

  return (
    <StyledInput
      ref={inputRef}
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  padding: 0 4px;
  background: ${COLOR.BLACK};
  border: none;
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  gap: 10px;
  ${TEXT.S}
  font-family: ${FONTFAMILY.NOTO_SANS};
  &:focus {
    outline: none;
  }
`;
