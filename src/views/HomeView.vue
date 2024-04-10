<template>
  <div class="home text-center">
    <h1 class="mb-4">Selamat Datang di Aplikasi To Do List</h1>
    <p class="mb-3">
      Aplikasi ini dirancang untuk membantu Anda melacak target dan kegiatan yang ingin Anda capai.
      Dengan antarmuka yang ramah pengguna, Anda dapat dengan mudah menandai kegiatan sebagai
      selesai atau belum selesai, serta memfilter kegiatan berdasarkan statusnya.
    </p>
    <p class="mb-3">
      Dibangun menggunakan Vue.js dan Pinia, aplikasi ini mengimplementasikan konsep state
      management untuk memastikan pengalaman pengguna yang lancar dan responsif. Kami berharap
      aplikasi ini dapat menjadi alat yang berguna dalam meningkatkan produktivitas Anda.
    </p>
    <p>Selamat mencoba dan semoga berhasil mencapai semua target Anda!</p>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}

h1 {
  color: #9370db;
}
.cursor-pointer {
  cursor: pointer;
}

h1,
p {
  color: #fff; /* Mengubah warna tulisan menjadi putih agar lebih terlihat */
}

p {
  color: #fff;
  font-size: 16px;
}
</style>
