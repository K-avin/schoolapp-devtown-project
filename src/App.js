import React from 'react';
import './App.css';
import NavBar from './common/navBar';
import Footer from './common/footer';
import data from './data/students.json';
import StudentCart from './components/studentCart';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='container mt-5'>
      <h2 className='text-center mb-5'>Dev Town Collage Student List</h2>
        <h5 className='mb-4'>Class 10A Students</h5>
        <div className="row">
          {data.map(student => {
            if (student.class === '10A') {
              return (
                <StudentCart data={student} />
              );
            } else {
              return null;
            }
          })}
        </div>
        <h5 className='mb-4'>Class 10B Students</h5>
        <div className="row">
          {data.map(student => {
            if (student.class === '10B') {
              return (
                <StudentCart data={student} />
              );
            } else {
              return null;
            }
          })}
        </div>
        <h5 className='mb-4'>Class 10C Students</h5>
        <div className="row">
          {data.map(student => {
            if (student.class === '10C') {
              return (
                <StudentCart data={student} />
              );
            } else {
              return null;
            }
          })}
        </div>
        <h5 className='mb-4'>Class 10D Students</h5>
        <div className="row">
          {data.map(student => {
            if (student.class === '10D') {
              return (
                <StudentCart data={student} />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
