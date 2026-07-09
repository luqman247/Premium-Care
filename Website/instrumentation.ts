export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { startFilesystemWatcher } = await import("@/lib/dam/filesystem-sync");
    startFilesystemWatcher();
  }
}
