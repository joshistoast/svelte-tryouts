<script lang="ts">
  import 'fluent-svelte/theme.css'
  import Nav from '../components/nav.svelte'
</script>

<div class="page-layout">
  <aside class="page-sidebar">
    <Nav />
  </aside>

  <main class="page-main">
    <div class="page-main__inner">
      <slot />
    </div>
  </main>
</div>


<style>
  :global(html, body) {
		background-color: var(--fds-solid-background-base);
		color: var(--fds-text-primary);
    margin: 0;
	}
  *,
	*::before,
	*::after {
		box-sizing: border-box;
		-webkit-user-drag: none;
	}

  .page-layout {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }
  .page-sidebar {
    display: flex;
    flex-direction: column;
    width: 200px;
    position: sticky;
    top: 0;
    align-self: flex-start;
  }
  .page-main {
    padding: 0.5rem;
    flex: 1;
  }
  .page-main__inner {
    border-radius: var(--fds-overlay-corner-radius);
    background-color: var(--fds-layer-background-default);
    width: 100%;
    min-height: 100%;
    padding: 1rem;
  }
</style>
