export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then(({ BRL: { buy } }) => {
      const bitcoinPreco = document.querySelector(target);
      bitcoinPreco.innerText = (1000 / buy).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
