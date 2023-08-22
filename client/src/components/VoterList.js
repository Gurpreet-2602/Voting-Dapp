import {useEffect, useState} from "react";



function VoterList({state,account}) {
  const [voters, setVoters] = useState([]);

  useEffect(()=> {
    const {contract} = state;
    async function displayVoters(){
      const voters = await contract.methods.voterList().call();
      setVoters(voters);
    }
    contract && displayVoters();
  }, [state]);
  return (
    <table>
      <tbody>
        {voters.map((voter) => {
          return (
            <tr>
              <td>{voter.name}</td>
              <td>{voter.age}</td>
              <td>{voter.gender}</td>
              <td>{voter.voterId}</td>
              <td>{voter.voterAddress}</td>
            </tr>
          );
          })}
      </tbody>
    </table>
  );
}
export default VoterList;
