---
section: ides-and-editors
title: Terminal (Browser)
---

<script context="module">
  export const prerender = true;
  import Keybind from "$lib/components/keybind.svelte";
</script>

# Terminal (Browser)

> The Browser Terminal is currently in [Early Access](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/17724).

The Browser Terminal is a standalone IDE option built with the same technologies powering VS Code's terminals.

![Browser Terminal](../../../static/images/docs/browser-terminal.png)

## Accessing tasks

If you have pre-defined tasks in your `.gitpod.yml`, they will not appear right away as separate terminals like in JetBrains IDEs or VS Code. You can interface with tasks using [`gp tasks`](/docs/references/gitpod-cli#tasks).

## Accessing ports

Similar to tasks, you may want to open different ports' URLs. You can do that with [`gp preview`](/docs/references/gitpod-cli#preview).

> **Note**:💡 `gp preview` and `gp preview --external` have the same effect with the Browser Terminal, because split-view is not available there.

## FAQs

### How can I create more terminals at once?

For multitasking with multiple terminals at the same time, we recommend using `tmux`, which enables tiling your main terminal into multiple ones and much more.

**Read more**:

[A beginner's guide to tmux | Red Hat](https://www.redhat.com/sysadmin/introduction-tmux-linux)
