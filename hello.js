console.log('hello')

class MyClass {
  myField = 1;
  constructor() {
   console.log('I need more syntax highligthing in vim');
 }

  mungeData(data) {
    return this.myField + data;
  }

  mungeMoreData(data) {
    return this.mungeData(data) * data;
  }

  aLongLoop(){
    let i = Math.floor(Math.rand() * 10);

    while (i < 7) {
      console.log('This is fun');
      i++;
    }
}


function allTheThings () {
  let thing = new MyClass();
  thing.aLongLoop();
}
