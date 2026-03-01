let userscore = 0;
let compuser=0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uscore = document.querySelector("#u-score");
let cscore = document.querySelector("#c-score");
const draw = ()=>{
    msg.innerText = "Match Draw";
    msg.style.backgroundColor = "aqua";
}
const update=(userwin)=>{
    if(userwin){
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        userscore++;
        uscore.innerText = userscore;
    }
    else{
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
        compuser++;
        cscore.innerText = compuser;
    }
}
const winner = (userchoice,compchoice) => {
    userwin = true;
    if(userchoice==="rock"){
        userwin = compchoice === "paper" ? false : true;
    }
    else if(userchoice==="paper"){
        userwin = compchoice==="scissors" ? false:true;
    }
    else{
        userwin = compchoice==="rock"?false:true;
    }
    update(userwin);
}
const generatecc = () => {
    const cchoices = [ "rock" , "paper" ,"scissors"];
    let idx = Math.floor(Math.random()*3);
    return cchoices[idx];
}
const playGame= (userchoice)=>{
    const compchoice = generatecc();
    if(compchoice===userchoice){
        draw();
    }
    else{
        winner(userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});