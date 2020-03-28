import React, { useState, useEffect } from "react";
import shuffle from "shuffle-array";

import "../style/studentButton.css";

const shuffleStudents = () => {
  const studentList = [
    "Chue Yang",
    "Pangsua Vang",
    "Peter Baker",
    "Christian Gonzalez",
    "Anitha Venkatesan",
    "John Leintz",
    "Davis Sjoberg",
    "Jesus Rubio",
    "Sathya Guru",
    "Michael Nguyen",
    "Gene Shaver",
    "Tom Johnson",
    "Salma Mohamed",
    "Will Sorn",
    "John Ferro",
    "Tim Tanner",
    "Ahmed Bule",
    "Cassandra Perez",
    "Jonathan Montruil",
    "Vanida Somchaleunsouk",
    "Nick Schoess",
    "Katelyn Glenna",
    "Chue Yang",
    "Jacob Thompson",
    "Nabil Negeye",
    "Benjamin Vasko",
    "Simeon Ogunyemi",
    "Jamal Lakis",
    "Joe Peterson"
  ];

  const studentsShuffled = shuffle(studentList);
  localStorage.setItem("studentsShuffled", JSON.stringify(studentsShuffled));
  console.log(studentsShuffled);

  return studentsShuffled;
};

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
        className="student-button"
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
  );
}
