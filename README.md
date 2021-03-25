# Tic Tac Toe Game

## Prerequirements
1. Familiar dengan HTML dan Javascript (ES6 - recomended).
2. Familiar dengan konsep pemrograman seperti fungsi, object, array dan kelas.

## Apa itu react?
- React adalah Javascript library yang deklaratif, efisien, dan fleksibel untuk membuat user interface.
- React memungkinkan kamu untuk menyusun UI yang complex dari bagian yang kecil dan terisolasi yang disebut dengan komponen.

## Kita akan butuh 3 komponen diantaranya
- Square => merender button
- Board => berisi 9 Square
- Game => render Board

penggunaan function pada onClick, jika menggunakan onClick={alert('alert')} maka alert akan selalu dijalankan. untu mengatasinya gunakan onClick={ () => alert('alert') }, dengan begitu alert hanya akan dijalankan ketika diklik.

pada kelas Javascript, pemanggilan super selalu dibutuhkan ketika mendefinisikan constructor pada kelas turunan. semua kelas komponen react yang memiliki constructor harus diawali dengan memanggil super(props); karena kelas komponen baru menjadi turunan dari kelas Component dati react.

dengan menggunakan this.setState(), pada render method, kita memberi tahu react untuk merender ulang komponen.

React Devtools memungkinkanmu untuk melihat state dan props pada react komponen serta melihat struktur komponen dengan browser developer tools.
