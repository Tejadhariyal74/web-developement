let students=["shubh ","anjali","shivam","shivani","teja","rishabh"]
let houses=[]
for (const student of students ) {
    if (student.length<6) {
        houses.push("Gryfinder")
    }
  else if (student.length<8) {
    houses.push("hufflepuff")
  } 
  else if (student.length<12) {
    houses.push("Ravenclaw")
  } else {
    houses.push("style")
  }  
}
console.log(students,houses)