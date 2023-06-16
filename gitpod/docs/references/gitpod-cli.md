---
section: gp-cli
title: Gitpod CLI
description: Learn about the Gitpod CLI, a CLI tool used inside Gitpod workspaces. Also, learn about how you can use it to manage your workspaces and smooth your developer experience.
---

<script context="module">
  export const prerender = true;
</script>

# Gitpod CLI

Gitpod workspaces include a command-line-utility (`gp`) that comes installed in all workspaces and prebuilds.

> **Note:** The `gp` CLI is intended only to work inside a Gitpod workspace, and is not intended to be installed on your a local, or other machine.

```text
Command line interface for Gitpod

Usage:
  gp [command]

Available Commands:
  docs                Open Gitpod Documentation in default browser
  env                 Controls workspace environment variables.
  help                Help about any command
  info                Display workspace info, such as its ID, class, etc.
  init                Create a Gitpod configuration for this project.
  open                Opens a file in Gitpod
  ports               Interact with workspace ports.
  preview             Opens a URL in the IDE's preview
  snapshot            Take a snapshot of the current workspace
  stop                Stop current workspace
  sync-await          Awaits an event triggered using gp sync-done
  sync-done           Notifies the corresponding gp sync-await calls that this event has happened
  tasks               Interact with workspace tasks
  timeout             Interact with workspace timeout configuration
  top                 Display usage of workspace resources (CPU and memory)
  url                 Prints the URL of this workspace
  validate            [experimental] Validates the workspace (useful to debug a workspace configuration)
  version             Prints the version of the CLI

Flags:
  -h, --help   help for gp

Use "gp [command] --help" for more information about a command.
```

## init

Gitpod workspaces can be configured - see [Configuring Workspaces](/docs/configure) for more details. `gp init` generates a default `.gitpod.yml` file. You can customize it to match your requirements.

Alternatively, `gp init -i` is an interactive guide which helps create the `.gitpod.yml` configuration file based on a few questions you answer.

Example to start a interactive guide of `.gitpod.yml` configuration file:

```sh
gp init -i
```

## validate

> The `gp validate` command is currently in [Beta](/docs/help/public-roadmap/release-cycle) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/7671).

Starts a workspace within in your currently opened workspace to quickly apply and review your configuration changes. Allows you to troubleshoot your `.gitpod.yml`, workspace image, ports, tasks and more. See [configure workspaces](/docs/configure/workspaces) for more on validating a workspace configuration.

```sh
gp validate
```

## open

Modern editors/IDE's support command line tooling to open a file (e.g. VS Code `code foo.txt`). In Gitpod, this can be done using `gp open <filename>`.
We also added common aliases for `gp open`: `code` and `open`.

Example to open the `README.md` file in the current directory:

```sh
gp open README.md
```

## preview

`gp preview` opens a URL. The default is to show the URL in a preview pane within the editor or IDE directly. Alternatively, you can show the preview a new tab with the `--external` flag.

Make sure you provide a valid URL, i.e. including the protocol. For example, http://localhost:8080.

You can also use `gp preview <url> --external` to open the URL in a new browser tab.

Example opening a gitpod workspace port 3000 as a tab using `gp url` and `gp preview`:

```sh
gp preview $(gp url 3000) --external
```

## url

Gitpod workspaces can expose services to the internet. `gp url` provides the URL which points to a service served from a Gitpod workspace. For example `gp url 8080` prints the URL which points to the service listening on port 8080 in this current workspace.

You can combine the `preview` and the `url` command to open a certain path instead of the default URL.

For instance:

```sh
gp preview $(gp url 3000)/my/path/index.html
```

If you put this into the `.gitpod.yml` to open the a certain page on startup, make sure you [ignore the default action](/docs/configure/workspaces/ports) when the port opens.

## env

With `gp env API_ENDPOINT=https://api.example.com` you can set an `API_ENDPOINT` environment variable that is accessible for this project, even if you stop the workspace and start a new one.

To delete or unset an environment variable, you use `gp env -u API_ENDPOINT`.

Please refer to the help output provided by `gp env --help` for more use cases of the `gp env` command.

For instance, you can use following to get your all Gitpod environment variables:

```sh
gp env
```

## sync-await

In situations where you work with multiple terminals and one depends on a task in another terminal to complete, `gp sync-await <name>` waits until you call `gp sync-done <name>` in another terminal.

