const getEmployerRole = (employeeName, employees) => {
  const getEmployee = employees.find(
    (employee) => employeeName === employee.name
  );
  return getEmployee.role;
};

module.exports = getEmployerRole;
