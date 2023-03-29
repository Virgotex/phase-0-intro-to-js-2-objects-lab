const employee = {
    name: "Carlton",
    streetAddress: "4358235",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee }
    newObj[key] = value
    return newObj
}
updateEmployeeWithKeyAndValue(employee, "sam", "1")

function deleteFromEmployeeByKey(employee, key){
    const remEmployee = { ...employee }
    let name = key
    let newEmployee = delete remEmployee[name]
    return {newEmployee}
}

deleteFromEmployeeByKey(employee, "Kibe")

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
