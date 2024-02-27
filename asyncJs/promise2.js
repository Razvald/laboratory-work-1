function delay(N) {
   return new Promise(resolve => setTimeout(resolve, N * 1000));
}

// Пример использования:
delay(3).then(() => {
   console.log('Прошло 3 секунды');
});

function countDownFrom(N) {
   if (N < 0) return;
   console.log(N);
   delay(1).then(() => countDownFrom(N - 1));
}

// Пример использования:
countDownFrom(5);


function getFirstRepository(username) {
   return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         return response.json();
      })
      .then(repositories => {
         if (repositories.length > 0) {
            return repositories[0].name;
         } else {
            throw new Error('User has no repositories');
         }
      });
}

// Пример использования:
getFirstRepository('Razvald')
   .then(repositoryName => {
      console.log(`Первый репозиторий пользователя: ${repositoryName}`);
   })
   .catch(error => {
      console.error('Ошибка:', error);
   });
