import './App.css';

function Test(){
    const name = "리액트";
    return(
        <div>
            {name && (<h1>{name} 변수가 있습니다</h1>)}
            <h1>우리는 {name || "html"}을 사용합니다.</h1>
        </div>
    )
}

export default Test;