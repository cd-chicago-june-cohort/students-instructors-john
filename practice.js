// Part I

function outputNames(arr) {
    for (var i = 0; i < arr.length; i++) {
        var first = arr[i].first_name;
        var last = arr[i].last_name;
        console.log(first, last);
    }
}

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

outputNames(students);


// Part II

function outputNamesII(obj) {
    for (var i in obj) {
        var count = 1;
        console.log(i);
        for (var j = 0; j < obj[i].length; j++) {
            var first = obj[i][j].first_name.toUpperCase();
            var last = obj[i][j].last_name.toUpperCase();
            var fullName = first + last;
            console.log(count.toString(), "-", first, last, "-", fullName.length.toString());
            count++;
        }
    }
}


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


 outputNamesII(users);