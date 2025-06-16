import { useEffect, useState } from "react";

function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error("Erreur fetch : ", err));
  }, []);
}

export default Programs;
