const daftarNilai = [
    { kode: "14823192", matkul: "Arsitektur dan Organisasi Komputer", sks: 2, nilaiHuruf: "AB", nk: 7.00 },
    { kode: "14823372", matkul: "Statistika dan Probabilitas", sks: 2, nilaiHuruf: "A", nk: 8.00 },
    { kode: "14823274", matkul: "Pemrograman Berorientasi Objek", sks: 4, nilaiHuruf: "A", nk: 16.00 },
    { kode: "14823313", matkul: "Sistem Basis Data", sks: 3, nilaiHuruf: "AB", nk: 10.50 },
    { kode: "14823393", matkul: "Interaksi Manusia Komputer", sks: 3, nilaiHuruf: "B", nk: 9.00 },
    { kode: "14823333", matkul: "Algoritma dan Struktur Data", sks: 3, nilaiHuruf: "A", nk: 12.00 },
    { kode: "14823153", matkul: "Teknologi Informasi dan Aplikasi Bisnis Berkembang", sks: 3, nilaiHuruf: "B", nk: 9.00 }
];

function hitungRataRataNK(data) {
    let totalNK = 0;
    for (const item of data) {
        totalNK += item.nk; 
    }
    return totalNK / data.length;
}

function filterNilaiA(data) {
    return data.filter(item => item.nilaiHuruf === "A"); 
}

console.log("=== REKAPITULASI NILAI MAHASISWA ===");
console.log("Nama: Eliazar Yasta Prarindra | NBI: 1482500005");
console.log("--------------------------------------------------");

for (const [index, m] of daftarNilai.entries()) {
    let statusKinerja = m.nk >= 10 ? "Sangat Baik" : "Baik";
    console.log(`${index + 1}. [${m.kode}] ${m.matkul} | SKS: ${m.sks} | Nilai: ${m.nilaiHuruf} | N.K: ${m.nk} (${statusKinerja})`);
}

console.log("--------------------------------------------------");
let rataRata = hitungRataRataNK(daftarNilai);
console.log(`Rata-rata Nilai Kualitas: ${rataRata.toFixed(2)}`);

console.log("\n=== MATA KULIAH DENGAN NILAI A ===");
const matkulA = filterNilaiA(daftarNilai);
for (const item of matkulA) {
    console.log(`- ${item.matkul} (SKS: ${item.sks})`);
}