export default function addreducer(state, action){
console.log(state, action);

switch (action.type) {
    case "ADD_TASK":
        return {
            task: [...state.task, action.payload],
        }        
    case "DELETE_TASK":
        return {
            task:[]
        }

    default:
        return 
        break;
}

}