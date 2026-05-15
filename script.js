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
        let tugasBaru = prompt("Edit tugas:", teksTugas);

        if (tugasBaru !== null && tugasBaru !== "") {
            teksTugas = tugasBaru;

            infoTugas.innerHTML = `
                <strong>${teksTugas}</strong><br>
                Tanggal: ${tanggalTugas}<br>
                Status: <span class="status">${statusTugas}</span>
            `;
        }
    });

    let btnStatus = document.createElement("button");
    btnStatus.innerHTML = "Ubah Status";

    btnStatus.addEventListener("click", function () {

        if (statusTugas === "Progress") {
            statusTugas = "Done";
        } else {
            statusTugas = "Progress";
        }

        infoTugas.innerHTML = `
            <strong>${teksTugas}</strong><br>
            Tanggal: ${tanggalTugas}<br>
            Status: <span class="status">${statusTugas}</span>
        `;
    });

    let btnHapus = document.createElement("button");
    btnHapus.innerHTML = "Hapus";
    btnHapus.classList.add("hapus");

    btnHapus.addEventListener("click", function () {
        daftarTugas.removeChild(listBaru);
    });

    let action = document.createElement("div");

    action.appendChild(btnEdit);
    action.appendChild(btnStatus);
    action.appendChild(btnHapus);

    listBaru.appendChild(infoTugas);
    listBaru.appendChild(action);

    daftarTugas.appendChild(listBaru);

    inputTugas.value = "";
    inputTanggal.value = "";
    inputStatus.value = "Progress";
});





