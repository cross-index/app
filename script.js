document.getElementById('submitVote').addEventListener('click', () => {
    const firstChoice = document.getElementById('altcoin1').value;
    const secondChoice = document.getElementById('altcoin2').value;
    
    if (!firstChoice || !secondChoice) {
        alert('Please select both altcoins.');
        return;
    }

    document.getElementById('firstChoiceConfirmation').textContent = firstChoice;
    document.getElementById('secondChoiceConfirmation').textContent = secondChoice;

    document.getElementById('votingForm').classList.add('hidden');
    document.getElementById('confirmationScreen').classList.remove('hidden');
});

document.getElementById('finalConfirm').addEventListener('click', () => {
    alert('Vote confirmed!');
    // Here you would submit the vote and process zk-STARK logic
    document.getElementById('confirmationScreen').classList.add('hidden');
    document.getElementById('finalSummary').classList.remove('hidden');
});

document.getElementById('correctVote').addEventListener('click', () => {
    document.getElementById('confirmationScreen').classList.add('hidden');
    document.getElementById('votingForm').classList.remove('hidden');
});

// Function to populate the altcoin choices dynamically
function populateChoices() {
    const altcoins = [
        { id: 1, name: 'Bitcoin', symbol: 'BTC' },
        { id: 2, name: 'Ethereum', symbol: 'ETH' },
        { id: 3, name: 'Ripple', symbol: 'XRP' }
    ];

    const altcoin1Select = document.getElementById('altcoin1');
    const altcoin2Select = document.getElementById('altcoin2');

    altcoins.forEach(altcoin => {
        const option1 = document.createElement('option');
        option1.value = altcoin.name;
        option1.textContent = `${altcoin.name} (${altcoin.symbol})`;
        altcoin1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = altcoin.name;
        option2.textContent = `${altcoin.name} (${altcoin.symbol})`;
        altcoin2Select.appendChild(option2);
    });
}

populateChoices();