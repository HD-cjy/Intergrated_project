<script>
    import { database } from '../firebaseConfig';
    import { ref, set } from 'firebase/database';
  
    let title = '';
    let description = '';
    let words = Array(10).fill('');
  
    async function createGame() {
      const gameId = Math.random().toString(36).substr(2, 9);
      await set(ref(database, 'games/' + gameId), {
        title,
        description,
        words,
        createdAt: Date.now()
      });
      alert('Game created! Share this link: /game/' + gameId);
    }
  </script>
  
  <main>
    <h1>Create Word Search Game</h1>
    <label>Title</label>
    <input type="text" bind:value={title} />
    <label>Description</label>
    <input type="text" bind:value={description} />
    {#each words as word, index}
      <input type="text" bind:value={words[index]} placeholder="Word {index + 1}" />
    {/each}
    <button on:click={createGame}>Create Game</button>
  </main>
  