const cardCtn = document.querySelector("#card-ctn");
const button = document.querySelector('#add');
const infoDisp = document.querySelector('#display');
const auth = document.querySelector('#auth');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
let readOption = document.querySelector('#is-read');




let myLibrary = [];


function Book(author, title, pages, isRead){

    this.author = author;
    this.title = title;
    this.pages = pages
    this.isRead = isRead;

}

function addBook(author, title, pages, isRead){


    let book = new Book (author, title, pages, isRead);

    myLibrary.push(book);
    Display();
}

function remove(){
   
}
function Display(){

    empty(cardCtn);

    

    for(let i = 0; i < myLibrary.length; i++){
        
       
        const card = document.createElement('div');
        card.classList.add('card');
        const first = document.createElement('div');
        first.classList.add('title');
        const second = document.createElement('div');
        second.classList.add('author');
        const third = document.createElement('div');
        third.classList.add('pagesCount');
        const fourth = document.createElement('label');
        fourth.classList.add('switch');
        const fifth = document.createElement('input');
        fifth.type = 'checkbox'
        const sixth = document.createElement('span');
        sixth.classList.add('slider');
        sixth.classList.add('round');
        const buttonCtn = document.createElement('div');
        buttonCtn.classList.add('button-ctn');
        const removeCtn = document.createElement('div');
        removeCtn.classList.add('removeCtn');
        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.textContent = 'Remove'
        remove.setAttribute('id', i);
        first.textContent = myLibrary[i].title;
        second.textContent = myLibrary[i].author;
        third.textContent = myLibrary[i].pages;
        
        if(myLibrary[i].isRead == true){
            fifth.checked = false;
        }else{
            fifth.checked = true;
        }

        card.appendChild(first);
        card.appendChild(second);
        card.appendChild(third);

        fourth.appendChild(fifth);
        fourth.appendChild(sixth);
        buttonCtn.appendChild(fourth);
        card.appendChild(buttonCtn);
        
        removeCtn.appendChild(remove);
        card.appendChild(removeCtn);

        card.setAttribute('id', 'card' + i);

        cardCtn.appendChild(card);
        
        


    remove.addEventListener('click', (item) => {
        let index = item.target.id
        myLibrary.splice(index, 1);
        Display();
    })
    
    }
}




function empty(element){
    while(element.firstElementChild){
        element.firstElementChild.remove();
    }
}


//Event Listeners for Buttons




button.addEventListener('click', () => {
    
    event.preventDefault();

    let isRead = false
    let userReadOption = readOption.value;



    if(userReadOption.toUpperCase() == 'YES'){
        isRead = true;
    } else{
        isRead = false;
    }

    addBook(auth.value, title.value, pages.value, isRead);
    
});

