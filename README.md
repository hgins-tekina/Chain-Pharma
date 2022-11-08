# ChainPharma : A Pharmaceutical Supply Chain Tracking DAPP
This project showcases the journey of a medicine from a supplier to a pharmacy on a Blockchain.

A pharmaceutical supply chain is a sequence of activities and processes to bring raw drugs and materials from suppliers(farms) to processed medicine in a pharm.

#### Problems in the Existing Pharmaceutical Supply Chain System:
---
- Shipment visibility
- Expiration
- Slow Process and Error prone paper work
- Mutable and Invalid source
- Lack of coordination

#### What we are providing?
---
- Accurate information across the entire chain at any point and at any location
- Instant access to real-time updates and alerts if issues are detected
- Visibility of all handovers in the supply chain
- Traceability back to source of all materials
- Seamless collaboration between all parties
- Reduce paper work and Speedup process

#### Application Workflow Diagram:
---
![](https://raw.githubusercontent.com/kamalkishorm/Blockchain_SupplyChain/master/assets/flow/Blockchain_Pharmaceutical_SupplyChain.png)

#### Roles:
---
1. Admin
2. Supplier
3. Transfporter
4. Manufacturer
5. Wholesaler
6. Distributer
7. Pharma

**Admin :** Admin registers new users and assigns roles according to the work. 

**Supplier :** Supplier supplies raw materials manufactured by creating new batch with details of farm.

**Transporter :** Transporter is responsible for shipping packages/consignments from one stage to other.

**Manufacturer :** Manufacturer is responsible for manufacturing new medicine batches for shipping to either Wholesaler or Distributor, by updating information of raw materials details(like BatchID and consumption units) that are used to manufacture new batch medicine and quantity.

**Wholesaler :** Wholesaler is responsible to receive medicine from Manufacturer and validate medicine quality, than transfer it to the Distributor.

**Distrubuter :** Distributor is responsible to distribute medicine to pharms and verify medicine quality and condition.

**Pharma :** Pharma is responsible to provide right medicine to customer as per doctor prescribed and update medicine status.

#### Tools and Technologies:
---
- Solidity (Ethereum Smart Contract Language)
- Metamask (Ethereum wallet)
- Georli test network ( use Georli faucet to get ethers on Georli network )
- Truffle
- Infura
- Web3JS
- AngularJS

#### Prerequisites:
---
- Nodejs v8.12 or above
- Truffle v5.0.0 (core: 5.0.0) (http://truffleframework.com/docs/getting_started/installation)
- Solidity v0.5.0
- Metamask (https://metamask.io)
- Ganache (https://truffleframework.com/docs/ganache/quickstart)

#### Contract Deployment Steps:
---
**Setting up Ethereum Smart Contract:**

```
git clone https://github.com/kamalkishorm/Blockchain_SupplyChain.git
cd Blockchain_SupplyChain/
```
**Update truffle.js **

```
module.exports =
{
    networks:
    {
	    development:
		{
	   		host: "localhost",
	   		port: 8545,
	   		network_id: "*" // Match any network id
		}
    },
    ropsten: {
    	provider: function() {
                var mnemonic = "letter casino spread lawn water toward extend public gasp turn wave bone";//put ETH wallet 12 mnemonic code
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/"+infuraKey);
		    },
        gas: 8000000,
        gasPrice: 60000000000,
		network_id: '3'
	}
};
```
Go to your project folder in terminal then execute :

```
rm -rf build/
truffle compile
truffle migrate --network ropsten reset
```
**Please note:**
1. After successfully deployment you will get response in bash terminal like below
```
Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8007811


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x22a002f941602ff792cb66ea26b7c9acea8fbde14a7343789e0ae4b349a9ff75
   > Blocks: 1            Seconds: 109
   > contract address:    0xC30C388ceD2f27691B1aD0E70c1B51D726343acb
   > account:             0xdd56707585Bd9392500bBb30eEf767fb33299FF8
   > balance:             4.00294387495
   > gas used:            283300
   > gas price:           60 gwei
   > value sent:          0 ETH
   > total cost:          0.016998 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:            0.016998 ETH


2_deploy_supplychain.js
=======================
[ '0xdd56707585Bd9392500bBb30eEf767fb33299FF8' ]

   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xd05404fd8a8481e4c867052760f14b5b290473848a9956873df52785819e4946
   > Blocks: 2            Seconds: 9
   > contract address:    0xE384741Cb0346543D8f7d5b72d0ff3663FC548d4
   > account:             0xdd56707585Bd9392500bBb30eEf767fb33299FF8
   > balance:             3.61046395495
   > gas used:            6499304
   > gas price:           60 gwei
   > value sent:          0 ETH
   > total cost:          0.38995824 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.38995824 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.40695624 ETH

```