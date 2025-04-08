const produk = [
  { nama: "mie instan", harga: 3300 },
  { nama: "mie isi 2", harga: 4000 },
  { nama: "mie sakura", harga: 2000 },
  { nama: "bihun padamu", harga: 7000 },
  { nama: "gula 1 kg", harga: 17500 },
  { nama: "gula 1/2 kg", harga: 9000 },
  { nama: "gula 1/4 kg", harga: 4500 },
  { nama: "garam", harga: 4000 },
  { nama: "vetsin besar", harga: 5000 },
  { nama: "vetsin sedang", harga: 3000 },
  { nama: "vetsin kecil", harga: 1000 },
  { nama: "minyak bantal", harga: 16500 },
  { nama: "minyak gelas", harga: 5000 },
  { nama: "molto", harga: 5000 },
  { nama: "downy", harga: 5300 },
  { nama: "daia saset", harga: 5500 },
  { nama: "daia saset satuan", harga: 1000 },
  { nama: "daia besar", harga: 5000 },
  { nama: "gentle gen sepasang", harga: 10500 },
  { nama: "gentle gen setengah", harga: 5500 },
  { nama: "gentle gen satuan", harga: 1000 },
  { nama: "soklin", harga: 5500 },
  { nama: "soklin 2 pcs", harga: 2500 },
  { nama: "sampo", harga: 10000 },
  { nama: "sampo lifebuoy", harga: 5500 },
  { nama: "sampo zink", harga: 5000 },
  { nama: "tepung segitiga 1 kg", harga: 11800 },
  { nama: "tepung segitiga 1/2 kg", harga: 6500 },
  { nama: "tepung ketan", harga: 11000 },
  { nama: "tepung beras", harga: 8000 },
  { nama: "tepung tapioka", harga: 5500 },
  { nama: "sunlight kecil", harga: 2000 },
  { nama: "sunglight besar", harga: 5000 },
  { nama: "sabun nuvo", harga: 14500 },
  { nama: "sabun kecil", harga: 4500 },
  { nama: "sabun batang", harga: 5000 },
  { nama: "odol kecil", harga: 5000 },
  { nama: "odol besar", harga: 13000 },
  { nama: "softex pink", harga: 4500 },
  { nama: "softex biru", harga: 8500 },
  { nama: "tisu 1 pack", harga: 30000 },
  { nama: "tisu 1 an", harga: 8000 },
  { nama: "sarden abc", harga: 8500 },
  { nama: "sarden atan", harga: 6500 },
  { nama: "mentega forvita", harga: 6000 },
  { nama: "tomat pedas", harga: 7500 },
  { nama: "tomat manis", harga: 7500 },
  { nama: "kecap kecil", harga: 2000 },
  { nama: "kecap besar", harga: 15800 },
  { nama: "vanili", harga: 1000 },
  { nama: "dancow serenteng", harga: 34500 },
  { nama: "dancow setengah", harga: 17500 },
  { nama: "dancow satuan", harga: 4000 },
  { nama: "susu enak", harga: 7500 },
  { nama: "good day serenteng", harga: 19700 },
  { nama: "good day setengah", harga: 10500 },
  { nama: "good day satuan", harga: 2500 },
  { nama: "torabika serenteng", harga: 20000 },
  { nama: "torabika setengah", harga: 10000 },
  { nama: "torabika satuan", harga: 2500 },
  { nama: "creamy latte serenteng", harga: 15500 },
  { nama: "creamy latte setengah", harga: 8000 },
  { nama: "creamy latte satuan", harga: 2000 },
  { nama: "kapal api serenteng", harga: 10000 },
  { nama: "kapal api setengah", harga: 5500 },
  { nama: "kapal api satuan", harga: 1500 },
  { nama: "kopi mix serenteng", harga: 15500 },
  { nama: "kopi mix setengah", harga: 8000 },
  { nama: "kopi mix satuan", harga: 2000 },
  { nama: "teh poci", harga: 5000 },
  { nama: "gunung satria serenteng", harga: 11000 },
  { nama: "gunung satria satuan", harga: 1500 },
  { nama: "acan", harga: 5000 },
  { nama: "sajiku", harga: 20500 },
  { nama: "marinasi", harga: 11000 },
  { nama: "racik", harga: 17000 },
  { nama: "racik nasgor", harga: 17000 },
  { nama: "sajiku nasgor", harga: 17000 },
  { nama: "ketumbar", harga: 11000 },
  { nama: "baput", harga: 11000 },
  { nama: "lada", harga: 10800 },
  { nama: "boncabe", harga: 11000 },
  { nama: "royco", harga: 5000 },
  { nama: "pin", harga: 14500 },
  { nama: "click", harga: 18000 },
  { nama: "titan", harga: 15000 },
];

