export default function createReportObject(employeesList) {
 const allEmployees = {};
  for (const key in employeesList) {
    const value = employeesList[key];
    allEmployees[key] = value;
  };
  return {
    allEmployees,
    getNumberOfDepartments: () => {
      return Object.keys(allEmployees).length;
    },
  }
}
