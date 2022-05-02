// let item = document.getElementsByClassName("item_watch");
// for(let i = 0; i < 5; i++){
//     item[i].style.display = 'none';
// }
// for(let i = 10; i < 15; i++){
//     item[i].style.display = 'none';
// }
// function left(){
//     let i = 0;
//     while(i < 5){
//         item[10 - i].style.display = 'none';
//         item[5 - i].style.display = 'block';
//         i++;
//     }
// }

// function right(){
//     let i = 0;
//     while(i < 10){
//         item[10 + i].style.display = 'block';
//         item[5 - i].style.display = 'none';
//         i++;
//     }
// }

let item = document.getElementsByClassName("item_watch");

for(let i = 5;i < item.length; i++){
    item[i].style.display = 'none';
}

function right(){
    let i;
    for(i = 0; i < item.length; i++){
        item[i].style.display = 'none';
        item[i + 5].style.display = 'block';
        break;
    }
}

// function left(){
//     let i;
//     for(i = 0; i < item.length; i++){
//         item[i].style.display = 'none';
//         item[i + 5].style.display = 'block';
//     }
// }