let keranjang = [];
let riwayat = [];

function renderProduk(filter = "") {
  const list = document.getElementById("produk-list");
  list.innerHTML = "";
  produk
    .filter((p) => p.nama.toLowerCase().includes(filter.toLowerCase()))
    .forEach((item) => {
      const div = document.createElement("div");
      div.innerText = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
      div.onclick = () => tambahKeKeranjang(item);
      list.appendChild(div);
    });
}

function tambahKeKeranjang(item) {
  keranjang.push(item);
  renderKeranjang();
}

function renderKeranjang() {
  const list = document.getElementById("keranjang-list");
  list.innerHTML = "";
  keranjang.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
    list.appendChild(li);
  });
}

function renderRiwayat() {
  const list = document.getElementById("riwayat-list");
  list.innerHTML = "";
  riwayat.forEach((trans) => {
    const li = document.createElement("li");
    li.innerText = `${trans.waktu} - ${trans.barang.length} item`;
    list.appendChild(li);
  });
}

function checkout() {
  if (keranjang.length === 0) return alert("Keranjang kosong!");
  const waktu = new Date().toLocaleString("id-ID");
  const transaksi = { waktu, barang: [...keranjang] };
  riwayat.push(transaksi);
  downloadStruk(transaksi);
  keranjang = [];
  renderKeranjang();
  renderRiwayat();
}

function downloadStruk(transaksi) {
  let isi = "         WARUNG BAROKAH\n";
  isi += `     Tanggal: ${transaksi.waktu}\n`;
  isi += "-------------------------------\n";
  isi += "Nama Barang        Harga\n";
  let total = 0;
  transaksi.barang.forEach(item => {
    const nama = item.nama.padEnd(18, ' ');
    const harga = item.harga.toLocaleString();
    isi += `${nama}${harga}\n`;
    total += item.harga;
  });
  isi += "-------------------------------\n";
  isi += `TOTAL             ${total.toLocaleString()}\n`;
  isi += "Terima kasih telah berbelanja!\n";

  const blob = new Blob([isi], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `struk_${transaksi.waktu.replace(/[/: ]/g, "_")}.txt`;
  link.click();
}

function downloadRiwayat() {
  if (riwayat.length === 0) return alert("Belum ada transaksi!");
  let isi = "     WARUNG BAROKAH - REKAP HARIAN\n\n";
  riwayat.forEach((trans, i) => {
    isi += `Transaksi ${i + 1} - ${trans.waktu}\n`;
    trans.barang.forEach(item => {
      isi += `- ${item.nama}: Rp ${item.harga.toLocaleString()}\n`;
    });
    isi += "\n";
  });

  const blob = new Blob([isi], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `rekap_${new Date().toLocaleDateString("id-ID").replace(/\//g, "-")}.txt`;
  link.click();
}

function tambahProdukBaru() {
  const nama = document.getElementById("nama-produk").value.trim();
  const harga = parseInt(document.getElementById("harga-produk").value);
  if (!nama || isNaN(harga)) return alert("Isi nama dan harga dengan benar!");
  produk.push({ nama, harga });
  renderProduk(document.getElementById("search").value);
  document.getElementById("nama-produk").value = "";
  document.getElementById("harga-produk").value = "";
}

document.getElementById("search").addEventListener("input", function () {
  renderProduk(this.value);
});

renderProduk();
