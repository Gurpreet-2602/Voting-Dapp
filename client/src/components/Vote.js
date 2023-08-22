import {useEffect, useState} from 'react';

function Vote({state,account}) {
  const [status,setStatus]=useState("")
  async function vote(event){
    try{
      event.preventDefault();
      const {contract} = state;
      const voterId = document.querySelector("#voterId").value;
      const candidateId = document.querySelector("#candidateId").value;
      const transaction = await contract.methods.vote(voterId,candidateId).send({from:account,gas:480000});
     alert("Vote successfull")
    }catch(error){
      alert(error)
    }
  }
  useEffect(()=>{
    const {contract} = state;
    async function VotingStatus(){
      const status = await contract.methods.votingStatus().call();
      setStatus(status);
    }
    contract && VotingStatus();
  },[state])
  return (
    <div>
      <form className="form" onSubmit={vote}>
        <p className="status">Voting Status:{status}</p>
        <label className="label2" htmlFor="voterId">
          VoterId:
        </label>
        <input className="innerBoxVote" type="text" id="voterId"></input>

        <label className="label2" htmlFor="candidateId">
          Candidate Id:
        </label>
        <input className="innerBoxVote" type="text" id="candidateId"></input>
        <button className="regBtn" type="submit">
          Vote
        </button>
      </form>
    </div>
  );
}
export default Vote;
