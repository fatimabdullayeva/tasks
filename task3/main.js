let send=document.querySelector('.send')
let name = document.querySelector('.nameinput')
let message = document.querySelector('.messageinput')
let show=document.querySelector('.show');
let history = document.querySelector('.history')

class Message{
    constructor(name, message) {
        this.name = name;
        this.date=new Date();
        this.message = message;
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
      toString(){
        return(`${this.gettime()} ${this.name}: ${this.message}`)
      }
}
class Messenger{
    list=[];
    send(name,message){
        let newmessage=new Message(name,message)
        this.list.push(newmessage)
    };
    show_history(){
        for(let i=0;i<this.list.length;i++){
            console.log(this.list[i].toString())
        }
    }
}

let messenger = new Messenger()

send.addEventListener('click',(e)=>{
    if(name.value=='' || message.value==''){
        alert("sahələr dolu olmalıdır")
    }else{
        messenger.send(name.value, message.value)
        name.value='';
        message.value='';
    }
})
show.addEventListener('click',(e)=>{
    let data='';
    for(let i=0;i<messenger.list.length;i++){
        data+=messenger.list[i].toString()+`<br>`
    }
    history.innerHTML=` ${data}`
})