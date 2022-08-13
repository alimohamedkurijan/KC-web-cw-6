alert(`مرحبا بك في موقعي الذي سيحسب درجنك`)



let  grade =  prompt(`ادخل درجتك هنا` );
console.log(grade)

if (  grade >= 90 &&  grade <= 100 ){


console.log(`%cلقد حصلت على امتياز 🥳`, "color:green")

} else if( grade >= 80 && grade <=89 ){


console.log( `%cلقد حصلت على جيد جداً🤩`,"color:green" )

} else if ( grade >= 70 && grade <=79){

console.log(`%cلقد حصلت على امتياز 🥳`, "color: green")


}else if ( grade >=60 && grade <=69){

    console.log(`%c لقد حصلت على جيد🙂`, "color:green")
}else if (grade >= 50 && grade <=59 ){


console.log(`%cلقد حصلت على مقبول😕`, "color:green")

} else if ( grade <= 50) {

    console.log(`%cراسب`, "color:green")


}





// جافاسكربت ليست جافا



