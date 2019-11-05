import React, { useState, useEffect } from 'react';
import shuffle from 'shuffle-array';

const shuffleStudents = () => {
  const studentList = [
    "Amira Chikhaoui",
    "Austin Schlander",
    "AyDy Burling",
    "Brian Zauner",
    "Claudio Garcia",
    "Detvisith Sorthepharack",
    "Elliot Trejo",
    "Isaac Duse - anthony",
    "Jake O'Toole",
    "Jesse Edwards",
    "Joseph Rhines",
    "Jujuan Burns",
    "Lance Gauer",
    "Mark McGraw",
    "mark sirany",
    "Mary Jacobs",
    "Matt Beachey",
    "Max McCord",
    "Michael Iverson",
    "Michelle Gherity",
    "Michelle Owodunni",
    "Patrick Brown",
    "Paul Hendrickson",
    "Phalcheat Chheang",
    "Ryan Ellingson",
    "Samantha Sengsouvanh",
    "William Molhoek",
  ];

  const studentsShuffled = shuffle(studentList);
  localStorage.setItem("studentsShuffled", JSON.stringify(studentsShuffled));
  console.log(studentsShuffled);

  return studentsShuffled;
}

export default function StudentButton() {
  const [index, setIndex] = useState(localStorage.index);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    if (!localStorage.studentsShuffled || !localStorage.index) {
      shuffleStudents();
      localStorage.setItem("index", 0);
      setIndex(parseInt(localStorage.index));
    }
    setStudents(JSON.parse(localStorage.studentsShuffled));
  }, []);

  return (
    <>
      <button
        onClick={() => {
          if (index < students.length - 1) {
            // advance the index by one
            localStorage.setItem("index", parseInt(localStorage.index) + 1);
            setIndex(parseInt(localStorage.index));
            // set the current student to the index
          } else {
            //shuffle the students
            shuffleStudents();
            // set the index to zero
            localStorage.setItem("index", 0);
            setIndex(parseInt(localStorage.index));
            window.location.reload();
          }
        }}
      >
        {students ? students[index] : "something went wrong"}
      </button>
    </>
  )
}