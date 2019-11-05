import React, { useState } from 'react';

export default function StudentButton() {

  const [student, setStudent] = useState("one")

  return (
    <>
      <button
        onClick={() => { student === "one" ? setStudent("two") : setStudent("one") }}
      >
        {student}
      </button>
    </>
  )
}