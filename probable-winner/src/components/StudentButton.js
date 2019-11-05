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

  return studentsShuffled;
}


export default function StudentButton() {
  const [index, setIndex] = useState(0);
  const [student, setStudent] = useState("")
  const [students, setStudents] = useState([]);
  useEffect(() => {
    setStudents(shuffleStudents);
    setStudent(students[index])
  }, [])

  return (
    <>
      <button
        onClick={() => {
          if (index < students.length) {
            setIndex(index + 1);
          } else {
            setIndex(0);
            setStudents(shuffleStudents);
            setStudent(students[0]);
          }
          setStudent(students[index]);
        }}
      >
        {student ? student : "start"}
      </button>
    </>
  )
}