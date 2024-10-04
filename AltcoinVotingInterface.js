class AltcoinVotingInterface {
    private altcoins: Record<number, { name: string; symbol: string; votes: number }> = {};
    private hasVoted: Record<string, boolean> = {};
    private altcoinCount: number = 0;
  
    constructor() {}
  
    registerAltcoin(name: string, symbol: string): number {
      this.altcoinCount++;
      this.altcoins[this.altcoinCount] = { name, symbol, votes: 0 };
      console.log(`Altcoin Registered: ${name} (${symbol}) with id ${this.altcoinCount}`);
      return this.altcoinCount;
    }
  
    castVote(altcoinId: number, voterAddress: string): void {
      if (this.hasVoted[voterAddress]) {
        console.error("You have already voted.");
        return;
      }
  
      const altcoin = this.altcoins[altcoinId];
      if (!altcoin) {
        console.error("Altcoin does not exist.");
        return;
      }
  
      altcoin.votes++;
      this.hasVoted[voterAddress] = true;
      console.log(`Vote cast for altcoin ${altcoin.name} by ${voterAddress}`);
    }
  
    transferVotes(sourceAltcoinId: number, destinationAltcoinId: number): void {
      const sourceAltcoin = this.altcoins[sourceAltcoinId];
      const destinationAltcoin = this.altcoins[destinationAltcoinId];
  
      if (!sourceAltcoin || !destinationAltcoin) {
        console.error("Invalid altcoin IDs.");
        return;
      }
  
      const transferredVotes = Math.floor(sourceAltcoin.votes / 2); // Example logic
      sourceAltcoin.votes -= transferredVotes;
      destinationAltcoin.votes += transferredVotes;
  
      console.log(`${transferredVotes} votes transferred from ${sourceAltcoin.name} to ${destinationAltcoin.name}`);
    }
  
    viewAltcoinVotes(altcoinId: number): number {
      const altcoin = this.altcoins[altcoinId];
      if (!altcoin) {
        console.error("Altcoin does not exist.");
        return 0;
      }
      return altcoin.votes;
    }
  }