const counters = document.querySelectorAll(".counter-number");
const speed = 100;

counters.forEach(counter =>{
    const updateCount = () => {
        const target =+ counter.getAttribute("data-target"); //It gets the data target value.
        //we transform text to number with the =+
        //typeof
        const count =+ counter.innerText; //The initial value of the h1 element.
        const increment = Math.round(target / speed); //Value in which each h1 element will increase.


        if (count < target){
            counter.innerText = count + increment;
            setTimeout(updateCount, 1); //to call the function each 1 ms
        } else {
            counter.innerText = target;
        }
        
    }

    updateCount();
});

