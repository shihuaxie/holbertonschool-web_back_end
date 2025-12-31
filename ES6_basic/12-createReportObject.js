export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (args) => {
      let i = 0;

      for (const arg in args) {
        if (arg) {
          i += 1;
        }
      }

      return i;
    },
  };
}
