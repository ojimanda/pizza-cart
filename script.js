// Remove topping for pizza

//pizza 1
const listPizza = document.querySelectorAll('input[name="list-pizza"]');

listPizza.forEach((pizza) => {
  pizza.addEventListener("click", () => {
    if (pizza.id == "pizza-1") {
      //avocado
      const avocado = document.querySelector('input[name="avocado"]');

      avocado.removeAttribute("disabled");
      //lobster
      const lobster = document.querySelector('input[name="lobster"]');

      lobster.setAttribute("disabled", "disabled");
      //bacon
      const bacon = document.querySelector('input[name="bacon"]');

      bacon.setAttribute("disabled", "disabled");
      //broccoli
      const broccoli = document.querySelector('input[name="broccoli"]');

      broccoli.removeAttribute("disabled");
      //oyster
      const oyster = document.querySelector('input[name="oyster"]');

      oyster.setAttribute("disabled", "disabled");
      //duck
      const duck = document.querySelector('input[name="duck"]');

      duck.setAttribute("disabled", "disabled");
      //onions
      const onions = document.querySelector('input[name="onions"]');

      onions.removeAttribute("disabled");
      //salmon
      const salmon = document.querySelector('input[name="salmon"]');

      salmon.setAttribute("disabled", "disabled");
      //ham
      const ham = document.querySelector('input[name="ham"]');

      ham.removeAttribute("disabled");
      //zucchini
      const zucchini = document.querySelector('input[name="zucchini"]');

      zucchini.removeAttribute("disabled");
      //tuna
      const tuna = document.querySelector('input[name="tuna"]');

      tuna.removeAttribute("disabled");
      //sausage
      const sausage = document.querySelector('input[name="sausage"]');

      sausage.setAttribute("disabled", "disabled");
    } else if (pizza.id == "pizza-2") {
      //avocado
      const avocado = document.querySelector('input[name="avocado"]');

      avocado.setAttribute("disabled", "disabled");
      //lobster
      const lobster = document.querySelector('input[name="lobster"]');

      lobster.removeAttribute("disabled");
      //bacon
      const bacon = document.querySelector('input[name="bacon"]');

      bacon.removeAttribute("disabled");
      //broccoli
      const broccoli = document.querySelector('input[name="broccoli"]');

      broccoli.removeAttribute("disabled");
      //oyster
      const oyster = document.querySelector('input[name="oyster"]');

      oyster.removeAttribute("disabled");
      //duck
      const duck = document.querySelector('input[name="duck"]');

      duck.setAttribute("disabled", "disabled");
      //onions
      const onions = document.querySelector('input[name="onions"]');

      onions.removeAttribute("disabled");
      //salmon
      const salmon = document.querySelector('input[name="salmon"]');

      salmon.removeAttribute("disabled");
      //ham
      const ham = document.querySelector('input[name="ham"]');

      ham.removeAttribute("disabled");
      //zucchini
      const zucchini = document.querySelector('input[name="zucchini"]');

      zucchini.removeAttribute("disabled");
      //tuna
      const tuna = document.querySelector('input[name="tuna"]');

      tuna.setAttribute("disabled", "disabled");
      //sausage
      const sausage = document.querySelector('input[name="sausage"]');

      sausage.setAttribute("disabled", "disabled");
    } else if (pizza.id == "pizza-3") {
      //avocado
      const avocado = document.querySelector('input[name="avocado"]');

      avocado.setAttribute("disabled", "disabled");
      //lobster
      const lobster = document.querySelector('input[name="lobster"]');

      lobster.setAttribute("disabled", "disabled");
      //bacon
      const bacon = document.querySelector('input[name="bacon"]');

      bacon.removeAttribute("disabled");
      //broccoli
      const broccoli = document.querySelector('input[name="broccoli"]');

      broccoli.removeAttribute("disabled");
      //oyster
      const oyster = document.querySelector('input[name="oyster"]');

      oyster.setAttribute("disabled", "disabled");
      //duck
      const duck = document.querySelector('input[name="duck"]');

      duck.removeAttribute("disabled");
      //onions
      const onions = document.querySelector('input[name="onions"]');

      onions.removeAttribute("disabled");
      //salmon
      const salmon = document.querySelector('input[name="salmon"]');

      salmon.setAttribute("disabled", "disabled");
      //ham
      const ham = document.querySelector('input[name="ham"]');

      ham.removeAttribute("disabled");
      //zucchini
      const zucchini = document.querySelector('input[name="zucchini"]');

      zucchini.removeAttribute("disabled");
      //tuna
      const tuna = document.querySelector('input[name="tuna"]');

      tuna.removeAttribute("disabled");
      //sausage
      const sausage = document.querySelector('input[name="sausage"]');

      sausage.removeAttribute("disabled");
    }
  });
});

// setClass for topping if click
const toppings = document.querySelectorAll('input[type="checkbox"]');

toppings.forEach((topping) => {
  topping.addEventListener("click", () => {
    topping.classList.toggle("active");
  });
});

// set Price

listPizza.forEach((pizza) => {
  pizza.addEventListener("click", () => {
    let price = parseInt(pizza.value);
    const listSize = document.querySelectorAll('input[name="list-size"]');
    listSize.forEach((size) => {
      size.addEventListener("click", () => {
        let newPrice = price + parseInt(size.value);
        const tagPrice = document.querySelector(".total-price");
        tagPrice.innerHTML = `$ ${newPrice}`;

        // const toppings = document.querySelectorAll('input[type="checkbox"]');
        // toppings.forEach((topping) => {
        //   let priceFix = newPrice + parseInt(topping.value);
        // });
      });
    });
  });
});
