export default function data2(index) {
    let result = [];

    let dishes1 = [
        "Овсяная каша|200", 
        "Гречневая каша|200", 
        "Рисовая каша|200"

    ]

    let dishes2 = [
        "Ланч|100", 

    ]
   
    let dishes3 = [
        "Суп Чижик|100, Макароны|100, Овощной_салат|100", 
        "Борщ Пятерочка", 
        "Том Ям Самокат"
    ]  

    let dishes4 = [
        "Чай|100"

    ]

    let dishes5 = [
        "чай|300",
        
    ]

    let dish1 = dishes1[index % dishes1.length]

    result.push({'title': dish1})
    result.push({'title': dishes2[index % dishes2.length]})
    result.push({'title': dishes3[index % dishes3.length]})
    result.push({'title': dishes4[index % dishes4.length]})
    result.push({'title': dishes5[index % dishes5.length]})
    return result;
}