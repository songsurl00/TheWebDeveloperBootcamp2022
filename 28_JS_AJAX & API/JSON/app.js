//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// JSON을 JS 객체로 변환
const parsedData = JSON.parse(data);

// JS 객체를 JSON으로 변환
const dog = { bread: 'lab', color: 'black', isAlive: true, owner: undefined }
stringifiedDog = JSON.stringify(dog);   // '{"bread":"lab","color":"black","isAlive":true}'