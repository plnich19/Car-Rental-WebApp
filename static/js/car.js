(function () {
   // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAFKdrpw1A3rndo-q-iCor-6BMcW15MmCo",
    authDomain: "carryrental.firebaseapp.com",
    databaseURL: "https://carryrental.firebaseio.com",
    projectId: "carryrental",
    storageBucket: "carryrental.appspot.com",
    messagingSenderId: "44637103764"
  }
  firebase.initializeApp(config)
}())
let index = 0
let index2 = -1
let carBRAND = []
let carNAME = []
let carTYPE = []
let carPRICE = []
let img = []
const dbRefObject = firebase.database().ref().child('car')
dbRefObject.on('value', snap => {
    let data = snap.val()
    console.log(data)
    Object.keys(data).forEach(function(key){
        carBRAND.push(data[key].carBRAND)
        carNAME.push(data[key].carNAME)
        carTYPE.push(data[key].carTYPE)
        carPRICE.push(data[key].carPRICE)
        img.push(data[key].img)
    })
    carBRAND.forEach(function(element,i){
        if (index%3 == 0){
            let box = document.createElement('div')
            box.className = 'Box'
            box.setAttribute('style','display:flex;overflow;none')
            box.setAttribute('name','carBOX')
            document.getElementsByTagName('main')[0].appendChild(box)
            index2++
        }
        createBox(carBRAND[i],carNAME[i],carTYPE[i],carPRICE[i],img[i])
        index++
    })
    while(index%3!=0){
        let box = document.createElement('div')
        box.className = 'Box'
        box.setAttribute('style','display:flex;overflow;none;flex-direction:column;flex:1')
        document.getElementsByName('carBOX')[index2].appendChild(box)
        index++
    }
})

function createBox(carBRAND,carNAME,carTYPE,carPRICE,img){
    let box = document.createElement('div')
    box.className = 'Box2'
    box.setAttribute('style','display:flex;overflow;none;flex-direction:column;flex:1;justify-content: center')
    // 
    let carbrand = document.createElement('p')
    carbrand.innerHTML = "Brand : "+carBRAND
    carbrand.setAttribute('style','flex:1')
    // 
    let carname = document.createElement('p')
    carname.innerHTML = "Model : "+carNAME
    carname.setAttribute('style','flex:1')
    // 
    let cartype = document.createElement('p')
    cartype.innerHTML = "Type : "+carTYPE
    cartype.setAttribute('style','flex:1')
    //
    let carprice = document.createElement('p')
    carprice.innerHTML = "Price : "+carPRICE+" Baht/day"
    carprice.setAttribute('style','flex:1')
    // 
    let pic = document.createElement('img')
    pic.setAttribute('src',img)
    pic.setAttribute('style','max-height: 200px;height: auto;width:250px;flex:1')
    // 
    box.appendChild(pic)
    box.appendChild(carbrand)
    box.appendChild(carname)
    box.appendChild(cartype)
    box.appendChild(carprice)
    document.getElementsByName('carBOX')[index2].appendChild(box)
}
