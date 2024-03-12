import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Book from './Book'

function App() {

  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel', 'Salman shah'];

  const books = [
    {id:1, name:'Physices', price: 100},
    {id:1, name:'Chemistray', price: 200},
    {id:1, name:'Math', price: 300},
    {id:1, name:'Biology', price: 400},
  ]

  const singers = [
    {id:1, name:'Dr. Mahfuz', age: 68},
    {id:2, name:'Eva. Rahman', age: 38},
    {id:3, name:'Shuvro Dev', age: 58},
    {id:4, name:'Pritom Vai', age: 28},
  ];
  return (
    <>

      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Mushfiq"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
        task="Learn React" isDone={true}></Todo>
      <Todo
        task="Explore Core Concept" idDone={false}></Todo>
      <Todo
        task="Try JSX" isDone={true}></Todo> */}

      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="Watch" price="7"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade = {12} score={85}></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This Device: {props.name} Price:{props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 25;
  const person = { name: 'sakib', age: 12 }
  return <h3> I am a {person.name} with age: {age + money}</h3>
}

const { grade, score } = { garde: '7', score: '99' };


function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return (
    <div className='student'>
      <h3>I am a Student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )

}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Mushfiq</h5>
      <p>Coding</p>
    </div>
  )

  // return(
  //   <div style={{
  //     margin: '20px',
  //     padding: '20px',
  //     border: '2px solid purple',
  //     borderRadius: '20px'
  //   }}>
  //     <h5>Mushfiq</h5>
  //     <p>Coding</p>
  //   </div>
  // )
}
export default App
