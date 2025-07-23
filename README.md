# Material Theme for VS Code

This is a fork of vsc-material-theme-stop-madness, which is a fork of the Material Theme by Mattia Astorino (Equinusocio).

It's intended to be installed locally.

## Build and Install 

To build this, first ensure you have npm and vsce installed:
```bash
brew install npm
```

```bash
npm install -g @vscode/vsce
```

Install dependencies, then build:
```bash
npm install
npm run build
```

Package as an extension:
```bash
vsce package
```

Install into code or windsurf:
```bash
# VSCode
code --install-extension vsc-material-theme-0.0.1.vsix
# Windsurf
/Applications/Windsurf.app/Contents/Resources/app/bin/windsurf --install-extension vsc-material-theme-0.0.1.vsix
```

