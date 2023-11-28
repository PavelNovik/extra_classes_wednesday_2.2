import {FC, memo, ReactNode, useCallback, useState} from 'react';

const FIRST_BUTTON_BACKGROUND = {background: 'tomato'};
const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};
const BUTTON_STYLES = {border: 'none', outline: 'none', color: 'white', borderRadius: 5};

type PropsType = { isChecked: boolean, onSetIsChecked: () => void };

// Task
// If click to Button component Checkbox not re-render
// If click to Checkbox component Button not re-render

type Task2Type = {
    // children: ReactNode
    // firstCount: number
}

export const Task_2 = (props: Task2Type) => {
  const [firstCount, setFirstCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);


  const handleSetIsChecked = useCallback(() => setIsChecked(!isChecked),[isChecked]);

  const handlePlusCountValueClick = useCallback(() => setFirstCount(prevFirstCount => prevFirstCount + 1),[firstCount]);

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <div>{`Count equal: ${firstCount}`}</div>
      {/*<div>{`Count equal: ${props.firstCount}`}</div>*/}
      <Button onPlusCountValueClick={handlePlusCountValueClick} />
      <Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked} />
        {/*{props.children}*/}
    </div>
  );
};

export const Button: FC<{ onPlusCountValueClick: () => void }> = memo(({onPlusCountValueClick}) => {
  return (
    <div>
      <button
        style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
        onClick={onPlusCountValueClick}
      >
        Plus first counter
      </button>
    </div>
  );
});

export const Checkbox: FC<PropsType> = memo(({isChecked, onSetIsChecked}) => {
  return (
    <input type="checkbox" checked={isChecked} onChange={onSetIsChecked} />
  );
});
