import type { MenuStatus, MenuEntry } from "$lib/types/menu-entry";

function M(
  title: string,
  path: string,
  isSectionHeader: boolean = false,
  subMenu?: MenuEntry[],
  status?: MenuStatus
): MenuEntry {
  return {
    title,
    status,
    isSectionHeader,
    path: "/docs" + (path ? "/" + path : ""),
    subMenu,
  };
}

export const MENU: MenuEntry[] = [
  M("Introduction", "introduction", true),
  M("Getting started", "introduction/getting-started", false, [
    M("Quickstart", "introduction/getting-started/quickstart"),
  ]),
  M("Learn Gitpod", "introduction/learn-gitpod", false, [
    M(
      "One workspace per task",
      "introduction/learn-gitpod/one-workspace-per-task"
    ),
    M("Context URL", "introduction/learn-gitpod/context-url"),
  ]),
  M("Languages", "introduction/languages", false, [
    M("JavaScript", "introduction/languages/javascript"),
    M("Python", "introduction/languages/python"),
    M("Java", "introduction/languages/java"),
    M("Go", "introduction/languages/go"),
    M("Rust", "introduction/languages/rust"),
  ]),

  M("Configure", "configure", true),

  M("Workspaces", "configure/workspaces", false, [
    M("Workspace Lifecycle", "configure/workspaces/workspace-lifecycle"),
    M("Workspace Image", "configure/workspaces/workspace-image"),
    M("Tasks", "configure/workspaces/tasks"),
    M("Ports", "configure/workspaces/ports"),
    M("Collaboration", "configure/workspaces/collaboration", false, []),
    M("Multi-repo", "configure/workspaces/multi-repo", false, [], "beta"),
    M("Workspace classes", "configure/workspaces/workspace-classes"),
  ]),

  M("User settings", "configure/user-settings", false, [
    M("Browser extension", "configure/user-settings/browser-extension"),
    M("Browser settings", "configure/user-settings/browser-settings"),
    M("Browser bookmarklet", "configure/user-settings/browser-bookmarklet"),
    M("Dotfiles", "configure/user-settings/dotfiles", false, []),
    M("SSH", "configure/user-settings/ssh"),
    // M(
    //   "Access Tokens",
    //   "configure/user-settings/access-tokens",
    //   false,
    //   [],
    //   "beta"
    // ),
  ]),

  M("Projects", "configure/projects", false, [
    // Why is this side bar name different to the title / URL?
    M("Prebuilds", "configure/projects/prebuilds"),
    M("Incremental Prebuilds", "configure/projects/incremental-prebuilds"),
    M(
      "Last Successful Prebuild",
      "configure/projects/last-successful-prebuild",
      false,
      [],
      "alpha"
    ),
    M("Environment Variables", "configure/projects/environment-variables"),
  ]),

  M("Organizations", "configure/orgs", false, [
    M("Members", "configure/orgs/members"),
    M("Policies", "configure/orgs/policies"),
  ]),

  M("Authentication", "configure/authentication", false, [
    M("GitLab", "configure/authentication/gitlab"),
    M("GitHub", "configure/authentication/github"),
    M("Bitbucket", "configure/authentication/bitbucket"),
    M("GitHub Enterprise", "configure/authentication/github-enterprise"),
    M("Bitbucket Server", "configure/authentication/bitbucket-server"),
  ]),
  M("Self-Hosted", "configure/self-hosted/latest", false, [
    M(
      "Installation Guides",
      "configure/self-hosted/latest/installation-guides",
      false,
      [
        M(
          "Local Preview",
          "configure/self-hosted/latest/local-preview",
          false,
          [],
          "alpha"
        ),
        M(
          "Installing Gitpod",
          "configure/self-hosted/latest/installing-gitpod"
        ),
        M(
          "Reference Architectures",
          "configure/self-hosted/latest/reference-architecture",
          false,
          [],
          "alpha"
        ),
        M(
          "Advanced Installation",
          "configure/self-hosted/latest/advanced",
          false
        ),
      ]
    ),
    M(
      "Operational Guides",
      "configure/self-hosted/latest/operational-guides",
      false,
      [
        M("Updating", "configure/self-hosted/latest/updating"),
        M("Monitoring", "configure/self-hosted/latest/monitoring"),
        M(
          "Workspace resources",
          "configure/self-hosted/latest/configuring-workspace-resources"
        ),
        M("Backing Up", "configure/self-hosted/latest/backup-restore"),
      ]
    ),
    M(
      "Troubleshooting",
      "configure/self-hosted/latest/troubleshooting",
      false,
      [
        M(
          "Support Bundles",
          "configure/self-hosted/latest/support-bundle",
          false,
          []
        ),
        M(
          "Config Patches",
          "configure/self-hosted/latest/config-patches",
          false,
          []
        ),
        M(
          "Stop Workspaces",
          "configure/self-hosted/latest/stop-workspaces",
          false,
          []
        ),
        M(
          "Prevent Workspace Starts",
          "configure/self-hosted/latest/prevent-workspace-starts"
        ),
        M(
          "Manage Cluster Nodes",
          "configure/self-hosted/latest/manage-cluster-nodes",
          false,
          []
        ),
      ]
    ),
    M("Background", "configure/self-hosted/latest/background", false, [
      M("Disaster Recovery", "configure/self-hosted/latest/disaster-recovery"),
    ]),
    M("Reference", "configure/self-hosted/latest/reference", false, [
      M("Requirements", "configure/self-hosted/latest/requirements"),
      M("Compatibility", "references/compatibility?admin"),
      M("Telemetry", "configure/self-hosted/latest/telemetry"),
      M("Release Policies", "configure/self-hosted/latest/releases"),
      M("Upgrade Guides", "configure/self-hosted/latest/upgrade-guides"),
    ]),
  ]),
  M("Billing", "configure/billing"),

  M("References", "references", true),
  M(".gitpod.yml", "references/gitpod-yml"),
  // M("Gitpod public API", "references/gitpod-public-api", false, [], "alpha"),
  M("IDEs & editors", "references/ides-and-editors", false, [
    M("VS Code Browser", "references/ides-and-editors/vscode-browser"),
    M("VS Code Desktop", "references/ides-and-editors/vscode"),
    M(
      "IntelliJ IDEA",
      "references/ides-and-editors/intellij",
      false,
      [],
      "beta"
    ),
    M("GoLand", "references/ides-and-editors/goland", false, [], "beta"),
    M("PhpStorm", "references/ides-and-editors/phpstorm", false, [], "beta"),
    M("PyCharm", "references/ides-and-editors/pycharm", false, [], "beta"),
    M("CLion", "references/ides-and-editors/clion", false, [], "beta"),
    M("Rider", "references/ides-and-editors/rider", false, [], "beta"),
    M("RubyMine", "references/ides-and-editors/rubymine", false, [], "beta"),
    M("WebStorm", "references/ides-and-editors/webstorm", false, [], "beta"),
    M(
      "Local Companion",
      "references/ides-and-editors/local-companion",
      false,
      [],
      "beta"
    ),
    M("VS Code extensions", "references/ides-and-editors/vscode-extensions"),
    M("VS Code settings sync", "references/ides-and-editors/settings-sync"),
    M(
      "Command Line (SSH)",
      "references/ides-and-editors/command-line",
      false,
      []
    ),
    M(
      "Browser Terminal",
      "references/ides-and-editors/browser-terminal",
      false,
      [],
      "beta"
    ),
    M("FAQs", "references/ides-and-editors/faqs", false, []),
  ]),
  M("Integrations", "integrations", false, [
    M("Tailscale", "integrations/tailscale"),
    M("JetBrains Gateway", "integrations/jetbrains-gateway", false, [], "beta"),
  ]),
  M("Gitpod CLI", "references/gitpod-cli"),
  M("Compatibility", "references/compatibility?user"),
  M("Security FAQ", "references/security/faq"),
  // M("Custom Docker image", "references/gitpod-dockerfile"),
  // M("Architecture", "references/architecture"),
  M("Help", "help", true),
  M("Contribute", "help/contribute", false, [
    M("Content", "help/contribute/content"),
    M("Documentation", "help/contribute/documentation"),
    M("Features & Patches", "help/contribute/features-and-patches"),
  ]),

  M("Troubleshooting", "help/troubleshooting", false, []),
];

export interface MenuContext {
  prev?: MenuEntry;
  thisEntry?: MenuEntry;
  next?: MenuEntry;
}

export function getMenuContext(
  slug: string,
  menu: MenuEntry[] = MENU,
  context: MenuContext = {}
): MenuContext {
  for (const e of menu) {
    if (context.next) {
      return context;
    }
    if (context.thisEntry) {
      context.next = e;
      return context;
    } else if (e.path === slug) {
      context.thisEntry = e;
    } else {
      context.prev = e;
    }
    if (e.subMenu) {
      getMenuContext(slug, e.subMenu, context);
    }
  }
  return context;
}
