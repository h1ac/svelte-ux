import source from '$lib/components/NumberStepper.svelte?raw';
import pageSource from './+page.svelte?raw';

export async function load() {
  return {
    meta: {
      source,
      pageSource,
      related: ['components/ScrollingNumber'],
    },
  };
}