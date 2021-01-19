// FUNCTION 

// Q.no.1
// function current_date(){
//     var d = new Date()
//     alert(d)
// }
// current_date()

// Q.no.2
// function greeting(){
//     var first_name = prompt("Enter your first name")
//     var last_name = prompt("Enter your last name")
//     var greet = "Hello " + first_name + " " + last_name
//     alert(greet)
// }
// greeting()

// Q.no.3
// function add(){
//     var num1 = parseInt(prompt("Enter first number"))
//     var num2 = parseInt(prompt("Enter second number"))
//     var sum = num1 + num2
//     return sum
// }
// var ans = add()
// alert(ans)

// Q.no.4
// function calculator(number1, number2, operator){
//     if(operator === "+"){
//         var sum = number1 + number2
//         return sum
//     }
//     else if(operator === "-"){
//         var sub = number1 - number2
//         return sub
//     }
//     else if(operator === "*"){
//         var mul = number1 * number2
//         return mul
//     }
//     else if(operator === "/"){
//         var div = number1 / number2
//         return div
//     }
//     else if(operator === "%"){
//         var mod = number1 % number2
//         return mod
//     }
//     else{
//         var err = "You have entered wrong operator"
//         return err
//     }
// }
// var answer1 = calculator(7,5,"+")
// alert(answer1)
// var answer2 = calculator(7,5,"-")
// alert(answer2)
// var answer3 = calculator(7,5,"*")
// alert(answer3)
// var answer4 = calculator(7,5,"/")
// alert(answer4)
// var answer5 = calculator(7,5,"%")
// alert(answer5)

// Q.no.5
// function square(num){
//     var sqr = num * num
//     return sqr
// }
// var ans = square(4)
// alert(ans)

// Q.no.6
// function factorial(number){
//     var total = 1
//     for(var i = 1; i <= number; i++){
//         total = total * i
//     }
//     var ans = "The Factorial of " + number +" is: " + total
//     return ans
// }
// var answer = factorial(20)
// alert(answer)

// Q.no.7
// function counting(start_num, end_num){
//     for(var i = start_num; i <= end_num; i++){
//         var count = document.write(i + ",")
//     }
//     return count
// }
// var result = counting(67, 100)

// Q.no.8

// Q.no.9
// var w = 25
// var h = 48
// function area(a , b){
//     var area = a * b 
//     return area
// }
// var answer = area(25, 4)
// alert(answer)

// var answer = area(w, h)
// alert(answer)

// Q.no.10
// function checkPelindrome(str){
//     var array_values = str.split("")
//     var reverse_array_values = array_values.reverse()
//     var reverse_str = reverse_array_values.join("")
//     if(str == reverse_str){
//         var result1 = "It is a Pelindrome"
//         return result1
//     }
//     else{
//         var result2 = "It is not a Pelindrome"
//         return result2
//     }
// }
// var answer = checkPelindrome("madam")
// alert(answer)

