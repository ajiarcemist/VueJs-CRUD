<template>
  <div class="home text-center">
    <h1 class="mb-4">Selamat Datang di Aplikasi To Do List</h1>

    <p class="mb-3">
      Aplikasi ini dirancang untuk membantu Anda melacak target dan kegiatan yang ingin Anda capai.
    </p>
    <ul class="features-list">
      <li class="text-white">
        Antarmuka yang ramah pengguna, memudahkan penandaan kegiatan sebagai selesai atau belum
        selesai.
      </li>
      <li class="text-white">Kemampuan untuk memfilter kegiatan berdasarkan statusnya.</li>
      <li class="text-white">
        Dibangun menggunakan <strong>Vue.js</strong> dan <strong>Pinia</strong>, mengimplementasikan
        konsep state management untuk pengalaman pengguna yang lancar dan responsif.
      </li>
    </ul>
    <p>Selamat mencoba dan semoga berhasil mencapai semua target Anda!</p>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}

.logo {
  width: 100px;
  margin: 20px;
}

.features-list {
  text-align: left;
  display: inline-block;
  margin-bottom: 20px;
}

h1 {
  color: #9370db;
}

h1,
p {
  color: #fff; /* Mengubah warna tulisan menjadi putih agar lebih terlihat */
}

p {
  font-size: 16px;
}
</style>
