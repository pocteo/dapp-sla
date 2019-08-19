var userAccount= '';
window.addEventListener('load',function(){
  if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
      console.log("1")
  } else {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      console.log("2")
  }
      web3.eth.getAccounts().then(e => { 
      userAccount = e[0];
      console.log("User Account: " + userAccount);
            }) 
    

})
async function StartContract()
  {
      // to interact with smartContract     
    var input = document.getElementById("ScText").value 
    document.getElementById("ScResult").textContent ="";

    const Pocteo_Contract  = new web3.eth.Contract(Pocteo_ABI,Poc_adress);

    await Pocteo_Contract.methods.setMessage(input).send({from: userAccount})

    let response = await Pocteo_Contract.methods.getMessage().call();
    document.getElementById("ScResult").textContent +=response      
  
}