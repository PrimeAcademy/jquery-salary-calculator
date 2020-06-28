$(document).ready(init);

const employeeArray = [];
let totalMonthlySalaries = 0;

function init() {
  console.log('Initialized');
  $('#js-form-employee-fields').on('submit', addEmployee);
  $('#js-form-employee-fields').on('submit', renderTable);
}

function addEmployee(event) {
  event.preventDefault();
  console.log('in addEmployee');

  const employeeObject = {
    first: $('#js-firstNField').val(),
    last: $('#js-lastNField').val(),
    id: $('#js-IdField').val(),
    title: $('#js-titleField').val(),
    salary: parseInt($('#js-annualSalaryField').val()),
  };

  employeeArray.push(employeeObject);
  console.table(employeeArray);

  $('#js-form-employee-fields')[0].reset();

  console.log('Employee Array', employeeArray);
}

function renderTable() {
  $('#js-table-body').empty();
  console.log('in renderTable');
  //   let totalMonthlySalaries = 0;
  for (let employeeObject of employeeArray) {
    totalMonthlySalaries += employeeObject.salary;
    $('#js-table-body').append(`
    <tr>
        <td>${employeeObject.first}</td>
        <td>${employeeObject.last}</td>
        <td>${employeeObject.id}</td>
        <td>${employeeObject.title}</td>
        <td>${employeeObject.salary}</td>
        <td><button>X</button></td>
    </tr>
    `);
  }
  $('#js-total-salaries').text(`
    Total Monthly Salaries:
    ${totalMonthlySalaries}
  `);
}
// Topics Covered
// JavaScript
// jQue ry - Selectors, append, and event handling

// The application should have an input form that collects:
// employee
// first name,
// last name,
// ID number,
// job title,
// annual salary.

// A 'Submit' button should collect the form information,

// store the information to calculate monthly costs,

// append information to the DOM and
// clear the input fields.
// Using the stored information, calculate monthly costs
//  and append this to the to DOM.

//  If the total monthly cost exceeds $20,000,
//      add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM.

// ## Stretch Mode

// Add styling or extra functionality that fits with the theme
// of this assignment.

// Once the employee is deleted, update the total spend on salaries
// account for this employee's removal. This will require that the
// logic knows which element was removed.

// You will need to use `.text()` as a getter or look into
// jQuery's `.data()` function. This is tricky!
