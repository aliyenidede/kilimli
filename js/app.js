function add_table() {

  let firma = document.getElementById('firma');
  let firmaVal = firma.options[firma.selectedIndex].value;

  let odeme = document.getElementById('odeme');
  let odemeVal = odeme.options[odeme.selectedIndex].value;

  let saat = document.getElementById('saat');
  let saatVal = saat.value;

  let fiyat = document.getElementById('fiyat');
  let fiyatVal = fiyat.value;

  let actions = document.getElementById('actions');


  actions.innerHTML +=
    `
  <div class="custom_table">
  <p id="company">${firmaVal}</p>
  <p id="payment">${odemeVal}</p>
  <p id="time">${saatVal}</p>
  <p id="price">${fiyatVal}</p>
  </div>
  `

  let company = document.getElementById('company');
  let payment = document.getElementById('payment');
  let time = document.getElementById('time');
  let price = document.getElementById('price');
  let wn = document.getElementById('wn');
  let yn = document.getElementById('yn');
  let gn = document.getElementById('gn');
  let tn = document.getElementById('tn');

  let wk = document.getElementById('wk');
  let yk = document.getElementById('yk');
  let gk = document.getElementById('gk');
  let tk = document.getElementById('tk');

  let wo = document.getElementById('wo');
  let yo = document.getElementById('yo');
  let go = document.getElementById('go');
  let to = document.getElementById('to');

  let wt = document.getElementById('wt');
  let yt = document.getElementById('yt');
  let gt = document.getElementById('gt');
  let genelt = document.getElementById('genelt');


  if (firmaVal == "Whatsapp" && odemeVal == "Nakit") {
    let wnsum = parseFloat(wn.innerHTML) + parseFloat(fiyatVal);
    wn.innerHTML = wnsum + " ₺";
  }

  if (firmaVal == "Yemek Sepeti" && odemeVal == "Nakit") {
    let ynsum = parseFloat(yn.innerHTML) + parseFloat(fiyatVal);
    yn.innerHTML = ynsum + " ₺";
  }

  if (firmaVal == "Getir" && odemeVal == "Nakit") {
    let gnsum = parseFloat(gn.innerHTML) + parseFloat(fiyatVal);
    gn.innerHTML = gnsum + " ₺";
  }

  if (firmaVal == "Whatsapp" && odemeVal == "Kart") {
    let wksum = parseFloat(wk.innerHTML) + parseFloat(fiyatVal);
    wk.innerHTML = wksum + " ₺";
  }

  if (firmaVal == "Yemek Sepeti" && odemeVal == "Kart") {
    let yksum = parseFloat(yk.innerHTML) + parseFloat(fiyatVal);
    yk.innerHTML = yksum + " ₺";
  }

  if (firmaVal == "Getir" && odemeVal == "Kart") {
    let gksum = parseFloat(gk.innerHTML) + parseFloat(fiyatVal);
    gk.innerHTML = gksum + " ₺";
  }

  if (firmaVal == "Whatsapp" && odemeVal == "Online Ödeme / Ödendi") {
    let wosum = parseFloat(wo.innerHTML) + parseFloat(fiyatVal);
    wo.innerHTML = wosum + " ₺";
  }

  if (firmaVal == "Yemek Sepeti" && odemeVal == "Online Ödeme / Ödendi") {
    let yosum = parseFloat(yo.innerHTML) + parseFloat(fiyatVal);
    yo.innerHTML = yosum + " ₺";
  }

  if (firmaVal == "Getir" && odemeVal == "Online Ödeme / Ödendi") {
    let gosum = parseFloat(go.innerHTML) + parseFloat(fiyatVal);
    go.innerHTML = gosum + " ₺";
  }


  tn.innerHTML = parseFloat(wn.innerHTML) + parseFloat(yn.innerHTML) + parseFloat(gn.innerHTML) + " ₺";

  tk.innerHTML = parseFloat(wk.innerHTML) + parseFloat(yk.innerHTML) + parseFloat(gk.innerHTML) + " ₺";

  to.innerHTML = parseFloat(wo.innerHTML) + parseFloat(yo.innerHTML) + parseFloat(go.innerHTML) + " ₺";

  wt.innerHTML = parseFloat(wn.innerHTML) + parseFloat(wk.innerHTML) + parseFloat(wo.innerHTML) + " ₺";

  yt.innerHTML = parseFloat(yn.innerHTML) + parseFloat(yk.innerHTML) + parseFloat(yo.innerHTML) + " ₺";

  gt.innerHTML = parseFloat(gn.innerHTML) + parseFloat(gk.innerHTML) + parseFloat(go.innerHTML) + " ₺";

  genelt.innerHTML = parseFloat(wt.innerHTML) + parseFloat(yt.innerHTML) + parseFloat(gt.innerHTML) + " ₺";

}


