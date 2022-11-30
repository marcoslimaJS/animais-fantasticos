export default function initFetchBitcoin() {
  const url = 'https://blockchain.info/ticker';
  fetch(url)
    .then((res) => res.json())
    .then(({ BRL: { buy } }) => {
      const bitcoinPreco = document.querySelector('.bitcoin-preco');
      bitcoinPreco.innerText = (1000 / buy).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
