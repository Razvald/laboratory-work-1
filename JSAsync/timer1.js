function counter(n) {
   let current = n;

   let timerId = setInterval(function () {
      console.log(current);
      if (current === 0) {
         clearInterval(timerId);
      }
      current--;
   }, 1000);
}

function createCounter(n) {
   let current = n;
   let timerId;

   return {
      start() {
         timerId = setInterval(function () {
            console.log(current);
            if (current === 0) {
               clearInterval(timerId);
            }
            current--;
         }, 1000);
      },
      pause() {
         clearInterval(timerId);
      },
      stop() {
         clearInterval(timerId);
         current = n;
      }
   };
}

// Пример использования:
let counterObj = createCounter(5);
counterObj.start();
counterObj.pause();
counterObj.stop();