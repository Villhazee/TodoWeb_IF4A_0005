$(function () {

    let $inputTugas = $("#inputTugas");
    let $inputTanggal = $("#inputTanggal");
    let $inputStatus = $("#inputStatus");
    let $daftarTugas = $("#daftarTugas");

    function updateCounter() {
        let jumlah = $(".task-item").length;

        $("#counterBadge").text(jumlah);

        if (jumlah === 0) {
            $("#emptyState").show();
        } else {
            $("#emptyState").hide();
        }
    }

    $("#btnTambah").click(function () {

        let tugas = $inputTugas.val().trim();
        let tanggal = $inputTanggal.val();
        let status = $inputStatus.val();

        if (tugas === "" || tanggal === "") {
            alert("Semua data harus diisi!");
            return;
        }

        let item = $(`
            <li class="task-item">

                <div class="task-info">
                    <div class="task-top">
                        <div class="task-info">
                            <strong>${tugas}</strong>
                        </div>

                        <span class="status-badge ${status=="Done" ? "done":"progress"}">
                            ${status}
                        </span>

                    </div>

                    <div class="task-meta">${tanggal}</div>

                    <div class="task-divider"></div>

                </div>

                <div class="task-actions">

                    <button class="btn-edit">
                        Edit
                    </button>

                    <button class="btn-status">
                        Status
                    </button>

                    <button class="btn-hapus">
                        Hapus
                    </button>

                </div>

            </li>
        `);

        item.find(".btn-edit").click(function () {

            let edit = prompt(
                "Edit tugas:",
                tugas
            );

            if(edit && edit.trim()!=""){

                tugas=edit;

                item.find("strong")
                .text(tugas);
            }

        });

        item.find(".btn-status").click(function(){

            status=
            status=="Progress"
            ? "Done"
            : "Progress";

            let badge=
            item.find(".status-badge");

            badge
            .text(status)
            .removeClass(
                "done progress"
            )
            .addClass(
                status=="Done"
                ? "done"
                : "progress"
            );

        });

        item.find(".btn-hapus")
        .click(function(){

            item.remove();
            updateCounter();

        });

        $daftarTugas.append(item);

        $inputTugas.val("");
        $inputTanggal.val("");
        $inputStatus.val("Progress");

        updateCounter();

    });

    $inputTugas.keypress(function(e){

        if(e.which===13){

            $("#btnTambah")
            .click();

        }

    });

    updateCounter();

});