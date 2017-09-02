import React, { Component } from 'react';

let initialRecipe = [
      {recipeTitle:'Garlic Lemon Salmon',
      Ingridients: ['water', 'lemon', 'butter', 'garlic'],
      directions:['Place salmon fillets over of butter and garlic', 'poor the lomon', 'bake it']
      },
      {recipeTitle:'Peanut Butter and Jelly Sandwich',
      Ingridients:['Bread','Peanut butter','Jelly or Jam'],
      directions:[ 'Spread peanut butter onto one slice of bread',
                  'Spread jelly or jam evenly onto the other slice of bread',
                  'Press the two slices of bread together']
       },
      {recipeTitle:'Fry Rice Recipe',
      Ingridients:['onion', 'oil', 'egg', 'soy sauce', 'peas', 'rice', 'green onions'],
      directions:['Heat 1 tbsp oil in wok; add chopped onions and stir-fry until onions turn a brown color',
      'Mix egg with 3 drops of soy and 3 drops of oil', 'swirl egg',
      'add selected meat, along with peas and cooked onion; stir-fry',
      'Add rice and green onions tossing to mix well',
       'Add light soy sauce and chopped egg to rice mixture and fold in']
      }
]



class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    about: true,
    recipes: [],
    recipeForm: false,
    recipeTitle: '',
    Ingridients: [],
    directions: []
  };
}

  render() {
    return (
      <div className='App'>

      </div>
    );
  }
}

export default App;
