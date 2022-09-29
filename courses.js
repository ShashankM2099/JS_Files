// Exercise 1: ITIS 4166
const courses = [{
    prefix: 'ITIS',
    id: 5166,
    title: 'Network based app development'
},
{
    prefix: 'ITIS',
    id: 5180,
    title: 'Mobile application development'
},
{
    prefix: 'ITCS',
    id: 5156,
    title: 'Applied machine learning'
},
{
    prefix: 'ITCS',
    id: 5160,
    title: 'Database systems'
}
];
//return course that matches the id -- find the ID
function findById(id) {
    return courses.find(course => course.id === id);
}

//To do: implement removeById(id) -- delete the course
function removeById(id) {
    let index = courses.findIndex(course => course.id == id);

    if (index != -1) {
        courses.splice(index, 1); 
        return true;
    }
    return false;
    // return delete courses.find(course =>course.id==id);
}

//To do: implement findByPrefix(prefix) -- finding by prefix
function findByPrefix(prefix) {
    let result = [];
    courses.forEach(course => {
        if (course.prefix == prefix) {
            result.push(course);
        }
    });
    return result;
    //return courses.find(course => course.prefix === prefix);
}

//To do: implement save(course) --to add courses
function save(course) {
    courses.push(course);
}

//To do: implement updateById(id, course) -- add another courses
function updateById(id, course) {
    let index = courses.findIndex(course => course.id == id);
    if (index != -1) {
        courses[index] = course;
        return true;
    }
    return false;
}

//To do: uncomment the following testing code when you are ready to test your functions
save({ prefix: 'ITIS', id: 5250, title: 'Computer forensics' });
save({ prefix: 'ITIS', id: 6220, title: 'Data privacy' });
save({ prefix: 'ITIS', id: 6420, title: 'Usable security and privacy' });

console.log(courses);
console.log(findById(5166));
console.log(findByPrefix('ITIS'));
console.log(removeById(6000));
console.log(updateById(6000));
console.log(updateById(5166, {
    prefix: 'ITIS',
    id: 5166,
    title: 'Network-based app development'
}));
console.log(removeById(6420));
console.log(courses);
