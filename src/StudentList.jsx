function StudentList() {
  const students = [
    { id: 1, name: "Krishna", mark: 90 },
    { id: 2, name: "Megha", mark: 45 },
    { id: 3, name: "Gowri", mark: 75 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            Name: {student.name} | Mark: {student.mark}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default StudentList;