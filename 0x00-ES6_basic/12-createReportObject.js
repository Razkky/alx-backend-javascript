export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const key in employeesList) {
    if (employeesList[key]) {
      const value = employeesList[key];
      allEmployees[key] = value;
    }
  }
  return {
    allEmployees,
    getNumberOfDepartments: () => Object.keys(allEmployees).length,
  };
}
