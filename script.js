$(document).ready(function(){

    const $inputTugas = $("inputTugas");
    const $inputTanggal = $("inputTanggal");
    const $inputStatus = $("inputStatus");
    const $daftarTugas = $("daftarTugas");
    function updateCounter() {
   
        const jumlah = $daftarTugas.find("li.task-item").length;
 
        $("#counterBadge").text(jumlah);

        if (jumlah === 0) {

            $("#emptyState").show();
        } else {
            $("#emptyState").hide();
        }
    }


 $ ("#btnTambah").on("click", function) {

   const teksTugas = $inputTugas.val().trim();
   const tanggalTugas = $inputTanggal.val();
   const statusTugas = $inputStatus.val();

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





