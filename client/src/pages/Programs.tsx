import { useEffect, useState } from "react";

function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error("Erreur fetch : ", err));
  }, []);
  console.info(programs);

  interface Program {
    id: number;
    title: string;
    poster: string;
  }

  return (
    <div className="container">
      <h1>Programs</h1>
      <p>Welcome to the Programs page!</p>
      {programs.map((program: Program) => (
        <>
          <h2 key={program.id}>{program.title}</h2>
          <img src={program.poster} alt={program.title} key={program.id} />
        </>
      ))}
    </div>
  );
}

export default Programs;
