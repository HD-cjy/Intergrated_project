<script>
    import { onMount } from 'svelte';
    import { database } from '../firebaseConfig';
    import { ref, get } from 'firebase/database';
  
    let gameId;
    let game;
    let username = '';
    let startTime;
  
    $: gameId = $page.params.gameId;
  
    onMount(async () => {
      const gameRef = ref(database, 'games/' + gameId);
      const snapshot = await get(gameRef);
      game = snapshot.val();
    });
  
    function startGame() {
      startTime = Date.now();
    }
  
    function handleWordClick(word) {
      // Handle word click logic
    }
  </script>
  
  <main>
    {#if game}
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <label>Username</label>
      <input type="text" bind:value={username} />
      <button on:click={startGame}>Start</button>
      <div class="grid">
        <!-- Render grid with words -->
      </div>
      <div class="sidebar">
        <h2>Words to find</h2>
        <ul>
          {#each game.words as word}
            <li on:click={() => handleWordClick(word)}>{word}</li>
          {/each}
        </ul>
      </div>
    {/if}
  </main>
  
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-gap: 5px;
    }
    .sidebar {
      position: fixed;
      right: 0;
      top: 0;
      width: 200px;
    }
  </style>
  