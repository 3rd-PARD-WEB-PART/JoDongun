import { useState, useRef, useEffect } from "react";

function Week2_useRef(){
    const [state, setState] = useState(0);
    const ref = useRef(0);
    const [count, setCount] = useState(0);
    const inputValue = useRef();
    // const [inputVal, setInputVal] = useState('');

    // const handleInputChange = (event) =>{
    //     setInputVal(event.targer.value);
    // }

    // const handleButtonClick = () =>{
    //     alert(inputVal);
    // }

    useEffect(()=>{
        console.log("리액트는 재밌어!")
    }, [count]); //이거 count 안주면 어떻게 되는거지?

    useEffect(()=>{
        console.log(inputValue);
        inputValue.current.focus();
    })

    const increseState = () => {
        setState(state+1);
    };

    const increaseRef = () => {
        ref.current = ref.current+1;
        console.log("ref", ref.current);
    };
    // Ref는 랜더링을 안시키고 값을 변화시키다가 랜더링이 될때 값이 변하게 되는 건가?

    return(
        <div>
            <p>state : {state}</p>
            <p>ref : {ref.current}</p>
            <button onClick={increseState}>Start up!</button>
            <button onClick={increaseRef}>Ref up!</button>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click me!
            </button>
            <div>
                <input type="text" ref={inputValue} placeholder="username"/>
                <button>입력</button>
            </div>
            <div>
                {/* <input type="text" value={inputVal} onChange={handleInputChange}/>
                <button onClick={handleButtonClick}>Display alert</button> */}
                {/* 왜 인풋벨류를 계속 받아야하는거지? */}
            </div>
        </div>
    )
}
//styled 이거 제대로 안된거 같애
// const Button = styled.button
// background-color: #0077cc;
// color = #ffffff;
// font-size: 1em;
// margin: 1em;
// padding: 0.25em, 1em;
// border: 2px solid #0077cc;
// border-radius: 3px;
// ;
    

export default Week2_useRef;