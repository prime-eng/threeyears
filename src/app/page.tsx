
import PhotoCard from "@/components/PhotoCard";

const photos = [
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.05 (1).jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.05.jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.06 (1).jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.06.jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.07 (1).jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.07.jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.08 (1).jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.08.jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.09.jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.10.jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.11.jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.12.jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.13 (1).jpeg",
    alt: "",
  },
  {
    src: "/threeyears/images/WhatsApp Image 2026-10-24 at 21.33.13.jpeg",
    alt: "",
  },
];

const memories = [
  {
    number: "01",
    year: "TAHUN PERTAMA",
    title: "Awal dari cerita kita",
    description:
      "Dari dua orang yang mulai saling mengenal, tumbuh cerita kecil yang perlahan menjadi sesuatu yang berarti.",
  },
  {
    number: "02",
    year: "TAHUN KEDUA",
    title: "Belajar saling memahami",
    description:
      "Kita belajar bahwa hubungan bukan hanya tentang bahagia, tetapi juga tentang mendengar, memahami, dan tetap memilih satu sama lain.",
  },
  {
    number: "03",
    year: "TAHUN KETIGA",
    title: "Masih kamu, sampai hari ini",
    description:
      "Waktu terus berjalan, cerita terus bertambah, dan aku masih bersyukur karena sampai hari ini kita masih berjalan bersama.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGASI */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <span>♡</span> our little story
        </a>

        <div className="nav-links">
          <a href="#memories">Kenangan</a>
          <a href="#timeline">Perjalanan</a>
          <a href="#letter">Surat untukmu</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-eyebrow">
            SEBUAH CERITA TENTANG KITA
          </p>

          <h1>
            Tiga Tahun,
            <br />
            <em>Masih Kamu.</em>
          </h1>

          <p className="hero-description">
            Ribuan cerita, banyak kenangan,
            dan satu orang yang masih ingin
            aku temui di setiap hari esok.
          </p>

          <a href="#memories" className="hero-button">
            Lihat cerita kita <span>↓</span>
          </a>

          <div className="hero-date">
            <span>♡</span> THREE YEARS AND COUNTING
          </div>
        </div>

        <div className="hero-decoration hero-decoration-one">
          ♡
        </div>
        <div className="hero-decoration hero-decoration-two">
          ✳
        </div>
      </section>

      {/* PEMBUKA */}
      <section className="intro-section">
        <div className="section-label">
          <span>01</span>
          <span className="label-line" />
          OUR STORY
        </div>

        <div className="intro-content">
          <p className="intro-small">
            Untuk seseorang yang selalu punya tempat
            di cerita ini,
          </p>

          <h2>
            Kalau waktu bisa disimpan,
            <br />
            <em>aku ingin menyimpan semuanya.</em>
          </h2>

          <p className="intro-description">
            Bukan cuma hari-hari yang sempurna,
            tetapi juga obrolan sederhana, tawa
            tanpa alasan, momen kecil, dan semua
            hal yang membuat perjalanan kita
            terasa istimewa.
          </p>

          <div className="intro-signature">
            made with love <span>♡</span>
          </div>
        </div>
      </section>

      {/* GALERI FOTO */}
      <section className="memories-section" id="memories">
        <div className="section-heading">
          <div className="section-label">
            <span>02</span>
            <span className="label-line" />
            LITTLE MOMENTS
          </div>

          <h2>
            Potongan kecil
            <br />
            <em>dari cerita besar kita.</em>
          </h2>

          <p>
            Empat belas potongan kenangan,
            dan masih banyak cerita yang belum
            sempat kita abadikan.
          </p>
        </div>

        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div
              className={`gallery-item gallery-item-${(index % 4) + 1}`}
              key={photo.src}
            >
              <PhotoCard
                src={photo.src}
                alt={photo.alt}
              />
              <span className="gallery-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        <p className="gallery-note">
          setiap foto punya cerita, setiap cerita punya kamu ♡
        </p>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section" id="timeline">
        <div className="section-label">
          <span>03</span>
          <span className="label-line" />
          OUR JOURNEY
        </div>

        <div className="timeline-heading">
          <h2>
            Tiga tahun
            <br />
            <em>yang berarti.</em>
          </h2>

          <p>
            Kita mungkin tidak selalu tahu apa yang
            menunggu di depan. Tapi kita sudah sampai
            sejauh ini, satu langkah demi satu langkah.
          </p>
        </div>

        <div className="timeline">
          {memories.map((memory, index) => (
            <article
              className={`timeline-item ${
                index % 2 === 0
                  ? "timeline-left"
                  : "timeline-right"
              }`}
              key={memory.number}
            >
              <div className="timeline-marker">
                {memory.number}
              </div>

              <div className="timeline-card">
                <span className="timeline-year">
                  {memory.year}
                </span>

                <h3>{memory.title}</h3>

                <p>{memory.description}</p>

                <span className="timeline-heart">♡</span>
              </div>
            </article>
          ))}
        </div>

        <div className="timeline-end">
          <span>♡</span>
          <p>And our story continues...</p>
        </div>
      </section>

      {/* SURAT */}
      <section className="letter-section" id="letter">
        <div className="letter-paper">
          <div className="letter-top">
            <span>SEBUAH SURAT KECIL</span>
            <span>♡</span>
          </div>

          <div className="letter-content">
            <p className="letter-greeting">
              Untuk kamu,
            </p>

            <h2>
              Terima kasih
              <br />
              <em>masih di sini.</em>
            </h2>

            <p>
              Tiga tahun mungkin terdengar seperti
              waktu yang panjang, tetapi saat
              mengingat semua yang sudah kita lewati,
              rasanya masih banyak hal yang ingin
              aku ceritakan dan lakukan bersamamu.
            </p>

            <p>
              Terima kasih untuk setiap tawa,
              perhatian, kesabaran, dan hal-hal
              sederhana yang mungkin terlihat kecil,
              tetapi selalu punya arti buat aku.
            </p>

            <p>
              Aku tahu kita bukan dua orang yang
              selalu sempurna. Akan ada hari yang
              mudah dan ada hari yang membutuhkan
              lebih banyak pengertian. Aku hanya
              berharap kita terus belajar, tumbuh,
              dan saling menggenggam ketika
              perjalanan terasa tidak mudah.
            </p>

            <p>
              Kalau suatu hari nanti kita membuka
              halaman ini lagi, aku ingin kita
              tersenyum mengingat betapa jauhnya
              kita sudah berjalan.
            </p>

            <p>
              Dan kalau aku boleh berharap untuk
              satu hal lagi, aku ingin masih punya
              banyak halaman baru untuk ditulis
              bersamamu.
            </p>

            <p className="letter-closing">
              Dengan penuh sayang,
            </p>

            <p className="letter-signature">
              Aku, yang masih memilih kamu. ♡
            </p>
          </div>

          <div className="letter-stamp">WITH LOVE</div>
        </div>
      </section>

      {/* MUSIK */}
      <section className="song-section" id="song">
        <div className="section-label">
          <span>04</span>
          <span className="label-line" />
          OUR SONG
        </div>

        <div className="song-content">
          <div className="song-icon">
            <span>♫</span>
            <span className="song-heart">♡</span>
          </div>

          <p className="song-eyebrow">
            A LITTLE MUSIC FOR US
          </p>

          <h2>
            Aku bikin lagu yang
            <br />
            <em>selalu mengingatkanku padamu.</em>
          </h2>

          <p className="song-description">
            Putar lagu kita sambil mengingat
            semua hal yang sudah kita lewati.
          </p>

          <audio
            className="song-player"
            controls
            preload="metadata"
          >
            <source
              src="/music/Masih-kamu.mp3"
              type="audio/mpeg"
            />
            Browser kamu tidak mendukung pemutar audio.
          </audio>

          <p className="song-note">
            our song, our memories, our little world ♡
          </p>
        </div>
      </section>

      {/* PENUTUP */}
      <footer className="footer">
        <div className="footer-heart">♡</div>

        <p className="footer-main">
          Tiga tahun, masih kamu.
        </p>

        <p className="footer-subtitle">
          Dan semoga masih kamu untuk cerita-cerita berikutnya.
        </p>

        <div className="footer-divider">
          <span />
          <span>♡</span>
          <span />
        </div>

        <p className="footer-credit">
          MADE WITH LOVE · JUST FOR US
        </p>

        <a href="#home" className="back-to-top">
          Kembali ke atas ↑
        </a>
      </footer>
    </main>
  );
}
