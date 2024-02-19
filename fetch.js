import fetch from 'node-fetch';

const token = '6526516359:AAE-ia8bSgtmReWvhpAwm7Knz_907RLtvLA'
const chatid = '621965499'
const boturl = `https://api.telegram.org/bot${token}/sendMessage?chatid=${chatid}`;

const SendTelegram = async (id, hash) => {
  var message = {
    chat_id: chatid,
    link_preview_options: {is_disabled: true},
    text: `${id} Claimed HOT with hash \nhttps://nearblocks.io/txns/${hash}`
  };
  const response = await fetch(boturl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  const data = await response.json();
};