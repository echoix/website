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

Use a terminal running in your browser as an IDE option to open your Gitpod projects. Use the terminal for simple and quick edits, or as your full time dedicated editing environment for all workspaces that you open. 

![Browser Terminal](../../../static/images/docs/browser-terminal.png)

## Managing workspace tasks

If you have defined tasks in your `.gitpod.yml` you can view and access those tasks using the command [`gp tasks`](/docs/references/gitpod-cli#tasks). 

> **Note:** Layout configuration such as `openMode` (e.g. `split-right`) are not supported. 

## Managing workspace ports

To see open workspace ports, run [`gp ports list`](/docs/references/gitpod-cli#ports).

> **Note**: `gp preview` and `gp preview --external` have the same effect with the Browser Terminal, because split-view is not supported in a browser terminal.

## FAQs

### Can I view multiple terminals at the same time? e.g. split windows.

To open multiple terminals at the same time, we recommend `tmux`, which enables tiling your main terminal into multiple ones and much more. See [Dotfiles](/docs/configure/user-settings/dotfiles) for instructions on how to install tooling across all of your Gitpod workspaces. 

See: [A beginner's guide to tmux | Red Hat](https://www.redhat.com/sysadmin/introduction-tmux-linux) for more.
