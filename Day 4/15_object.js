//destructuring array ki bhi hoti hain object ki bhi hoti hain

const course={
    coursename:"Js in Hindi",
    price:"999",
    courseInstructor :"Hitesh sir"
}

// course.courseInstructor  //not a good practice

//const {courseInstructor} =course  //good practice

const{courseInstructor: instructor }=course



// console.log(courseInstructor);   //Hitesh Sir
console.log(instructor);         //Hitesh Sir


//apna kaam kisi aur par daalna api kehlata hain

// eg restaunt mein khana kaise banege wo mera kaam nahi hain mujhe to bas order karna hain 

// menu card is the docmentation

// eg of api =random User me  
// convert json format

//api array ki format mein bhi milti hain
// randomuserme api