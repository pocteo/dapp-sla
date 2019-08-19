var Poc_adress = '0x8F1C7DadD5313018bc7e0eD4bbe5a5B20B7a3f7a';

var Pocteo_ABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "myMessage",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newMessage",
          "type": "string"
        }
      ],
      "name": "setMessage",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMessage",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
