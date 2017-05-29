var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function studentPrinter(studentsArray) {
	for (var student in studentsArray) {
		console.log( students[student].first_name + " " + students[student].last_name)
	}
}
//studentPrinter(students)

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }


// users is a dictionary of two keys
// key 'Students' has a value of an array, length. 4

console.log(users["Students"].length)

function printAll(usersObjects) {
	for (var usersObject in usersObjects) {
		console.log(usersObject)
		for (var x = 0; x < usersObjects[usersObject].length; x++) {

			console.log((x+1) + " - " + usersObjects[usersObject][x].first_name 
				+ " " +usersObjects[usersObject][x].last_name + " - " 
				+ (usersObjects[usersObject][x].first_name.length + 
					usersObjects[usersObject][x].last_name.length))
		}
	}
}

printAll(users)