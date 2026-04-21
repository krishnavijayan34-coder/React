function StudentList() {
  const students = [
    { id: 1, name: "Krishna", mark: 90 },
    { id: 2, name: "Megha", mark: 45 },
    { id: 3, name: "Gowri", mark: 75 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Mark: {student.mark}</p>
        </div>
      ))}

    </div>
  );
}

export default StudentList;