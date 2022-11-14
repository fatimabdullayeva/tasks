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
    arr=[];
    send(name,message){
        let newmessage=new Message(name,message)
        this.arr.push(newmessage)
    };
    show_history(){
        for(let i=0; i<this.arr.length;i++){
            console.log(this.arr[i].toString())
        }
    }
}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()