import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';
const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '조영호',
  'birthday': '980218',
  'gender': '남자',
  'job': '학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '970218',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '문채영',
  'birthday': '960218',
  'gender': '여자',
  'job': '데이터분석가'
}
]

class App extends Component {
  render(){
    return(
      <div>
        {
          customers.map(c =>{
            return(
              <Customer key={c.id}id={c.id}image={c.image}name={c.name}birthday={c.birthday}gender={c.gender}job={c.job}/>
            )
          })
        }
      </div>
  
    );
  }
}

export default App;
