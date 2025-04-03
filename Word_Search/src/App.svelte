<script>
    import { Router, Route } from 'svelte-routing';
    import WordSearchMaker from './routes/WordSearchMaker.svelte';
    import Game from './routes/Game.svelte';
  </script>
  
  <Router>
    <Route path="/" component={WordSearchMaker} />
    <Route path="/game/:gameId" component={Game} />
  </Router>
  