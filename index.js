const quotes = [
    "Dream big. Start small. Act now.",
    "Success is a journey, not a destination.",
    "Do what you love. Love what you do.",
    "Stay humble. Work hard. Be kind.",
    "Progress, not perfection.",
    "Believe in yourself and anything is possible.",
    "Small steps lead to big changes.",
    "You are stronger than you think.",
    "Focus on the good and the good gets better.",
    "Turn obstacles into opportunities.",
]

const usedIndex = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote(){
    //quoteElement.innerHTML = "Hi Shenaz"
    if (usedIndex.length >= quotes.length){
        
        usedIndex.clear()
    }
    while(true){
        const randomIndex = Math.floor(Math.random()* quotes.length)
        
        if(usedIndex.has(randomIndex)) continue
        const quote = quotes[randomIndex]
        quoteElement.innerHTML = quote;
        console.log(usedIndex.length,quotes.length)
        usedIndex.add(randomIndex)
        break
    }
    
}