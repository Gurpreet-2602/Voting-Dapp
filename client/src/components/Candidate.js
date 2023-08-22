import CandidateDisplay from "./CandidateDisplay";
import CandidateRegister from "./CandidateRegister";

function Candidate({state,account}) {
    return<>
    <CandidateRegister state={state} account={account}> </CandidateRegister>
    <CandidateDisplay state={state}></CandidateDisplay>
    </>
}
export default Candidate;