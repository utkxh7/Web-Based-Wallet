window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);

        document.getElementById('connectButton').addEventListener('click', async () => {
            try {
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Get wallet address
                const accounts = await web3.eth.getAccounts();
                const walletAddress = accounts[0];
                document.getElementById('walletAddress').textContent = walletAddress;

                // Get wallet balance
                const balanceWei = await web3.eth.getBalance(walletAddress);
                const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
                document.getElementById('walletBalance').textContent = balanceEth;

                // Show wallet information
                document.getElementById('walletInfo').style.display = 'block';
            } catch (error) {
                console.error('User denied account access');
            }
        });
    } else {
        console.error('MetaMask is not installed. Please install MetaMask to use this app.');
    }
});
