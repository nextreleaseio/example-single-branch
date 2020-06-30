console.log('hello');

const my thing = enum MyEnum {
  stuff = string;
  moreStuff = boolean;
  };

  interface ICarramba { 
    stuff = string;
    things = number;
  } 


  function myNewFunction(data: any, choices: MyEnum) {
    data.choice = choices[data.choice]
    return data
  }
