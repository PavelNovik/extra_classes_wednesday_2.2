import {FC, Fragment, memo, useCallback, useState} from 'react';
import {Task_2} from "./task_2/Task_2";

export type UserType = {
    [key: string]: { name: string, id: string }
};

const DATA_7: UserType[] = [
    {u1: {name: 'Gleb', id: '1'}},
    {u2: {name: 'Dima', id: '2'}},
    {u3: {name: 'Svetlana', id: '3'}},
    {u4: {name: 'Artur', id: '4'}},
    {u5: {name: 'Vera', id: '5'}},
    {u6: {name: 'Vlad', id: '6'}},
];

// const FIRST_BUTTON_BACKGROUND = {background: 'tomato'};
// const BUTTON_STYLES = {border: 'none', outline: 'none', color: 'white', borderRadius: 5};
//
// type PropsType = { isChecked: boolean, onSetIsChecked: () => void };


export const App = () => {
    //
    // const [firstCount, setFirstCount] = useState(0);
    // const [isChecked, setIsChecked] = useState(false);
    //
    //
    // const handleSetIsChecked = useCallback(() => setIsChecked(!isChecked), [isChecked]);
    //
    // const handlePlusCountValueClick = useCallback(() => setFirstCount(prevFirstCount => prevFirstCount + 1), [firstCount]);


    return (
        <Fragment>
            <Task_2 />
            {/*<Task_2 firstCount={firstCount}>*/}
            {/*    <Button onPlusCountValueClick={handlePlusCountValueClick}/>*/}
            {/*    <Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked}/>*/}
            {/*</Task_2>*/}
        </Fragment>
    );
};

// export const Button: FC<{ onPlusCountValueClick: () => void }> = memo(({onPlusCountValueClick}) => {
//     return (
//         <div>
//             <button
//                 style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
//                 onClick={onPlusCountValueClick}
//             >
//                 Plus first counter
//             </button>
//         </div>
//     );
// });
//
// export const Checkbox: FC<PropsType> = memo(({isChecked, onSetIsChecked}) => {
//     return (
//         <input type="checkbox" checked={isChecked} onChange={onSetIsChecked}/>
//     );
// });