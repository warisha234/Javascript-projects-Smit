// Randam quotation generator

let quotes = ["Be the change that you wish to see in the world.— Mahatma Gandhi","In the middle of every difficulty lies opportunity.— Albert Einstein","The only way to do great work is to love what you do.— Steve Jobs","Life is what happens when you're busy making other plans.— John Lennon","Get busy living or get busy dying.— Stephen King","Success is not final, failure is not fatal: It is the courage to continue that counts.— Winston Churchill","You miss 100% of the shots you don't take.— Wayne Gretzky","The purpose of our lives is to be happy.— Dalai Lama","Life is really simple, but we insist on making it complicated.— Confucius","Your time is limited, so don’t waste it living someone else’s life.— Steve Jobs"];

function randomQuoteGenerator(){
    let randomQuote = quotes[Math.floor(Math.random()* quotes.length)];
    document.getElementById("quote-display").innerHTML = randomQuote;
}