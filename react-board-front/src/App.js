// 의존하는 패키지 등을 정의한 곳. react-router-dom과 최상위 컴포넌트등을 정의
import './App.css';
import {Router, Routes, Route} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

// App()함수에 최상위 컴포넌트들을 정의함
function App() {
  return (
    <div>
      <Router>              {/* react-router의 적용대상의 컴포넌트를 <Router>로 감싼다. </Router>*/}
        <HeaderComponent/>  {/* 웹페이지의 헤더부분을 표시하는 컴포넌트를 정의*/}
        <div className='container'>
          <Routes>          {/* URL별로 페이지를 전환하기 위한 최상위 컴포넌트들을 <Routes>로 감싼다. */}
            <Route path="/" component={ListBoardComponent}></Route> {/* Route에 컴포넌트에 대응하는 URL과 컴포넌트를 정의*/}
            <Route path="/board" component={ListBoardComponent}></Route>
          </Routes>
        </div>
        
        {/* 헤더와 푸터는 <Switch>로 감싸지 않았으므로 페이지가 전환되도 계속 출력됨.*/}
        <FooterComponent/>  {/* 웹페이지의 푸터를 표시하는 컴포넌트를 정의.*/}
      </Router>
    </div>
  );
}

export default App;
