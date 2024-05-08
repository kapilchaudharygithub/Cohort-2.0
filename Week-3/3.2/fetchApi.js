//? Create an HTML page where
//~ 1. You can see the names of 10 people
//~ 2. You  need to make sure you get  these data from API call.
      const button = document.querySelector(".btn");
      //   button.addEventListener(onclick(getAnimalData));
      button.addEventListener("click", getAnimalData);

      async function getAnimalData() {
        const api = await fetch("https://fakerapi.it/api/v1/persons");
        const data = await api.json();
        const para = document.createElement("p");
        const container = document.querySelector(".container");

        data.data.forEach((user) => {
          para.innerText = user.firstname;
          container.appendChild(para); 
        });
      }

      //   getAnimalData();
  
