// Looping sederhana mengalikan dengan angka sebelumnya, hingga angkat terkecil 1
// Sample
// Input totalSum(5)
// Output 5 * 4 * 3 * 2 * 1 = 120

function totalSum (number) {
  // Buat varibel sementara / temporary
  var total;
  // Lakukan perulang sebanyak jumlah angka
  for (var i = number; i >= 1; i--) {
    // Kalikan dan simpan hasilnya ke variabel total
    total *= number;
  }
  // Kembali kan hasilnya dengan melempar variabel total
  return total;
}

console.log(totalSum(5));

// Looping dengan mengalikan dengan angka sebelumnya dengan selisih paramater kedua
// Sample
// Input : totalLompat(12, 5)
// Output : 12 * 7 * 2 = 168

// function totalLompat  (number, dif) {
//   var total;
//   for (var i = 0; i < number; i++) {
//     total *= number;
//   }
//   return total;
// }
function totalLompat (number, dif) {
  // Cek apakah ini angka terakhir / terkecil yang ingin ikut dihitung
  if (number == 1) {
    // Jika kembalikan nilainya
    return 1;
  // Cek kembali, apakah 'number' lebih besar dari dif (pembeda / selisih ke angka selanjutnya)
  } else if (number > dif) {
    // Jika iya, maka terus lakukan rekrusif dengan memanggil fungsinya sendiri
    return number * totalLompat(number - dif, dif);
  } else {
    // Jika tidak, maka balikan angka tersebut, agar menjadi nilai kemabalian pada proses rekrusif terakhir
    return number;
  }
}
console.log(totalLompat(12, 5));
