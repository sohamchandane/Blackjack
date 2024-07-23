let cards_arr = []
let sum = 0
let won = false
let isAlive = false
let message = ""
let card_text = ""

let player = {
    name: "Per",
    chips: 25,

    updateDetails: function(){
        document.querySelector("#player-details").innerText = player.name + ": " + player["chips"]
    }
}


function startgame(){
    let card1 = Math.floor(Math.random() * 12)
    let card2 = Math.floor(Math.random() * 12)
    isAlive = true
    sum = card1 + card2
    cards_arr = [card1, card2]
    checkcondition()
}

function checkcondition(){
    if (sum<21){
        message = "Do you want to draw a card"
    }
    else if (sum==21){
        message = "You have won the blackjack"
        won = true
        player.chips += 10
    }
    else{
        message = "You are out"
        isAlive = false
        player.chips -= 15
    }
    
    document.getElementById("msg").innerText = message
    for (let i=0; i<cards_arr.length; i++){
        card_text += " " + cards_arr[i]
    }
    document.getElementById("cards").innerText = "Cards: " + card_text
    document.querySelector("#sum").innerText = "Sum: " + sum
    card_text=""

    player.updateDetails()
}


function drawcard(){
    if (isAlive==true && won==false){
        let card3 = Math.floor(Math.random() * 12)
        cards_arr.push(card3)
        sum += card3
        checkcondition()
    }
    player.updateDetails()
}