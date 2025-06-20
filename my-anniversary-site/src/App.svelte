<script>
  // Image section
  import { onMount } from 'svelte';
  import Typewriter from './lib/Typewriter.svelte';
  import './App.css';

  let playing = false;
  let audio;
  let currentLineIndex = 0;

  function onLineDone() {
    currentLineIndex += 1;
  }

  onMount(() => {
    audio = new Audio(import.meta.env.BASE_URL+'music/Like.mp3');
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
    src: import.meta.env.BASE_URL+ '/images/bear.jpg',
    alt: 'Memory 1',
    note: 'I still think of how cute you looked peeking behind the bear that day. I wanted to steal flowers from the pier and give them to you.',
    location: 'Pike Place, Seattle 2024'
  },
  {
    src: import.meta.env.BASE_URL+'/images/drink.jpg',
    alt: 'Memory 2',
    note: 'Remember how we tried for an hour to catch a fish? That place was awesome.',
    location: 'Shibuya, Tokyo 2024'
  },
  {
    src: import.meta.env.BASE_URL+'/images/kiss.jpg',
    alt: 'Memory 3',
    note: 'What a silly little kiss in the middle of our japan trip.',
    location: 'Big Sur Coast'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/train.jpg',
    alt: 'Memory 4',
    note: 'Late night rides, tired eyes, full hearts.',
    location: 'Los Angeles, 2024'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/thrift.jpg',
    alt: 'Memory 5',
    note: 'We went thrift shopping and while largely we kinda biffed it, we did find this cute little shirt. Shoulda bought it.',
    location: 'Seattle, 2024'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/balloon.jpg',
    alt: 'Memory 6',
    note: 'I know you did not love this trip, but this photo was still worth remembering. Our highest point together lmao',
    location: 'Los Angeles, 2024'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/sett.jpg',
    alt: 'Memory 7',
    note: 'HES HOT OKAY YOUR WRONG FOR THINKING HES A MAMAS BOY AND YOU WONT CHANGE MY MIND. I love you.',
    location: 'League, 2024'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/clothes.jpg',
    alt: 'Memory 8',
    note: 'I always know I can count on you to know what will look good. Your fashion sense is impeccable. Like good idea telling me to get these pants',
    location: 'Los Angeles, 2024'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/hotpot.jpg',
    alt: 'Memory 9',
    note: 'I love eating food with you, watching your reaction, and critiquing together. I especially love how you always try to get me to eat more. Thank you for cooking this hotpot, and many meals since, for me. I love every bite.',
    location: 'Los Angeles, 2024'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/nathan.jpg',
    alt: 'Memory 10',
    note: 'Remember when you met Nathan? I still think about how you were so nervous to meet him, and now we clown him for drinking out of a pot.',
    location: 'Los Angeles, 2025'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/tower.jpg',
    alt: 'Memory 11',
    note: 'IM Sorry you look so fucking good in this photo I want to pick you up and- anyways, I love you.',
    location: 'Japan, 2024'
  },
  {
    src: import.meta.env.BASE_URL+ '/images/jtree.jpg',
    alt: 'Memory 12',
    note: 'The view from the mountain was so nice. We never did climb on that rock though.',
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
    //Outside the Letter
  let showLetter = false;
  function openLetter() {
  showLetter = true;
  setTimeout(() => {
    showAnniversaryCard = true;
    currentLineIndex = 0; // reset if reopened
  }, 500);
}
  
    //Inside the Letter
  let showAnniversaryCard = false;
  let revealedLines = [];

  const anniversaryLines = [
    "I love your smile. It makes me fully melt.",
    "I love your wisdom. You are so much smarter than me. I always know I can count on your advice. Becuase your usually right.",
    "I love your patience. Through all my flaws, my slobbiness, my lack of focus, you still stay by my side and love me.",
    "I love your humor. I always know I can count on you to bang my mom, or tell me to rizz up a shawty.",
    "I love the way you hug me so tight trying to get as close to me as you physically can.",
    "Fuck I love your body.",
    "I love the way you silently grab my arm like it's everything.",
    "I love the way we walk silently besides each other, taking in our environment.",
    "I love eating food with you, watching your reaction, and critiquing together.",
    "I love how you can turn me on an instant with your eyes",
    "I love how much effort you put into your makeup, your fashion, to look good. It inspires",
    "I love showing you off to all my friends as a badass that you are.",
    "I love you cute",
    "I love you hot",
    "I love you silly",
    "I love you serious",
    "I",
    "...",
    "Love",
    "..",
    "You",
    "Emily Lu.",
    "The Body Left Behind From The Heart You Stole,",
    "Aryan Janolkar"
  ];

  function observe(node) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !showAnniversaryCard) {
        showAnniversaryCard = true;
        revealAnniversary();
      }
    }, { threshold: 0.5 });

    observer.observe(node);
    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  
  // Timeline Section
  export let events = [
    {
      date: '2024-05-14',
      title: 'First Connection',
      description: 'I gave you my 181 Notes that day at hotpot, and you gave me your smile.'
    },
    {
      date: '2024-06-14',
      title: 'I asked you out',
      description: 'You then proceeded to talk about popcorn chicken.'
    },
    {
      date: '2024-06-21',
      title: 'Our First Date',
      description: 'We walked through a park increadibly awkwardly, but it was the best day of my life.'
    },
    {
      date: '2024-08-010',
      title: 'I moved in',
      description: 'Kinda A Crazy Decision, but I was so happy to be with you.'
    },
    {
      date: '2024-09-20',
      title: 'Japan',
      description: 'The best trip of my life. I loved every second of it with you. How batshit crazy are we. How insanse was taking photos together at teamlabs? How goated were you when you took care of sick old me? How yummy was the sushi? ',
    },
    {
      date: '2024-11-13',
      title: 'I Made You Play League',
      description: 'The Origin Of The Our League Addiction. I should not be happy, but i am glad I got you playing it for 6 hours straight. It was the origin of the fabled lan party.',
    },
    {
      date: '2024-11-17',
      title: 'My Birthday',
      description: 'We Drove hours to a shitty indian restaurant, and you made me the happiest person alive by complaining about the food with me.',
    },
    {
      date: '2025-02-14',
      title: 'Valentines Day',
      description: 'I gave you flowers, and you gave me warmth. We had grab a crab, and damn that food tasted good'
    },
    {
      date: '2025-03-25',
      title: 'You Suddenly Missed Me',
      description: 'I was in japan getting you makeup. You texted me saying you missed me. Idk why but I cried then.'
    },
    {
      date: '2025-05-31',
      title: 'The Stars At Joshua Tree',
      description: 'I remember you exhausted from driving, pushing yourself for others happiness. We barely saw the stars that night, but I didn\'t care. I just wanted to be with you.',
    },
    {
      date: '2025-06-21',
      title: 'One Year Anniversary',
      description: 'I can\'t believe it\'s been a year already. Here\'s to many more.'
    }
  ];
