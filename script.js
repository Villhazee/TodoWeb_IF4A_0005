const inputTugas = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal");
const inputStatus = document.getElementById("inputStatus");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function () {

    let teksTugas = inputTugas.value;
    let tanggalTugas = inputTanggal.value;
    let statusTugas = inputStatus.value;

    if (teksTugas === "" || tanggalTugas === "") {
        alert("Semua data harus diisi!");
        return;
    }

    let listBaru = document.createElement("li");
    let infoTugas = document.createElement("div");

    infoTugas.innerHTML = `
        <strong>${teksTugas}</strong><br>
        Tanggal: ${tanggalTugas}<br>
        Status: <span class="status">${statusTugas}</span>
    `;

    let btnEdit = document.createElement("button");
      btnEdit.innetHTML = "Edit" ;

      btnEdit.addEventListener("click", function (){
        
      })





