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
let DESCRIPTION = []
let DISCOUNT = []
let img = []

const dbRefObject = firebase.database().ref().child('promotion')
dbRefObject.on('value', snap => {
    let data = snap.val()
    console.log(data)
    Object.keys(data).forEach(function(key){
        DESCRIPTION.push(data[key].DESCRIPTION)
        DISCOUNT.push(data[key].DISCOUNT)
        img.push(data[key].img)
    })
    DESCRIPTION.forEach(function(element,i){
        if (index%3 == 0){
            let box = document.createElement('div')
            box.className = 'Box'
            box.setAttribute('style','display:flex;overflow;none')
            box.setAttribute('name','proBOX')
            document.getElementsByTagName('main')[0].appendChild(box)
            index2++
        }
        createBox(DESCRIPTION[i],DISCOUNT[i],img[i])
        index++
    })
    while(index%3!=0){
        let box = document.createElement('div')
        box.className = 'Box'
        box.setAttribute('style','display:flex;overflow;none;flex-direction:column;flex:1')
        document.getElementsByName('proBOX')[index2].appendChild(box)
        index++
    }
})

function createBox(DESCRIPTION,DISCOUNT,img){
    let box = document.createElement('div')
    box.className = 'Box2'
    box.setAttribute('style','display:flex;overflow;none;flex-direction:column;flex:1;justify-content:center')
    // 
    let description = document.createElement('p')
    description.innerHTML = DESCRIPTION
    description.setAttribute('style','flex:1')
    // 
    let discount = document.createElement('p')
    discount.innerHTML = DISCOUNT
    discount.setAttribute('style','flex:1')
    // 
    let pic = document.createElement('img')
    pic.setAttribute('src',img)
    pic.setAttribute('style','max-height: 250px;height: auto; width:250px;flex:1')
    // 
    box.appendChild(pic)
    box.appendChild(description)
    box.appendChild(discount)
    document.getElementsByName('proBOX')[index2].appendChild(box)
}
