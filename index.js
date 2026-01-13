function calculate() {
  const w = parseFloat(document.getElementById('width').value) || 0;
  const l = parseFloat(document.getElementById('length').value) || 0;
  const t = parseFloat(document.getElementById('thickness').value) || 0;

  // สูตร: กว้าง x ยาว x หนา x 0.00785 (สำหรับเหล็กทั่วไป)
  // หรือใช้ค่า 0.0079 ตามที่โจทย์ระบุ
  const weight = w * l * t * 0.00000785;

  // ถ้าคุณต้องการใช้ค่า 0.0079 ตรงๆ (มักจะเป็นหน่วย cm) ให้แก้บรรทัดบนเป็น:
  // const weight = w * l * t * 0.0079;

  document.getElementById('totalWeight').innerHTML =
    weight.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + ' <span class="unit">กก.</span>';
}
