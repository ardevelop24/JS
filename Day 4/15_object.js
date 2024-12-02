//destructuring array ki bhi hoti hain object ki bhi hoti hain

const course={
    coursename:"Js in Hindi",
    price:"999",
    courseInstructor :"Hitesh sir"
}

// course.courseInstructor  //not a good practice

//const {courseInstructor} =course  //good practice

const{courseInstructor: instructor }=course



// console.log(courseInstructor);
console.log(instructor);


//apna kaam kisi aur par daalna api kehlata hain

// eg of api =random User me  
// convert json format