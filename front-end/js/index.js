const questions = [
    {
        "question": "Which is the most important thing you look for in a friend?",
        "choices": [
            "Loyalty",
            "Social Status",
            "Common Interest",
            "History"
        ],
        "answer": "answerOne"
    } ,
    {
        "question":"When you are having personal problems you normally ......?" ,
        "choices":["vent to someone because talking to people help you find comfort." , "handle you problems yoursef because it's your problem to fix.", "focus on the good things and wait till the sitution gets better." , "search for advice from others that have been in similiar situations for help."] ,
        "answer":"answerTwo"

    }
]

let count = 0
function askQuestion (){

    document.getElementById("question").innerHTML = questions[count].question
    document.get
}