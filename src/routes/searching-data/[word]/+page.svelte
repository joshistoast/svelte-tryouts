<script lang='ts'>
import {
  InfoBar,
  TextBlock,
  Expander,
  InfoBadge,
  Button,
} from 'fluent-svelte'

import type { PageData } from './$types'
export let data: PageData

const goBack = () => {
  history.back()
}
</script>

<div style="display:block;">
  <Button
    on:click={goBack}
  >
    Go Back
  </Button>
</div>


{#if data.data.length}
  {#each data.data as word, i}
    <TextBlock>
      <h1 style="text-transform: capitalize">{word.word}</h1>
      {#if word.origin}
        <p>{word.origin}</p>
      {/if}
      </TextBlock>
      <div style="display:grid;gap:8px">
        {#each word.meanings as meaning, j}
          <Expander
            expanded={j === 0}
          >
            {word.word} - {meaning.partOfSpeech}
            <svelte:fragment slot="content">
                {#each meaning.definitions as definition, k}
                  <InfoBar
                    closable={false}
                  >
                    <svelte:fragment slot="icon">
                      <InfoBadge>{k + 1}</InfoBadge>
                    </svelte:fragment>
                    <p>{definition.definition}</p>
                    {#if definition.example}
                      <p>Example: {definition.example}</p>
                    {/if}
                  </InfoBar>
                {/each}
            </svelte:fragment>
          </Expander>
        {/each}
      </div>
  {/each}
{:else}
  <InfoBar
    closable={false}
    severity="critical"
  >
    <h1>{data.data.title || 'No words found'}</h1>
    <p>{data.data.message}</p>
  </InfoBar>
{/if}
