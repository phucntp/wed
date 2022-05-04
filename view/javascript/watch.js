// // let item = document.getElementsByClassName("item_watch");
// // for(let i = 0; i < 5; i++){
// //     item[i].style.display = 'none';
// // }
// // for(let i = 10; i < 15; i++){
// //     item[i].style.display = 'none';
// // }
// // function left(){
// //     let i = 0;
// //     while(i < 5){
// //         item[10 - i].style.display = 'none';
// //         item[5 - i].style.display = 'block';
// //         i++;
// //     }
// // }

// // function right(){
// //     let i = 0;
// //     while(i < 10){
// //         item[10 + i].style.display = 'block';
// //         item[5 - i].style.display = 'none';
// //         i++;
// //     }
// // }

// // let item = document.getElementsByClassName("item_watch");

// // for(let i = 5;i < item.length; i++){
// //     item[i].style.display = 'none';
// // }

// // function right(){
// //     let i;
// //     for(i = 0; i < item.length; i++){
// //         item[i].style.display = 'none';
// //         item[i + 5].style.display = 'block';
// //         break;
// //     }
// // }

// // function left(){
// //     let i;
// //     for(i = 0; i < item.length; i++){
// //         item[i].style.display = 'none';
// //         item[i + 5].style.display = 'block';
// //     }
// // }
// let slideIndex = 1;
// showSlideWatch(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlideWatch(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlideWatch(slideIndex = n);
// }

// function showSlideWatch(n) {
//   let i;
//   let itemWatch = document.getElementsByClassName("item_watch");
//   if (n > itemWatch.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = itemWatch.length}
//   for (i = 0; i < itemWatch.length; i++) {
//     itemWatch[i].style.display = "none";
//   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
//   itemWatch[slideIndex-1].style.display = " block";
// //   dots[slideIndex-1].className += " active";
// }