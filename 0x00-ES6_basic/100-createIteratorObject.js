export default function createIteratorObject(report) {
  const departments = Object.values(report)[0];
  let employee = [];
  for (const department in departments) {
    if (department) {
      const name = departments[department];
      employee = employee.concat(name);
    }
  }
  return employee;
}
