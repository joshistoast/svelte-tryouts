<script lang="ts">
import { page } from '$app/stores';
import {
  ListItem,
} from 'fluent-svelte'
let path: string

$: path = $page.url.pathname;

const navItems = [
  {
    label: 'Start',
    to: '/'
  },
  {
    label: 'Reactions',
    to: '/reactions'
  },
  {
    label: 'Data Fetching',
    to: '/data-fetching'
  },
  {
    label: 'Searching Data',
    to: '/searching-data'
  }
]
</script>

<svelte:head>
  <title>Svelte Sandbox</title>
  <meta name="description" content="Sandbox for Svelte" />
</svelte:head>

<header>
  <nav class="nav">
    {#each navItems as item, i}
      <ListItem
        href={item.to}
        role="link"
        aria-label={item.label}
        selected={path === item.to}
      >
        {item.label}
      </ListItem>
    {/each}
  </nav>
</header>

<style>
.nav {
  padding: 0.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
