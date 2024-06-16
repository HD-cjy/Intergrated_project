<script>
    import { Router, Route, Link } from 'svelte-routing';
    import WordSearchMaker from './WordSearchMaker.svelte';
    import Game from './Game.svelte';
  </script>
  
  <main>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create Game</Link>
    </nav>
  
    <Router>
      <Route path="/" component={WordSearchMaker} />
      <Route path="/game/:gameId" component={Game} />
    </Router>
  </main>
  
  <style>
    nav {
      background: #f8f9fa;
      padding: 1rem;
    }
  
    nav a {
      margin-right: 1rem;
      text-decoration: none;
      color: #007bff;
    }
  </style>
  