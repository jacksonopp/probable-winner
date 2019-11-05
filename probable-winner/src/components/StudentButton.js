import React, { useState, useEffect } from 'react';

const getRandomStudent = () => {
  const studentList = [
    'student one',
    'student two',
    'student three',
    'student four',
    'student five',
    'student six',
  ];

  const randomNumber = Math.floor(Math.random() * studentList.length);

  return randomNumber()
}

export default function StudentButton() {

  const [student, setStudent] = useState("")
  useEffect(() => {
    setStudent(getRandomStudent())
  }, [])

  return (
    <>
      <button
        onClick={() => { setStudent(getRandomStudent()) }}
      >
        {student}
      </button>
    </>
  )
}