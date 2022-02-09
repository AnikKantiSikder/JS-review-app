// local reviews data
const reviews = [
  {
    id: 1,
    name: "Anik Kanti Sikder",
    job: "web developer",
    img:
      "person-1.JPG",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Niaz Rahman",
    job: "web designer",
    img:
      "person-2.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Rasheed Khan",
    job: "intern",
    img:
      "person-3.JPG",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Abir Azim",
    job: "the boss",
    img:
      "person-4.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// Select image
const img = document.getElementById("person-img");
//Select author
const author = document.getElementById("author");
//Select job
const job = document.getElementById("job");
//Select info
const info = document.getElementById("info");

//Select the buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//Load initial item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem);
});

//Show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//Show next person
nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
})
//Show previous person
prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = 0;
  }
  showPerson(currentItem);
});

//Show random person 
randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});