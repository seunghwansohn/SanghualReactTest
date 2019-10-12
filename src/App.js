import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';


class App extends Component {   //1. Component 선언하는 일반 구문 - 여기다 싹다 넣고 끝난 뒤 마지막에 export를 통해 밖으로
  constructor(props){           //2-1. State를 선언하는 일반 구문
    super(props);               //2-2. State를 선언하는 일반 구문
    this.state = {              //2-3. State를 선언하는 일반 구문
      mode:'read',              //현재 페이지의 기본성격을 mode라는 state로 변수화
      subject:{title:'WEB', sub:'World Wid Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {                                  //3. 여기서부터 return() 함수 전까지는 State를 규정하는 내용
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode ===  'welcome'){       //mode가 welcome(첫페이지 mode)일때 전달할 State
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){    //mode가 하위페이지 일때 하위페이지로 전달할 State
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (                                  //4. 여기서부터 HTML로 출력할 내용들 규정
      <div className="App">                    {/*return안의 부분은 JSP언어로 쓰임. 반드시 HTML로 div 태그로 묶어 전달해야 전달*/}
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
            <h1><a href="/" onClick={function(e){    {/* 5-1(e)부분은 펑션에 e인자를 전달함으로써 아래의 preventDefult를 통해 기본적인 처리를 막음으로써 페이지의 reload를 방지*/}
              console.log(e);
              e.preventDefault();                    {/* 5-2 페이지의 리로드 방지 */}
              //this.state.mode = 'welcome';         {/* 6-1 state는 직접 바꾸면 안되고 아래와 같이 함수형태로 바꾸어야 함.*/}
              this.setState({                        {/* 6-2 state는 이렇게 함수형태로 바꾸어야 함*/}
                mode:'welcome'
              });
            }.bind(this)}>{this.state.subject.title}</a></h1> {/* 5-3 e인자 함수 닫은 뒤 바로 뒤에 bind부분으로 한번 더 묶어 줘야 페이지 리로드 방지 완성됨.*/}
            {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;