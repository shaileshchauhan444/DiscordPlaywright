import { _electron as electron, ElectronApplication, Page } from 'playwright';
import { execSync } from 'child_process';

export async function launchDiscord(): Promise<{
  app: ElectronApplication;
  page: Page;
}> {
  try {
    console.log('Launching Discord...');
    const app = await electron.launch({
      executablePath:
        'C:/Users/SHAILESH/AppData/Local/Discord/app-1.0.9219/Discord.exe',
      args: []
    });

    console.log('Discord launched successfully.');
    const page = await app.firstWindow();
    await page.waitForLoadState('load');

    console.log('First window loaded.');
    return { app, page };
  } catch (error) {
    console.error('Error launching Discord:', error);
    throw error;
  }
}