// Bài Tập 1
document.getElementById('btn-bai-1').onclick = function () {
  // input: điểm nhập vào (Number)
  var diemChuan = Number(document.getElementById('diemChuan').value)
  var khuVuc = Number(document.getElementById('khuVuc').value)
  var doiTuong = Number(document.getElementById('doiTuong').value)
  var diemMon1 = Number(document.getElementById('diemMon1').value)
  var diemMon2 = Number(document.getElementById('diemMon2').value)
  var diemMon3 = Number(document.getElementById('diemMon3').value)
  var ketQuaBai1 = document.getElementById('ket-qua-bai-1')

  // process: xử lý điểm tổng các môn
  var diemTong = khuVuc + doiTuong + diemMon1 + diemMon2 + diemMon3

  // output: in kết quả ra màn hình
  if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
    ketQuaBai1.innerHTML = `Bạn đã rớt. Vì có môn điểm nhỏ hơn hoặc bằng 0`
  } else if (diemTong >= diemChuan) {
    ketQuaBai1.innerHTML = `Bạn đã đậu. Tổng điểm ${diemTong}`
  } else {
    ketQuaBai1.innerHTML = `Bạn đã rớt. Tổng điểm ${diemTong}`
  }
}

// Bài Tập 2
document.getElementById('btn-bai-2').onclick = function () {
  // input: họ và tên (String), số kw (Number)
  var hoVaTen = document.getElementById('hoVaTen').value
  var soKw = Number(document.getElementById('soKw').value)
  var ketQuaBai2 = document.getElementById('ket-qua-bai-2')

  // process: tính toán tổng tiền điện
  var tongTienDien = 0
  switch (true) {
    case soKw <= 0:
      alert('Số Kw nhập vào không hợp lệ bạn ơiii')
      break
    case soKw <= 50:
      tongTienDien = soKw * 500
      break
    case soKw <= 100:
      tongTienDien = 50 * 500 + (soKw - 50) * 650
      break
    case soKw <= 200:
      tongTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850
      break
    case soKw <= 350:
      tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
      break
    case soKw > 350:
      tongTienDien =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300
      break
  }

  // output: in tổng tiền điện ra màn hình
  ketQuaBai2.innerHTML = `Họ và tên: ${hoVaTen}. Tổng tiền điện: ${tongTienDien.toLocaleString()} VND`
}

// Bài Tập 3
document.getElementById('btn-bai-3').onclick = function () {
  // input: họ và tên (String), thu nhập năm (Number), số người phụ thuộc (Number)
  var hoVaTen2 = document.getElementById('hoVaTen-2').value
  var thuNhapNam = Number(document.getElementById('thuNhapNam').value)
  var soNguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value)
  var thuNhapChiuThue = thuNhapNam - 4e6 - soNguoiPhuThuoc * 16e5
  var ketQuaBai3 = document.getElementById('ket-qua-bai-3')

  // process: tính toán tiền thuế thu nhập cá nhân
  var thueThuNhapCaNhan = 0
  switch (true) {
    case thuNhapChiuThue <= 0:
      alert('Số tổng thu nhập năm nhập vào không hợp lệ bạn ơiii')
      break
    case thuNhapChiuThue <= 60e6:
      thueThuNhapCaNhan = thuNhapChiuThue * 0.05
      break
    case thuNhapChiuThue <= 120e6:
      thueThuNhapCaNhan = thuNhapChiuThue * 0.1 - 3e6
      break
    case thuNhapChiuThue <= 210e6:
      thueThuNhapCaNhan = thuNhapChiuThue * 0.15 - 9e6
      break
    case thuNhapChiuThue <= 384e6:
      thueThuNhapCaNhan = thuNhapChiuThue * 0.2 - 19.5e6
      break
    case thuNhapChiuThue <= 624e6:
      thueThuNhapCaNhan = thuNhapChiuThue * 0.25 - 38.7e6
      break
    case thuNhapChiuThue <= 960e6:
      thueThuNhapCaNhan = thuNhapChiuThue * 0.3 - 69.9e6
      break
    case thuNhapChiuThue > 960e6:
      thueThuNhapCaNhan = thuNhapChiuThue * 0.35 - 117.9e6
      break
  }

  // output: in thuế thu nhập cá nhân ra màn hình
  ketQuaBai3.innerHTML = `Họ và tên: ${hoVaTen2}. Thuế thu nhập cá nhân: ${thueThuNhapCaNhan.toLocaleString()} VND`
}

// Bài Tập 4
// Ẩn hiện input nhập số đầu kết nối khi chọn loại khách hàng
document.getElementById('chonKhachHang').onchange = function () {
  if (document.getElementById('chonKhachHang').value == 'doanhNghiep') {
    document.getElementById('soDauKetNoi').classList.remove('d-none')
  } else {
    document.getElementById('soDauKetNoi').classList.add('d-none')
  }
}
document.getElementById('btn-bai-4').onclick = function () {
  // input: (phí hóa đơn, phí dịch vụ, giá thuê kênh (Number)), mã khách hàng (String), số kênh cao cấp (Number), số đầu kết nối (Number)
  const HOA_DON_NHA_DAN = 4.5
  const PHI_DICH_VU_NHA_DAN = 20.5
  const GIA_KENH_NHA_DAN = 7.5
  const HOA_DON_DOANH_NGHIEP = 15
  const PHI_DICH_VU_DOANH_NGHIEP = 75
  const PHI_DICH_VU_DOANH_NGHIEP_BONUS = 5
  const GIA_KENH_DOANH_NGHIEP = 50
  var loaiKhachHang = document.getElementById('chonKhachHang').value
  var maKhachHang = document.getElementById('maKhachHang').value
  var soKenhCaoCap = document.getElementById('soKenhCaoCap').value
  var soDauKetNoi = document.getElementById('soDauKetNoi').value
  var ketQuaBai4 = document.getElementById('ket-qua-bai-4')

  // process: function xử lý tính tiền cáp
  function tinhTienCap(
    phiHoaDon,
    phiDichvu,
    giaThueKenh,
    soKenh,
    soDauKetNoi,
    phiDichVuBoNus
  ) {
    var tongTienCap = phiHoaDon + phiDichvu + giaThueKenh * soKenh
    return soDauKetNoi > 10
      ? (tongTienCap += (soDauKetNoi - 10) * phiDichVuBoNus)
      : tongTienCap
  }

  // output: in tiền cáp ra màn hình
  var tienCap = 0
  loaiKhachHang == 'nhaDan'
    ? (tienCap = tinhTienCap(
        HOA_DON_NHA_DAN,
        PHI_DICH_VU_NHA_DAN,
        GIA_KENH_NHA_DAN,
        soKenhCaoCap,
        0,
        0
      ))
    : loaiKhachHang == 'doanhNghiep'
    ? (tienCap = tinhTienCap(
        HOA_DON_DOANH_NGHIEP,
        PHI_DICH_VU_DOANH_NGHIEP,
        GIA_KENH_DOANH_NGHIEP,
        soKenhCaoCap,
        soDauKetNoi,
        PHI_DICH_VU_DOANH_NGHIEP_BONUS
      ))
    : alert('Thông tin nhập vào không hợp lệ')
  ketQuaBai4.innerHTML = `Mã khách hàng: ${maKhachHang}. Tiền cáp: ${tienCap.toLocaleString(
    'en-US',
    { style: 'currency', currency: 'USD' }
  )}`
}
