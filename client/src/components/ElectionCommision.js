function ElectionCommision({state,account}) {
  async function votingTime(event){
    try{
      event.preventDefault();
      const {contract} = state;
      const startTime = document.querySelector("#start").value;
      const endTime = document.querySelector("#end").value;
      const transaction = await contract.methods.voteTime(startTime,endTime).send({from:account, gas:480000});
      console.log(transaction);
    }catch(error){
      alert(error)
    }
  }
  async function resultVote(){
    try{
    const {contract} = state;
    await contract.methods.result().send({from: account,gas:480000});
    alert("Result Announced")
    window.location.reload()
  }catch(error){
    alert(error)
  } 
}
  async function emergencyVote(){
    try{
      const {contract} = state;
      await contract.methods.emergency().send({from: account,gas:480000});
      alert("Emergency declared")
      window.location.reload()
    }catch(error){
      alert(error)
    } 
  }
  
  return (
    <>
      <div>
        <form className="form" onSubmit={votingTime}>
          <label className="label2" htmlFor="start">
            Start Time:
          </label>
          <input className="innerBoxVote" type="text" id="start"></input>

          <label className="label2" htmlFor="end">
            End Time:
          </label>
          <input className="innerBoxVote" type="text" id="end"></input>

          <button className="regBtn" type="submit">
            Voting Start
          </button>
        </form>
      </div>
      <div className="space">
        <button className="emerBtn" onClick={emergencyVote}>
          Emergency
        </button>
        <button className="resBtn" onClick={resultVote}>
          Result
        </button>
      </div>
    </>
  );
}
export default ElectionCommision;
