import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="whole-page">
        <div className='side'>
          <div className="side-side">
            <div className='mycom_icon'>
              <img src="/mycom.png" className="img_size" alt="mycom" />
              내 컴퓨터
            </div>
            <div className='mycom_icon'>
              <img src="/myfol.png" className="img_size" alt="myfolder" />
              내 문서
            </div>
            <div className='mycom_icon'>
              <img src="/inter.png" className="img_size" alt="internet" />
              Internet<br />Explorer
            </div>
            <div className='mycom_icon'>
              <img src="/network.png" className="img_size" alt="internet" />
              네트워크<br />환경
            </div>
            <div className='mycom_icon'>
              <img src="/trash.png" className="img_size" alt="internet" />
              휴지통
            </div>
          </div>

          <div className='side-side'>
            <div className='mycom_icon'>
              <img src="/myphoto.jpeg" className="img_size" alt="internet" />
              Pard_3rd<br />Web
            </div>
          </div>
        </div>


        <div className="main-side">
          <div className="main-header">
            Pard_3rd_Web
            <div>
              <button type="button" className="side-header-button">
                -
              </button>
              <button className="side-header-button">
                x
              </button>
            </div>
          </div>
          <div className="main-name">
            <b>{'<'}---Jo Dong-un⭐---{'>'}</b>
          </div>
          <div className="content">
            <img src="/myphoto.jpeg" className='myphoto' alt="myphoto" />
            <div className='introduce'>
              <b>{'<'}--협업하는 개발자 되기 !--{'>'}</b>
              <br/>
              이름: 조동운<br/><br/>
              MBTI: INFJ<br/><br/>
              좋아하는 음식: 만두🥟<br/><br/>
              취미: 운동🏀 / 음악🎵 / 영화🎬<br/>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src="/window.png" className='window' alt="window"/>
        <img src="/window_right.png" className='window-right' alt="window"/>
      </div>
    </div>
  );
}

export default App;