</script>
<!-- Music Button -->
<button class="cute-button" on:click={toggleMusic}>
    {playing ? 'Pause Music' : 'Play Music'}
</button>
<!-- Images -->
<div class="container">
  <h1 class="cute-header">Happy Anniversary Shawty❤️</h1>
  <p class = "cute-subtitle">Here's to our journey so far.</p>
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

</div>
<!-- Card -->
<!-- ✉️ Letter Button -->
{#if !showLetter}
  <button class="letter-button" on:click={openLetter}>
    💌 Open Your Love Letter
  </button>
{/if}

<!-- ❤️ The Card -->
{#if showLetter}
  <div class="container">
    <section class="anniversary-wrapper">
      {#if showAnniversaryCard}
      <div class="anniversary-card" transition:fly={{ y: 30, duration: 600 }}>
        <h3>
          In case you didn't know, I think about you a lot. I never could have imagined the whirlwind of happiness you gifted me one year ago on that date. So much to love. In fact:
        </h3>

        {#each anniversaryLines.slice(0, currentLineIndex + 1) as line}
          <Typewriter
            text={line}
            speed={25}
            on:done={onLineDone}
          />
        {/each}
      </div>
      {/if}
    </section>
  </div>
{/if}
<!-- Timeline -->
<div class="container">
  <div class="timeline">
  {#each events as event}
    <div class="event">
      <time>{event.date}</time>
      <h3>{event.title}</h3>
      <p class="cute-subtitle">{event.description}</p>
    </div>
  {/each}
  </div>
</div>