// Q.no.11
// function upper_case(str){
//     var arr = str.split("")
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === " "){
//             var char = arr[i+1].toUpperCase()
//             arr[i+1] = char
//         }
//     }
//     var new_str = arr.join("")
//     return new_str
// }
// var para = "In the example above, I defined the first three elements of the array, in order."
// var answer = upper_case(para)
// document.write(answer)

// Q.no.12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var para = "In the example above, I defined the first three elements of the array, in order."
// var answer = longestWord(para)
// alert(answer)

// Q.no.13
// function occurance(string, character){
//     var str = string.split("")
//     var rep = 0 
//     for(var i = 0; i < str.length; i++){
//         if(str[i] === character){
//             var inc = rep + 1
//             rep = inc
//         }
//     }
//     var result = character + " is repeated " + rep + " times in this text."
//     return result
// }
// var para = "In the example above, I defined the first three elements of the array, in order."
// var answer = occurance(para, "e")
// alert(answer)

// Q.no.14
// function calcCircumferrence(radius){
//     var circumferrence = 2 * 3.142 * radius
//     var result1 = "The Circumferrence is: " + circumferrence
//     return result1
// }
// function calcArea(radius){
//     var area = 3.142 * (radius * radius)
//     var result2 = "The Area is: " + area
//     return result2 
// }
// // var answer1 = calcCircumferrence(24)
// // alert(answer1)

// var answer2 = calcArea(24)
// alert(answer2)


//               ===========================================================


//  DATE METHODS

// Q.no.1
// var d = new Date()
// alert(d)

// Q.no.2
// var d = new Date()
// var month = d.getMonth()
// var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// alert("Current month: " + months[month])

// Q.no.3
// var d = new Date()
// var day = d.getDay()
// var days = ["Sun" ,"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// document.write("Today is " + days[day])

// Q.no.4
// var d = new Date()
// var day = d.getDay()
// var days = ["Sun" ,"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// if(days[day] === "Sat" || days[day] === "Sun"){
//     alert("It's a Fun day")
// }

// Q.no.5
// var d = new Date()
// var date = d.getDate()
// if(date < 16){
//     alert("First Fifteen Days of the Month")
// }
// else{
//     alert("Last Days of the Month")
// }

// Q.no.6
// var a = new Date()
// var b = a.getTime()
// var c = new Date("jan 1 1970")
// var d = c.getTime()
// var diff = b - c
// console.log(diff)
// var diff_min = diff/(1000*60)
// console.log(diff_min)
// document.write("Current Date: " + a + "<br>" + "Milisecond since Jan 1 1970: " + diff + "<br>" + "Minutes since Jan 1 1970: " + diff_min)

// Q.no.7
// var d = new Date()
// var hour = d.getHours()
// if(hour < 12){
//     alert("It's AM")
// }
// else if(hour > 12){
//     alert("It's PM")
// }

// Q.no.8
// var later_date = new Date("dec 31 2021")
// alert("Later Date: " + later_date)

// Q.no.9
// var a = new Date()
// var b = a.getTime()
// var c = new Date("june 18 2015")
// var d = c.getTime()
// var year_diff = a - c
// var diff = year_diff/(1000*60*60*24)
// var days = Math.floor(diff)
// alert(days + " have passed since 1st Ramazan of 2015")

// Q.no.10
// var a = new Date()
// var b = a.getTime()
// var c = new Date("jan 1 2015")
// var d = c.getTime()
// var diff = b - c
// var diff_sec = diff/1000
// alert(diff_sec + " seconds had passed since beginning of 2015")

// Q.no.11
// var a = new Date()
// var b = new Date()
// b.setHours(18)
// document.write("Current Date: " + b + "<br>" + "1 Hour ago it was: " + a)

// Q.no.12
// var a = new Date()
// var b = new Date()
// b.setFullYear(1921)
// document.write("Current Date: " + a + "<br>" + "100 Years back it was: " + b)

// Q.no.13
// var a = new Date()
// var year = a.getFullYear()
// var age = parseInt(prompt("Enter your age"))
// var birth_year = year - age
// document.write("Your age is: " + age + "<br>" + "Your Birth Year is: " + birth_year)

// Q.no.14
// var name = "Musadiq Shariq"
// var d = new Date()
// var month = d.getMonth()
// var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var mon = months[month]
// var units = 410
// var chrg_per_unit = 16
// var pay_in_dd = (units * chrg_per_unit)
// var late_charges = 350
// var pay_after_dd = (pay_in_dd + late_charges)
// document.write("<h1> K Electric Bill</h1>")
// document.write("Customer name: " + name + "<br>")
// document.write("Month: " + mon + "<br>")
// document.write("Numbers of Unit: " + units + "<br>")
// document.write("Charges per Unit: " + chrg_per_unit + "<br>" + "<br>")
// document.write("Net Amount Payable(within due date): " + pay_in_dd + "<br>")
// document.write("Late Payment surcharge: " + late_charges + "<br>")
// document.write("Gross Amount Payable(after due date): " + pay_after_dd)

//              ==========================================================


// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS 

// Q.no.1
// function power(a,b){
//     var num = 1
//     for(var i = 1; i <= b; i++){
//         num = num * a
//     }
// return num
// }
// var answer = power(6,2)
// alert(answer)

// Q.no.2
// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         var result = year + " is a leap year";
//     } else {
//         var result = year + " is not a leap year";
//     }
//     return result
// }
// var answer = checkLeapYear(2024)
// alert(answer)

// Q.no.3

