import { useState,useEffect } from "react";
function Winner({state}) {
  const [winner,setWinner] = useState("Not declared")
  useEffect(()=>{
    const {contract} = state;
    async function Winner(){
      const winner = await contract.methods.winner().call();
     if(winner!== "0x0000000000000000000000000000000000000000"){
      setWinner(winner) 
     }
    }
    contract && Winner()
  },[state])
  return <div className="win">Winner is : {winner}</div>;
}
export default Winner;
