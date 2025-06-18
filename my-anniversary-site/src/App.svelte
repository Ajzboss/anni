<script>
  // Image section
  import { onMount } from 'svelte';
  import './App.css';

  let playing = false;
  let audio;

  onMount(() => {
    audio = new Audio('/music/song.mp3');
  });

  function toggleMusic() {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    playing = !playing;
  }

  import { fly, fade } from 'svelte/transition';

  let selectedImage = null;

  const images = [
    {
    src: '/images/bear.jpg',
    alt: 'Memory 1',
    note: 'I still think of how cute you looked that day 🐻',
    location: 'Santa Monica Pier, 2022'
  },
  {
    src: '/images/drink.jpg',
    alt: 'Memory 2',
    note: 'Remember how we tried for an hour to catch a fish? That place was awesome.',
    location: 'Shibuya, Tokyo 2024'
  },
  {
    src: '/images/kiss.jpg',
    alt: 'Memory 3',
    note: 'What a silly little kiss in the middle of our japan trip.',
    location: 'Big Sur Coast'
  },
  {
    src: '/images/train.jpg',
    alt: 'Memory 4',
    note: 'Late night rides, tired eyes, full hearts.',
    location: 'Los Angeles, 2024'
  }
  ];

  function openCard(image) {
    selectedImage = image;
  }

  function closeCard() {
    selectedImage = null;
  }


  //  Card Section
  let showCard = false;

  let anniversaryLines = [
    "One year, countless smiles, and endless memories.",
    "Thank you for being my safe place, my joy, my everything.",
    "Every moment with you is a page I never want to stop writing.",
    "Here’s to forever — with you."
  ];

  // when the section scrolls into view
  function handleScrollReveal(entry) {
    if (entry.isIntersecting) {
      showCard = true;
    }
  }
  function observe(node) {
    const observer = new IntersectionObserver(([entry]) => {
      handleScrollReveal(entry);
    }, {
      threshold: 0.5
    });
    observer.observe(node);
    return {
      destroy() {
        observer.disconnect();
      }
    };
  }
</script>

<div class="container">
  <h1>Happy Anniversary Shawty❤️</h1>
  <p>Here's to our journey so far.</p>
  <div class="gallery">
    {#each images as img}
    <button class="img-button" on:click={() => openCard(img)} aria-label={img.alt}>
      <img src={img.src} alt={img.alt} />
    </button>
  {/each}
  </div>
  {#if selectedImage}
  <div class="overlay" role="dialog" tabindex="0" on:click={closeCard} on:keydown={(e) => e.key === 'Escape' && closeCard()}>
    <div class="card" transition:fly={{ y: 40, duration: 300 }} on:click|stopPropagation>
      <img src={selectedImage.src} alt={selectedImage.alt} />
      <p class="note">{selectedImage.note}</p>
      <p class="location">📍 {selectedImage.location}</p>
      <button on:click={closeCard}>Close</button>
    </div>
  </div>
  {/if}
  <br />
  <button on:click={toggleMusic}>
    {playing ? 'Pause Music' : 'Play Music'}
  </button>
</div>

<div class="container">
  <div use:observe class="anniversary-wrapper">
  {#if showCard}
    <div class="anniversary-card">
      {#each anniversaryLines as line, i}
        <p class="anniversary-line" transition:fade={{ delay: i * 1000 }}>
          {line}
        </p>
      {/each}
    </div>
  {/if}
  </div>
</div>