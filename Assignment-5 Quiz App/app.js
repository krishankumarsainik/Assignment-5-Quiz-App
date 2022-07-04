questionData = [{ "id": 1, "answer": 3, "question": "Which was not one of Voldemort's Horcruxes?", "options": ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"] }, { "id": 2, "answer": 1, "question": "Which of these are not one of Hagrid's many pets?", "options": ["Grawp", "Fluffy", "Aragog", "Noberta"] }, { "id": 3, "answer": 3, "question": "Which class did Severus Snape always want to teach?", "options": ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"] }, { "id": 4, "answer": 3, "question": "Which Hogwarts house did Moaning Myrtle belong in?", "options": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"] }, { "id": 5, "answer": 2, "question": "What class did Neville end up teaching at Hogwarts?", "options": ["Astronomy", "Herbology", "Charms", "Muggle Studies"] }]

console.log("data", questionData
)

const container = document.createElement("div")
container.classList.add("container");

const scorediv = document.createElement("div")
scorediv.classList.add("scorediv")




for (let i = 0; i < questionData.length; i++) {
    let question = document.createElement("h4")
    question.innerHTML = questionData[i]?.question

    container.append(question)
    for (let j = 0; j < questionData?.[i].options.length; j++) {

        var options = document.createElement("input")
        options.setAttribute("type", "radio");
        options.setAttribute("id", "input");

        options.innerHTML = (questionData[i]?.options[j])
        // console.log(questionData[i]?.options[j])
        console.log(options)
        container.append(options)
    }
    container.append(scorediv)

    document.body.appendChild(container)

}
