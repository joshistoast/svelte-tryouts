<script lang='ts'>
import {
  InfoBar,
  TextBlock,
  Expander,
} from 'fluent-svelte'
import type { PageData } from './$types'
export let data: PageData
</script>

{#if data.words}
  {#each data.words as word, i}
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
              <TextBlock>
                {#each meaning.definitions as definition, k}
                  <div>
                    <h3>Definition {meaning.definitions.length > 1 ? `(${k + 1})` : ''}</h3>
                    <p>{definition.definition}</p>
                    {#if definition.example}
                      <p>Example: {definition.example}</p>
                    {/if}
                  </div>
                {/each}
              </TextBlock>
            </svelte:fragment>
          </Expander>
        {/each}
      </div>
  {/each}
{:else}
  <InfoBar>
    No words found
  </InfoBar>
{/if}
