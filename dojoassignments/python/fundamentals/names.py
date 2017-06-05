students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def output_name(lst):
    for obj in lst:
        print obj["first_name"], obj["last_name"]

output_name(students)

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
print
print

def output_more_names(obj):
    for key in obj:
        people = obj[key]
        count = 1
        for person in people:
            print str(count) + " - " + person["first_name"] + " " + person["last_name"] + " - " + str(len(person["first_name"] + person["last_name"]))
            count += 1

output_more_names(users)
    
