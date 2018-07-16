const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture=[]
HomeInventoryDatabase.animals=[]
HomeInventoryDatabase.electronics=[]

const couch = { 
    name:" big couch",
    location:"living room",
    description :"black and brown sectional"
}
const treadmill = {
    Name:"treadmill",
    location : "library",
    description :"a lovley treadmill"
}
const dog ={
    name:"Sam",
    location :"somewhere in the house",
    description:"food hound"
}
const cat ={
    name :"Molly",
    location:"On the back of the couch",
    description :"Lazy ass  cat"
}
const television ={
    name :"television",
    location:"living room",
    description:"the watching box"
}
const radio ={
    name :"radio",
    location :"shower",
    description:"the listening cube"
}
HomeInventoryDatabase.furniture.push(couch , treadmill)
HomeInventoryDatabase.animals.push(dog , cat)
HomeInventoryDatabase.electronics.push(television , radio)

console.log(HomeInventoryDatabase);


const myJson = JSON.stringify(HomeInventoryDatabase);
localStorage.setItem(HomeInventoryDatabase,myJson

)
