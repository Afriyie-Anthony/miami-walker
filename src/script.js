 // Get all elements from the DOM
 const counters = document.querySelectorAll(".counters span");
 const container = document.querySelector(".counters");

 let activated = false;

 window.addEventListener("scroll", () => {
   // Check if the user has scrolled into the container section
   if (window.pageYOffset > container.offsetTop - window.innerHeight + 200 && !activated) {
     counters.forEach(counter => {
       let count = 0;
       const target = parseInt(counter.dataset.count);

       function updateCount() {
         if (count < target) {
           count++;
           counter.innerText = count;
           setTimeout(updateCount, 120);
         } else {
           counter.innerText = target;
         }
       }
       updateCount();
     });
     activated = true;
   } else if (window.pageYOffset < container.offsetTop - window.innerHeight + 500 && activated) {
     counters.forEach(counter => {
       counter.innerText = 0;
     });
     activated = false;
   }
 });