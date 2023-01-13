<script>
import {
  Button,
  InfoBar,
} from 'fluent-svelte'

let count = 0

const increment = () => {
  count += 1
}
const reset = () => {
  count = 0
}
</script>

<Button
  on:click={increment}
  variant="accent"
>
  clicked {count} times
</Button>

{#if count >= 1}
  <Button
    on:click={reset}
  >
    reset
  </Button>
{/if}

{#if count > 10}
  <InfoBar
    closable={false}
    style="margin-top: 1rem;"
  >
    You clicked more than 10 times!
  </InfoBar>
{/if}
