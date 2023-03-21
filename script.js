let quotes = document.querySelector(".quote");
let names = document.querySelector("#name");
let next = document.querySelector("#button");

//we put the quotes in an arrey

const quoteArray = [{
    quote: "Its none of their business that you have to learn how to write. Let them think you were born that way.",
    name: "Ernest Hemingway"
},
{
    quote: "Good writing is remembering detail. Most people want to forget. Dont forget things that were painful or embarrassing or silly. Turn them into a story that tells the truth.",
    name: " Paula Danziger"
},
{
    quote: "And by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt.",
    name: "Sylvia Plath"
},
{
    quote: "As a writer] you have to have the three Ds: drive, discipline and desire. If you are missing any one of those three, you can have all the talent in the world, but it is going to be really hard to get anything done.",
    name: " Nora Roberts"
},
{
    quote: "We will open the book. Its pages are blank. We are going to put words on them ourselves. The book is called Opportunity and its first chapter is New Year Day.",
    name: "Edith Lovejoy Pierce"
},
{
    quote: "Beginning a novel is always hard. It feels like going nowhere. I always have to write at least 100 pages that go into the trashcan before it finally begins to work. It is discouraging, but necessary to write those pages. I try to consider them pages -100 to zero of the novel.",
    name: "Barbara Kingsolver"
},
{
    quote: "You have to follow your own voice. You have to be yourself when you write. In effect, you have to announce, This is me, this is what I stand for, this is what you get when you read me. I am doing the best I can—buy me or not—but this is who I am as a writer.",
    name: "David Morrell"
},
{
    quote: "A writer is a person for whom writing is more difficult than it is for other people.",
    name: "Thomas Mann"
},
{
    quote: "Sometimes the ideas just come to me. Other times I have to sweat and almost bleed to make ideas come. It is a mysterious process, but I hope I never find out exactly how it works. I like a mystery, as you may have noticed.",
    name: "J.K. Rowling"
},
{
    quote: "There is no greater threat to the critics and cynics and fearmongers than those of us who are willing to fall because we have learned how to rise.",
    name: "Brené Brown"
}]

next.addEventListener("click", function(){
    let random = Math.floor(Math.random()* quoteArray.length);

    quotes.innerText = quoteArray[random].quote;
    names.innerText = quoteArray[random].name;
})