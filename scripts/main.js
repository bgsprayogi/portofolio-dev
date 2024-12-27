// clear Form before upload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const heroName = document.querySelector('.hero-name');
    const text = "Muhammad Bagas Prayogi.";
    let index = 0;
    let isDeleting = false;
    let delay = false;

    function type() {
      if (!delay) {
        if (!isDeleting && index <= text.length) {
          // Mengetik
          heroName.textContent = text.substring(0, index);
          index++;
        } else if (isDeleting && index >= 0) {
          // Menghapus
          heroName.textContent = text.substring(0, index);
          index--;
        }

        // Ganti state jika selesai mengetik atau menghapus
        if (index === text.length && !isDeleting) {
          delay = true; // Aktifkan jeda
          setTimeout(() => {
            delay = false;
            isDeleting = true;
          }, 2000); // Durasi jeda sebelum mulai menghapus
        } else if (index === 0 && isDeleting) {
          isDeleting = false;
        }
      }

      // Kecepatan animasi mengetik/hapus
      const speed = isDeleting ? 50 : 70;
      setTimeout(type, speed);
    }

    heroName.textContent = ''; // Kosongkan elemen sebelum mulai animasi
    type();
  });