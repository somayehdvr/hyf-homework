let name = "";
let toDoList = [];

function getReply(command){
    // lowercase command and split it into commandWords array
   const commandWords = command.toLowerCase().split(" ");
   let response = null;

   if (name && commandWords[0] == "hello"){
    console.log("you've already introduced yourself") 
    return 
   }

   let toDoText = "";
   switch(commandWords[0]) {
      case "hello":
        name = commandWords.pop();
        response = "nice to meet you " + name; break;

      case "what":
        switch(true) {
            case commandWords.includes("name"):{
              if (name === ""){
                response = "sorry! you have not told us your name yet!"; break;
              }
              response = `your name is ${name} `; break;}
            case commandWords.includes("todo?"):
              response = toDoList; break;
            case commandWords.includes("today?"):
              response = new Date().toDateString(); break;
            case commandWords[3] == "+":
              response = parseInt(commandWords[2]) + parseInt(commandWords[4]); break;
            case commandWords[3] == "*":
              response = commandWords[2] * commandWords[4]; break;
            case commandWords[3] == "/":
              response = commandWords[2] / commandWords[4]; break;
            case commandWords[3] == "-":
              response = commandWords[2] - commandWords[4]; break;
        }
        break;

      case "add":
          
          for (let i = 1; i < commandWords.length - 3; i++){
            toDoText += commandWords[i] + " ";
          }
          toDoList.push(toDoText);
         response = toDoText + " added to your todo"; break;

      case "remove":
        
        for (let i = 1; i < commandWords.length - 3; i++){
          toDoText += commandWords[i] + " ";
        }
        toDoList.splice(-1, 1);
        response = "Removed " + toDoText + " from your todo"; break;

      case "bye":
        response = "Good Bye! "; break;

      case "set":
         const timeInMilliseconds = parseInt(commandWords[4]) * 60000;
         setTimeout(function(){ 
            console.log("Timer done"); 
            }
            , timeInMilliseconds
         );
         response = `Timer set for ${commandWords[4]} minutes`; break;
      default:
        response = "nothing to add"; break;
   }

   console.log(response);
   return;
}
     
getReply("Hello my name is Somayeh")
getReply("Hello my name is Somayeh")
getReply("What is my name")
getReply("Add fishing to my todo")
getReply("Add singing in the shower to my todo")
getReply("Remove fishing from my todo")
getReply("What is on my todo?")
getReply("What day is it today?")
getReply("what is 1 * 3")
getReply("what is 4 / 2")
getReply("what is 2 - 1")
getReply("what is 5 + 1")
getReply('Set a timer for 3 seconds')
