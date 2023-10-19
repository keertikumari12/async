function makeChese()
{
    return new Promise(function(resolve,reject){
        console.log('start making chesse.....');
        setTimeout(()=>{
            const chesse='🧀';
            console.log(`chesee is ready${chesse}`)
            resolve(chesse);
        },3000);
    })
}

function makeBase(){
    return new Promise(function(resolve,reject){
        console.log('start making pizza base ')
        setTimeout(()=>{
            const base='🍞'
            console.log(`base is ready${base}`)
            resolve(base);
        },3000)
    })
}

function addTopping(){
    console.log('add topping');
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const topping='🍅';
            console.log(`topping is added ${topping}`)
            resolve(topping);
        },3000);
    })
   
}

async function makepizza()
{
    const getchesse=await makechesse();
    console.log(getchesse)
    const base = await makebase();
    console.log(base);
    const topping=await addTopping();
    console.log(topping);
}
makePizza();

makeChese()
.then(makeBase())
.then(addTopping())
.then(()=>{
    
})