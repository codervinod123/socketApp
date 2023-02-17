// const socket=io('http://localhost:3000');
const socket=io("http://localhost:3000");
  const form=document.getElementById('send_container');
  const messageInput=document.getElementById('messageInp')
  const messageContainer=document.querySelector(".container")


const append=(message,position)=>{
     
   const messageElement=document.createElement("div");
   messageElement.innerText=message;
   messageElement.classList.add("message");
   messageElement.classList.add(position);
   messageContainer.append(messageElement);

}

form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const message=messageInput.value;
   append(`you ${message}`,'right');
   socket.emit('send',message);
   messageInput.value="";
})


const naam= prompt("Enter your name to join the chat","");

socket.emit('new-user-joined',naam);
socket.on('user-joined',naam =>{
    append(`${naam} joined the chat`,'left');
});