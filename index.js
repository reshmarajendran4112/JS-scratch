const employees = `[ {"name":"Janu", "age":23, "isprogrammer":true, "empId":123},
                    {"name":"Renu", "age":45, "isprogrammer":false, "empId":456},
                    {"name":"Jaga", "age":27, "isprogrammer":true, "empId":321},
                    {"name":"Reshu", "age":22, "isprogrammer":true, "empId":244}]`;

const parseData = JSON.parse(employees);
console.log(parseData);
