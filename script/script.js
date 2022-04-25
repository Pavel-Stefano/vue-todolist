const todolist = new Vue({
    el: "#list",
    data: {
      tiramisu: [
        {
          ingredientName: "zucchero",
          qnt: 120,
          check: false,
        },
  
        {
          ingredientName: "mascarpone",
          qnt: 500,
          check: false,
        },
  
        {
          ingredientName: "uova",
          qnt: 150,
          check: false,
        },
  
        {
          ingredientName: "caffè",
          qnt: 100,
          check: false,
        },
  
        {
          ingredientName: "savoiardi",
          qnt: 500,
          check: false,
        },
  
        {
          ingredientName: 'cacao',
          qnt: 20,
          check: false
      },
  
      {
          ingredientName: 'grand marnier',
          qnt: 75 ,
          check: false
      }
      ],
  
      newIngredient:''
    },
    methods: {
  
      addIngredient(){
  
        const ingrediente = {
          check: false,
          ingredientName: this.newIngredient,
        }
        this.tiramisu.push(ingrediente)
  
  
      },
  
      removeIngredient(i){
        this.tiramisu.splice(i,1)
  
      }
    },
  
  });