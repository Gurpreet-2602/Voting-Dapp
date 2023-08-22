import {useEffect,useState} from "react";
import Candidate from "./Candidate";

function CandidateDisplay({state,account}) {
  const [list,setList]=useState([]);
  useEffect(()=>{
    const {contract} = state;

    async function List(){
    const list = await contract.methods.candidateList().call();
   setList(list);
    }
    contract && List()
  },[state])
  return <>
  {list.map((Candidate)=>{
   return( <table>
      <tbody>
        <tr>
          <td>{Candidate.name}</td>
          <td>{Candidate.party}</td>
          <td>{Candidate.candidateId}</td>
          
        
        </tr>
      </tbody>
    </table>
   )
  })}</>;
}
export default CandidateDisplay;
