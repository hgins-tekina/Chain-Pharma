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

#### What are we providing?
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

#### Tools and Technologies Used:
---
- Solidity (Ethereum Smart Contract Language)
- Metamask (Ethereum wallet)
- Ropsten test network ( We used Ropsten faucet to get ethers on the Ropsten test network)
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
```
