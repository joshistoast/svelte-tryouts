<script lang='ts'>
import { goto } from '$app/navigation'
import {
  TextBox,
  TextBoxButton,
  TextBlock,
} from 'fluent-svelte'

let searchQuery = ''
let history: string[] = []

const onSearch = () => {
  if (searchQuery.length) {
    goto(`/searching-data/${searchQuery}`)
  }
}
</script>

<TextBlock>
  <h1>Search the dictionary</h1>
</TextBlock>

<TextBox
  placeholder='Search for a word'
  bind:value={searchQuery}
  on:keydown={(e) => {
    e.key === 'Enter' && onSearch()
  }}
>
  <TextBoxButton
    slot="buttons"
    on:click={onSearch}
  >
    Search
  </TextBoxButton>
</TextBox>

<TextBlock>
  <ul>
    {#each history as query, i}
      <li>{query}</li>
    {/each}
  </ul>
</TextBlock>
