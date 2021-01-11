let Stories = document.querySelector(".container")
let StoryContainer = Stories.querySelector(".story-container")
let NextStory = document.querySelector(".next-story")
let PrevStory = document.querySelector(".prev-story")
let StoryWidth = document.querySelector(".add-story")
let AllStories = document.querySelectorAll(".card-styles")

StoryContainer.style.width = (AllStories.length - 2) * 200 - 20 + "px" 
if (AllStories.length > 5) {
    PrevStory.style.display = "block"
    NextStory.style.display = "block"
} else {
    PrevStory.style.display = "none"
    NextStory.style.display = "none" 
}

NextStory.addEventListener("click", () => {
    Stories.scrollLeft += StoryWidth.clientWidth + 5
})

PrevStory.addEventListener("click", () => {
    Stories.scrollLeft -= StoryWidth.clientWidth + 5
})

