document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    let count = 0;
    const target = 500;
    const increment = 10; 
    const intervalTime = 50; 
    const delay = 3000; 
  
    function startCounter() {
      count = 0;
      const interval = setInterval(() => {
        count += increment;
        counterElement.innerText = count + "+";
        if (count >= target) {
          clearInterval(interval);
          setTimeout(startCounter, delay); 
        }
      }, intervalTime);
    }
  
    startCounter();
  });