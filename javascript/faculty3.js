d3.select("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(function(employee)
{
   return employee.lastName;
})