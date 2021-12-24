import React from "react";
import './ControlButton.css'

export enum ButtonType {
  Edit = "Edit",
  Complete = " Complete",
  Remove = "Remove",
  Add = "Add",
}

export enum ButtonColor {
  Green = "green",
  Red = "red",
  None = "",
}

const ButtonSVG: React.FC<{ type: ButtonType }> = ({ type }) => {
  switch (type) {
    case ButtonType.Edit:
      return (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path>
        </svg>
      );

    case ButtonType.Complete:
      return (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="44"
            d="M465 127L241 384l-92-92m-9 93l-93-93m316-165L236 273"
          ></path>
        </svg>
      );

    case ButtonType.Remove:
      return (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
        </svg>
      );

    case ButtonType.Add:
      return (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 12 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path>
        </svg>
      );
    default:
      return null;
  }
};

const ControlButton: React.FC<{
  type: ButtonType;
  onClick: (event?: any) => void;
  color?: ButtonColor;
  className?: string
}> = ({ type, onClick, color = ButtonColor.None, className='' }) => {
  return (
    <button
      style={{
        color: color,
      }}
      onClick={onClick}
      className={className}
    >
      <ButtonSVG type={type}></ButtonSVG>
    </button>
  );
};

export default ControlButton;
