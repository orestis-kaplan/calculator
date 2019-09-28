import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = (props) => {
  const { handleClick } = props;
  return (
    <div className="button-panel">
      <div className="button-group">
        <Button handleClick={handleClick} name="AC" />
        <Button handleClick={handleClick} name="+/-" />
        <Button handleClick={handleClick} name="%" />
        <Button handleClick={handleClick} name="÷" color="orange" />
      </div>
      <div className="button-group">
        <Button handleClick={handleClick} name="7" />
        <Button handleClick={handleClick} name="8" />
        <Button handleClick={handleClick} name="9" />
        <Button handleClick={handleClick} name="x" color="orange" />
      </div>
      <div className="button-group">
        <Button handleClick={handleClick} name="4" />
        <Button handleClick={handleClick} name="5" />
        <Button handleClick={handleClick} name="6" />
        <Button handleClick={handleClick} name="-" color="orange" />
      </div>
      <div className="button-group">
        <Button handleClick={handleClick} name="1" />
        <Button handleClick={handleClick} name="2" />
        <Button handleClick={handleClick} name="3" />
        <Button handleClick={handleClick} name="+" color="orange" />
      </div>
      <div className="button-group">
        <Button handleClick={handleClick} name="0" wide />
        <Button handleClick={handleClick} name="." />
        <Button handleClick={handleClick} name="=" color="orange" />
      </div>
    </div>
  );
};
export default ButtonPanel;
