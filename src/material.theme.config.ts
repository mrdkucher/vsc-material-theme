import {
  commands as Commands,
  ExtensionContext
} from 'vscode';

import * as ThemeCommands from './commands';
import { extensionManager } from './core/extension-manager';
import { ReleaseNotesWebview } from './webviews/ReleaseNotes';

export async function activate(context: ExtensionContext): Promise<void> {
  context.globalState.setKeysForSync([extensionManager.VERSION_KEY]);
  await extensionManager.init(context);
  const releaseNotesView = new ReleaseNotesWebview(context);

  // Registering commands
  Commands.registerCommand('materialTheme.setAccent', ThemeCommands.setAccent);
  Commands.registerCommand('materialTheme.showReleaseNotes', async () => releaseNotesView.show());
}
