import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import type { Student } from "./components/types";

const intitalStudent = [
  { id: "1", name: "Ola Nordmann" },
  { id: "2", name: "Kari Nordmann" },
];

function App() {
  const [students, setStudents] = useState<Student[]>(intitalStudent ?? []);

  const onAddStudent = (student: Omit<Student, "id">) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
  };

  const onRemoveStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <main>
      <h1>Klasseliste</h1>
      <Grid
        students={students}
        onAddStudent={onAddStudent}
        onRemoveStudent={onRemoveStudent}
      />
      <Total total={students.length} />
    </main>
  );
}

export default App;
