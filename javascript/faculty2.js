d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(function(employee)
{
    var fullName = employee.firstName + " " + employee.lastName;
   return fullName;
})