<script>
  let rando;
  $: result = rando > 50 ? "Winner!" : "Loser!";
  function setRando() {
    rando = Math.round(Math.random() * 100);
  }
</script>

<button on:click={setRando}>
  Score: {rando}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #095615;
    background-color: rgba(37, 237, 1, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #186802;
  }

  button:active {
    background-color: rgba(16, 110, 5, 0.2);
  }
</style>
