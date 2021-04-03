// Write your solution in this file!

// employees

const employee = {}

// updateEmployeeWithKeyAndValue(employee, key, value)
// can't use dot notation here has to be [] as .key looks to use the value "key"

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee };

    newEmployee[key] = value;

    return newEmployee
}

// destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value

    return employee
}

// deleteFromEmployeeByKey(employee, key)

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };

    delete newEmployee[key];

    return newEmployee
}


//destructivelyDeleteFromEmployeeByKey(employee, key)

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]

    return employee
}