See [Start Tasks](/docs/configure/workspaces/tasks#wait-for-commands-to-complete) for a real-world example.

## sync-done

To notify a `gp sync-await <name>` call (see previous chapter), you can call `gp sync-done <name>`.

A common use case is the following where we have three terminals:

- Terminal 1: A build process takes several minutes to complete. At the end, you call `gp sync-done build`.
- Terminal 2: You use `gp sync-await build && npm run start-database` to wait for the build to complete before you start a database
- Terminal 3: You use `gp sync-await build && npm run dev` to wait for the build to complete before you start the dev server.

See [Start Tasks](/docs/configure/workspaces/tasks#wait-for-commands-to-complete) for a real-world example.

## snapshot

For sharing a complete clone of a workspace with others, `gp snapshot` is basically the CLI method for getting a snapshot URL. To learn more about snapshots, see [Collaboration & Sharing of Workspaces](/docs/configure/workspaces/collaboration#sharing-snapshots)

```sh
gp snapshot
```

## stop

`gp stop` is the CLI method of stopping a workspace.

Example to stop the current gitpod workspace using gitpod CLI:

```sh
gp stop
```

## tasks

Programmatically view and interact with workspace tasks as defined in the project's [.gitpod.yml](/docs/references/gitpod-yml). Useful when using the command line, such as ssh'ing into a workspace or after accidentally losing view of a terminal and it's output.

### list

Returns a table-formatted list of tasks, their name, state and the ID of the terminal in which the task is executed.

> **Tip**: You can see the task you are currently attached to highlighted in green.

```sh
gp tasks list
```

Use `gp tasks list --no-color` to disable colors for the output. It also respects the [`NO_COLOR`](https://no-color.org/) & `GP_NO_COLOR` environment variable.

### attach

Creates a connection from a user terminal to a given workspace's task terminal. The session is interactive. Once attached, both stdin and stdout are streamed between the user and the remote terminal. Allowing the user to run commands directly in the task terminal.

Run without arguments to get a selection prompt. When only one task is running, attach will skip the prompt and automatically connect.

```sh
gp tasks attach
```

Alternatively, specify the `Terminal ID` that you can see with `gp tasks list`:

```sh
gp tasks attach <id>
```

### stop

Interrupts one or more running tasks and automatically closes their terminals. Useful when you don't need a certain task anymore, when authoring the [.gitpod.yml](/docs/references/gitpod-yml) file or when you start a workspace for projects with several tasks but you don't need them and want to save time and resources.

Run without arguments to get a selection prompt. Only running tasks will be offered as a choice.

```sh
gp tasks stop
```

Specify the `Terminal ID` that you can see with `gp tasks list`.

```sh
gp tasks stop <id>
```

Run with the `--all` flag to stop all running tasks.

```sh
gp tasks stop --all
```

## timeout

Interact with workspace timeout configuration. You can learn more in [Life of a Workspace](/docs/configure/workspaces/workspace-lifecycle).

```sh
gp timeout show
```

> **Note:** You can only have one workspace with extended timeout at a time.

The default timeout, and the ability to extend a workspace timeout depends on your [billing configuration](/docs/configure/billing).

### set

Sets the current workspace's timeout to the given value. The value must be a positive integer followed by a unit of time. The unit of time can be one of `m`, `h` for minutes and hours, respectively. The maximum workspace timeout is 24 hours.

<!--
Technically, Following ones are also valid:

* `gp timeout set 300m`
* `gp timeout set 24h`

=> But Let's use minutes for public interaction as it's the most common use case.

-->

```sh
gp timeout set 300m
```

### show

Shows the current workspace's timeout.

```sh
gp timeout show
```

### extend

Extends the current workspace timeout from the default, or currently set value to 180 minutes.

```sh
gp timeout extend
```

## info

Displays information about the current [workspace](/docs/configure/workspaces) (such as the workspace ID and URL) and also the [workspace class](/docs/configure/workspaces/workspace-classes).

```sh
gp info
```

Use `gp info --json` to get the output in JSON format for programmatic use in (e.g. in shell scripts).

## ports

Provides a way to manage a workspace's ports. Applies to both: ports defined in [.gitpod.yml](/docs/references/gitpod-yml) and ports that are undeclared but are opened during the lifetime of the workspace.

### list

Outputs a table-formatted list of ports along with their status, URL, name and description.

```sh
gp ports list
```

Use `gp ports list --no-color` to disable colors for the output. It also respects the [`NO_COLOR`](https://no-color.org/) & `GP_NO_COLOR` environment variable.

### expose

In Gitpod, services/servers running on a port need to be _exposed_ before they become accessible from the internet. This process only works with services listening on `0.0.0.0` and not just `localhost`.
Sometimes it is not possible to make a server listen on `0.0.0.0`, e.g. because it is not your code and there are simply no means of configuration.

In that case, `gp ports expose <port>` can be used to forward all traffic form a socket listing on all network interfaces to your process listening on localhost only.

```sh
gp ports expose <port>
```

### await

When writing tasks to be executed on workspace start, one sometimes wants to wait for an http service to be available. `gp ports await` does that.

Here's an example that will open a certain path once a service is a available:

```sh
gp ports await 3000 && gp preview $(gp url 3000)/my/path/index.html
```

### visibility

You can change a port's visibility to make it only available for **users with workspace access** (`private`) or **everyone who knows the port's URL** (`public`). A port's default visibility is always `private`, unless configured differently from within [`.gitpod.yml`](/docs/references/gitpod-yml#portsnvisibility).

Here's an example which will make port `3000` public:

```sh
gp ports visibility 3000:public
```

Here's an example which will make port `3000` private:

```sh
gp ports visibility 3000:private
```

### protocol

By default ports running in the workspace are assumed to be HTTP. You can dynamically configure (without a workspace restart) a port to use HTTPS with the `gp ports protocol` command.

For example, to convert port `3000` to `https`:

```sh
gp ports protocol 3000:https
```

For example, to convert port `3000` to `http`:

```sh
gp ports protocol 3000:http
```

## top

Displays the current workspace's class info along with the used and available CPU and memory.

```sh
gp top
```

- Use `gp top --json` to get the output in JSON format for programmatic use in (e.g. in shell scripts).

- Use `gp top --no-color` to disable colors for the output. It also respects the [`NO_COLOR`](https://no-color.org/) & `GP_NO_COLOR` environment variable.

## docs

Opens the Gitpod documentation in a new browser tab.

```sh
gp docs
```
