var a= 'hello';

function hello(){
    let b = 'hello word';
    const c ='Hello word!';
    debugger;
}

hello();



const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //🤔?
multiply(); //🤔?
multiply(value); //🤔?
multiply(value); //🤔?
multiply(value); //🤔?
multiply(); //🤔?
multiply(); //🤔?