import React, { useState, useEffect } from 'react';
import shuffle from 'shuffle-array';

const shuffleStudents = () => {
  const studentList = [
    'student one',
    'student two',
    'student three',
    'student four',
    'student five',
    'student six',
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