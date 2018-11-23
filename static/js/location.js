(function () {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAFKdrpw1A3rndo-q-iCor-6BMcW15MmCo",
        authDomain: "carryrental.firebaseapp.com",
        databaseURL: "https://carryrental.firebaseio.com",
        projectId: "carryrental",
        storageBucket: "carryrental.appspot.com",
        messagingSenderId: "44637103764",
    }
    firebase.initializeApp(config)
}())
let index = 0
let index2 = -1
let STREETNAME = []
let PHONE = []
let EMAIL = []
let img = []
const dbRefObject = firebase.database().ref().child('location')
dbRefObject.on('value', snap => {
    let data = snap.val()
    console.log(data)
    Object.keys(data).forEach(function(key){
        STREETNAME.push(data[key].STREETNAME)
        PHONE.push(data[key].PHONE)
        EMAIL.push(data[key].EMAIL)
        img.push(data[key].img)
    })
    STREETNAME.forEach(function(element,i){
        if (index%2 == 0){
            let box = document.createElement('div')
            box.className = 'Box'
            box.setAttribute('style','display:flex;overflow;none')
            box.setAttribute('name','loBOX')
            document.getElementsByTagName('main')[0].appendChild(box)
            index2++
        }
        createBox(STREETNAME[i],PHONE[i],EMAIL[i],img[i])
        index++
    })
    while(index%2!=0){
        let box = document.createElement('div')
        box.className = 'Box'
        box.setAttribute('style','display:flex;overflow;none;flex-direction:column;flex:1;')
        document.getElementsByName('loBOX')[index2].appendChild(box)
        index++
    }
})

function createBox(STREETNAME,PHONE,EMAIL,img){
    let box = document.createElement('div')
    box.className = 'Box2'
    box.setAttribute('style','display:flex;overflow;none;flex-direction:column;flex:1;justify-content: center')
    // 
    let streetname = document.createElement('p')
    box.className = 'Box2'
    streetname.innerHTML = "Branch "+STREETNAME
    streetname.setAttribute('style','flex:1')
    // 
    let phone = document.createElement('p')
    box.className = 'Box2'
    phone.innerHTML = "Phone no. "+PHONE
    phone.setAttribute('style','flex:1')
    // 
    let email = document.createElement('p')
    box.className = 'Box2'
    email.innerHTML = "Email : "+EMAIL
    email.setAttribute('style','flex:1')
    // 
    let pic = document.createElement('img')
    box.className = 'Box2'
    pic.setAttribute('src',img)
    pic.setAttribute('style','max-height: 200px;height: auto;width:450px;flex:1')
    // 
    box.appendChild(pic)
    box.appendChild(streetname)
    box.appendChild(phone)
    box.appendChild(email)
    document.getElementsByName('loBOX')[index2].appendChild(box)
}
