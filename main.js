// Khởi tạo dãy số ban đầu là mảng rỗng
let arrNumbers = [];

// ==========================================
// THÊM SỐ VÀO MẢNG
// ==========================================
const btnAddNumber = document.getElementById("btnAddNumber");
btnAddNumber.onclick = function () {
  // Lấy giá trị chuỗi từ input để kiểm tra rỗng
  const rawValue = document.getElementById("number-input").value;
  if (rawValue === "") {
    alert("Vui lòng nhập một số hợp lệ!");
    return;
  }

  // Ép giá trị thành số bằng document.getElementById("...").value * 1
  const number = document.getElementById("number-input").value * 1;

  // Thêm số vào mảng
  arrNumbers.push(number);

  // Hiển thị mảng ra giao diện
  const txtArray = document.getElementById("txtArray");
  txtArray.innerHTML = "👉 Dãy số hiện tại: [ " + arrNumbers.join(", ") + " ]";

  // Reset ô input về rỗng để tiện nhập tiếp
  document.getElementById("number-input").value = "";
  document.getElementById("number-input").focus();
};

// Cho phép nhấn Enter để thêm số nhanh
const inputNumber = document.getElementById("number-input");
inputNumber.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    btnAddNumber.click();
  }
});

// Nút xóa mảng để nhập lại từ đầu
const btnClearArray = document.getElementById("btnClearArray");
btnClearArray.onclick = function () {
  arrNumbers = [];
  const txtArray = document.getElementById("txtArray");
  txtArray.innerHTML = "👉 Dãy số hiện tại: [ ]";
  document.getElementById("number-input").value = "";
};

// ==========================================
// 1. TÍNH TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
// ==========================================
const btnTongSoDuong = document.getElementById("btnTongSoDuong");
btnTongSoDuong.onclick = function () {
  let tong = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] > 0) {
      tong += arrNumbers[i];
    }
  }
  const txtKetQua1 = document.getElementById("txtKetQua1");
  txtKetQua1.innerHTML = "👉 Tổng các số dương: " + tong;
};

// ==========================================
// 2. ĐẾM CÓ BAO NHIÊU SỐ DƯƠNG TRONG MẢNG
// ==========================================
const btnDemSoDuong = document.getElementById("btnDemSoDuong");
btnDemSoDuong.onclick = function () {
  let dem = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] > 0) {
      dem++;
    }
  }
  const txtKetQua2 = document.getElementById("txtKetQua2");
  txtKetQua2.innerHTML = "👉 Số lượng số dương: " + dem;
};

// ==========================================
// 3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
// ==========================================
const btnSoNhoNhat = document.getElementById("btnSoNhoNhat");
btnSoNhoNhat.onclick = function () {
  const txtKetQua3 = document.getElementById("txtKetQua3");
  if (arrNumbers.length === 0) {
    txtKetQua3.innerHTML = "👉 Vui lòng thêm số vào mảng trước!";
  } else {
    let min = arrNumbers[0];
    for (let i = 1; i < arrNumbers.length; i++) {
      if (arrNumbers[i] < min) {
        min = arrNumbers[i];
      }
    }
    txtKetQua3.innerHTML = "👉 Số nhỏ nhất trong mảng: " + min;
  }
};

// ==========================================
// 4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
// ==========================================
const btnSoDuongNhoNhat = document.getElementById("btnSoDuongNhoNhat");
btnSoDuongNhoNhat.onclick = function () {
  const txtKetQua4 = document.getElementById("txtKetQua4");
  if (arrNumbers.length === 0) {
    txtKetQua4.innerHTML = "👉 Vui lòng thêm số vào mảng trước!";
  } else {
    // Tìm số dương đầu tiên làm mốc min
    let minDuong = -1;
    for (let i = 0; i < arrNumbers.length; i++) {
      if (arrNumbers[i] > 0) {
        minDuong = arrNumbers[i];
        break;
      }
    }

    if (minDuong === -1) {
      txtKetQua4.innerHTML = "👉 Không có số dương nào trong mảng!";
    } else {
      for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 0 && arrNumbers[i] < minDuong) {
          minDuong = arrNumbers[i];
        }
      }
      txtKetQua4.innerHTML = "👉 Số dương nhỏ nhất: " + minDuong;
    }
  }
};

// ==========================================
// 5. TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
// ==========================================
const btnSoChanCuoiCung = document.getElementById("btnSoChanCuoiCung");
btnSoChanCuoiCung.onclick = function () {
  const txtKetQua5 = document.getElementById("txtKetQua5");
  let soChanCuoi = -1;
  // Duyệt từ cuối mảng về đầu để gặp số chẵn cuối cùng sớm nhất
  for (let i = arrNumbers.length - 1; i >= 0; i--) {
    if (arrNumbers[i] % 2 === 0) {
      soChanCuoi = arrNumbers[i];
      break;
    }
  }

  if (soChanCuoi !== -1) {
    txtKetQua5.innerHTML = "👉 Số chẵn cuối cùng: " + soChanCuoi;
  } else {
    txtKetQua5.innerHTML = "👉 Không có số chẵn trong mảng (kết quả: -1)";
  }
};

