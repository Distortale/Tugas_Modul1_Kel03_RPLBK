const buildTable = (student) => {
    const wrapper = document.createElement('div');
    wrapper.id = student.nim;

    // <table>
    const table = document.createElement('table');
    
    // <thead>
    const thead = document.createElement('thead');
    
    // <th>
    const th = document.createElement('th');
    // <h1>
    const h1 = document.createElement('h1');
    h1.textContent = student.nama_lengkap;

    th.append(h1);
    thead.append(th);
    table.append(thead);
    
    // <tbody>
    const tbody = document.createElement('tbody');

    const buildTableRow = (label, value) => {
        // <tr>
        const tr = document.createElement('tr');
        // <td>
        const td1 = document.createElement('td');
        td1.textContent = label;
        // <td>
        const td2 = document.createElement('td');
        td2.textContent = value;
        
        tr.append(td1, td2);
        return tr;
    }

    tbody.append(buildTableRow("Nama Lengkap", `: ${student.nama_lengkap || "-"}`));
    tbody.append(buildTableRow("Nama Panggilan", `: ${student.nama_panggilan || "-"}`));
    tbody.append(buildTableRow("NIM", `: ${student.nim || "-"}`));
    tbody.append(buildTableRow("Nomor Telepon", `: ${student.nomor_telepon || "-"}`));
    tbody.append(buildTableRow("ID Line", `: ${student.id_line || "-"}`));
    tbody.append(buildTableRow("Email", `: ${student.email || "-"}`));
    tbody.append(buildTableRow("Hobi", `: ${student.hobi || "-"}`));
    tbody.append(buildTableRow("Tanggal Lahir", `: ${student.tanggal_lahir || "-"}`));

    table.append(tbody);
    wrapper.append(table);

    return wrapper;
}

// Fungsi yang dijalankan saat tombol "Cari di click"
const checkOnClick = () => {
    // Mengambil nilai dari input lalu menyimpannya ke variabel getInput
    const getInput = document.getElementById('inputText');
    // Memfilter obyek dari array Data Aegis
    const dataAnggota = array.filter(anggota => {
        // Pencarian obyek berdasarkan nama lengkap yang mengandung input user
        // Obyek dan input diberi fungsi .toLowerCase() untuk memudahkan pencarian
        return anggota.nama_lengkap.toLowerCase().includes(getInput.value.toLowerCase())
    });
    // reset element
    const listOfStudents = document.getElementById('list-of-students');
    listOfStudents.innerHTML = dataAnggota.length > 0 ? '' : 'Data Tidak Ditemukan!';

    for (const student of dataAnggota) {
        listOfStudents.append(buildTable(student));
    }
}