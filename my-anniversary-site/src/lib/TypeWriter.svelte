<script>
  import { createEventDispatcher } from 'svelte';

  export let text = '';
  export let speed = 50;

  const dispatch = createEventDispatcher();
  let displayText = '';
  let i = 0;

  $: if (text) {
    displayText = '';
    i = 0;
    typeNextChar();
  }

  function typeNextChar() {
    if (i < text.length) {
      setTimeout(() => {
        displayText += text[i];
        i += 1;
        typeNextChar();
      }, speed);
    } else {
      setTimeout(() => dispatch('done'), 500); // buffer after typing
    }
  }
</script>

<p class="anniversary-line">{displayText}</p>