// ==========================================
// 6. ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG THEO VỊ TRÍ
// ==========================================
const btnDoiCho = document.getElementById("btnDoiCho");
btnDoiCho.onclick = function () {
  const viTri1 = document.getElementById("inputViTri1").value * 1;
  const viTri2 = document.getElementById("inputViTri2").value * 1;
  const txtKetQua6 = document.getElementById("txtKetQua6");

  if (arrNumbers.length === 0) {
    txtKetQua6.innerHTML = "👉 Vui lòng thêm số vào mảng trước!";
  } else if (
    viTri1 < 0 ||
    viTri1 >= arrNumbers.length ||
    viTri2 < 0 ||
    viTri2 >= arrNumbers.length
  ) {
    txtKetQua6.innerHTML =
      "👉 Vị trí không hợp lệ! Vui lòng nhập từ 0 đến " +
      (arrNumbers.length - 1);
  } else {
    // Hoán đổi 2 phần tử bằng biến tạm
    const temp = arrNumbers[viTri1];
    arrNumbers[viTri1] = arrNumbers[viTri2];
    arrNumbers[viTri2] = temp;

    // Cập nhật lại giao diện hiển thị mảng
    const txtArray = document.getElementById("txtArray");
    txtArray.innerHTML =
      "👉 Dãy số hiện tại: [ " + arrNumbers.join(", ") + " ]";
    txtKetQua6.innerHTML =
      "👉 Đã đổi chỗ vị trí " +
      viTri1 +
      " và " +
      viTri2 +
      ". Mảng mới: [ " +
      arrNumbers.join(", ") +
      " ]";
  }
};

// ==========================================
// 7. SẮP XẾP MẢNG TĂNG DẦN
// ==========================================
const btnSapXep = document.getElementById("btnSapXep");
btnSapXep.onclick = function () {
  const txtKetQua7 = document.getElementById("txtKetQua7");
  if (arrNumbers.length === 0) {
    txtKetQua7.innerHTML = "👉 Vui lòng thêm số vào mảng trước!";
  } else {
    // Dùng 2 vòng lặp for (Interchange Sort)
    for (let i = 0; i < arrNumbers.length - 1; i++) {
      for (let j = i + 1; j < arrNumbers.length; j++) {
        if (arrNumbers[i] > arrNumbers[j]) {
          const temp = arrNumbers[i];
          arrNumbers[i] = arrNumbers[j];
          arrNumbers[j] = temp;
        }
      }
    }

    const txtArray = document.getElementById("txtArray");
    txtArray.innerHTML =
      "👉 Dãy số hiện tại: [ " + arrNumbers.join(", ") + " ]";
    txtKetQua7.innerHTML =
      "👉 Mảng sau khi sắp xếp tăng dần: [ " + arrNumbers.join(", ") + " ]";
  }
};

// ==========================================
// 8. TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
// ==========================================
function kiemTraSoNguyenTo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const btnSoNguyenToDauTien = document.getElementById("btnSoNguyenToDauTien");
btnSoNguyenToDauTien.onclick = function () {
  const txtKetQua8 = document.getElementById("txtKetQua8");
  let sntDauTien = -1;
  for (let i = 0; i < arrNumbers.length; i++) {
    if (kiemTraSoNguyenTo(arrNumbers[i])) {
      sntDauTien = arrNumbers[i];
      break;
    }
  }

  if (sntDauTien !== -1) {
    txtKetQua8.innerHTML = "👉 Số nguyên tố đầu tiên: " + sntDauTien;
  } else {
    txtKetQua8.innerHTML = "👉 Không có số nguyên tố trong mảng (kết quả: -1)";
  }
};

// ==========================================
// 9. ĐẾM SỐ NGUYÊN TRONG MẢNG SỐ THỰC
// ==========================================
let arrFloatNumbers = [];

const btnThemSoThuc = document.getElementById("btnThemSoThuc");
btnThemSoThuc.onclick = function () {
  const rawValue = document.getElementById("inputSoThuc").value;
  if (rawValue === "") {
    alert("Vui lòng nhập một số thực!");
    return;
  }

  const soThuc = document.getElementById("inputSoThuc").value * 1;
  arrFloatNumbers.push(soThuc);

  const txtArraySoThuc = document.getElementById("txtArraySoThuc");
  txtArraySoThuc.innerHTML =
    "👉 Mảng số thực: [ " + arrFloatNumbers.join(", ") + " ]";

  document.getElementById("inputSoThuc").value = "";
  document.getElementById("inputSoThuc").focus();
};

const btnDemSoNguyen = document.getElementById("btnDemSoNguyen");
btnDemSoNguyen.onclick = function () {
  const txtKetQua9 = document.getElementById("txtKetQua9");
  let demSoNguyen = 0;
  for (let i = 0; i < arrFloatNumbers.length; i++) {
    if (Number.isInteger(arrFloatNumbers[i])) {
      demSoNguyen++;
    }
  }
  txtKetQua9.innerHTML =
    "👉 Số lượng số nguyên trong mảng số thực: " + demSoNguyen;
};

// ==========================================
// 10. SO SÁNH SỐ LƯỢNG SỐ ÂM VÀ SỐ DƯƠNG
// ==========================================
const btnSoSanh = document.getElementById("btnSoSanh");
btnSoSanh.onclick = function () {
  const txtKetQua10 = document.getElementById("txtKetQua10");
  let soDuong = 0;
  let soAm = 0;

  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] > 0) {
      soDuong++;
    } else if (arrNumbers[i] < 0) {
      soAm++;
    }
  }

  if (soDuong > soAm) {
    txtKetQua10.innerHTML =
      "👉 Số dương > Số âm (" + soDuong + " > " + soAm + ")";
  } else if (soDuong < soAm) {
    txtKetQua10.innerHTML =
      "👉 Số âm > Số dương (" + soAm + " > " + soDuong + ")";
  } else {
    txtKetQua10.innerHTML =
      "👉 Số dương = Số âm (" + soDuong + " = " + soAm + ")";
  }
};
