class ResultsDashboard {
    private altcoins: Record<number, { name: string; symbol: string; votes: number }> = {};
    
    constructor(altcoins: Record<number, { name: string; symbol: string; votes: number }>) {
      this.altcoins = altcoins;
    }
  
    displayResults() {
      const resultsContainer = document.createElement('div');
      resultsContainer.classList.add('results-dashboard');
  
      const header = document.createElement('h2');
      header.textContent = 'Real-time Altcoin Voting Results';
      resultsContainer.appendChild(header);
  
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
  
      const candidateHeader = document.createElement('th');
      candidateHeader.textContent = 'Altcoin';
      headerRow.appendChild(candidateHeader);
  
      const votesHeader = document.createElement('th');
      votesHeader.textContent = 'Votes';
      headerRow.appendChild(votesHeader);
  
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      const tbody = document.createElement('tbody');
      
      for (const [altcoinId, altcoinData] of Object.entries(this.altcoins)) {
        const row = document.createElement('tr');
  
        const nameCell = document.createElement('td');
        nameCell.textContent = `${altcoinData.name} (${altcoinData.symbol})`;
        row.appendChild(nameCell);
  
        const votesCell = document.createElement('td');
        votesCell.textContent = altcoinData.votes.toString();
        row.appendChild(votesCell);
  
        tbody.appendChild(row);
      }
  
      table.appendChild(tbody);
      resultsContainer.appendChild(table);
  
      document.body.appendChild(resultsContainer);
    }
  }
  
  // Example usage
  const altcoins = {
    1: { name: 'Bitcoin', symbol: 'BTC', votes: 120 },
    2: { name: 'Ethereum', symbol: 'ETH', votes: 95 },
    3: { name: 'Ripple', symbol: 'XRP', votes: 60 }
  };
  
  const dashboard = new ResultsDashboard(altcoins);
  dashboard.displayResults();