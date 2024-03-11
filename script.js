document.getElementById('wallet').addEventListener('click', async function () {
    if (typeof web3 !== 'undefined') {
    
      web3 = new Web3(web3.currentProvider);
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const selectedAccount = accounts[0];
        alert(`Connected to wallet!\nAccount: ${selectedAccount}`);
  
        window.location.href = 'index.html';
  
      } catch (error) {
        if (error.code === 4001) {
          alert('Wallet connection request rejected by user. Please connect your wallet to proceed.');
        } else {
          alert('An error occurred while connecting to your wallet. Please try again.');
          console.error(error);
        }
      }
    } else {
      alert('Web3 is not detected. Please install a wallet like MetaMask.');
    }
  });
  