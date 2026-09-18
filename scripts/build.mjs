import { cp, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, relative, sep } from "node:path";
import { spawn } from "node:child_process";

const projectRoot = process.cwd();
const astroCli = join(projectRoot, "node_modules", "astro", "bin", "astro.mjs");

const runAstro = (cwd) =>
  new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [astroCli, "build"], {
      cwd,
      stdio: "inherit",
      env: process.env,
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Astro build exited with code ${code}`));
    });
  });

if (/^[\x00-\x7F]*$/.test(projectRoot)) {
  await runAstro(projectRoot);
} else {
  const buildRoot = await mkdtemp(join(tmpdir(), "accountstar-build-"));
  const ignored = new Set([".astro", ".git", "dist", "node_modules"]);

  try {
    await cp(projectRoot, buildRoot, {
      recursive: true,
      filter: (source) => {
        const part = relative(projectRoot, source).split(sep)[0];
        return !ignored.has(part);
      },
    });
    await symlink(
      join(projectRoot, "node_modules"),
      join(buildRoot, "node_modules"),
    );
    await runAstro(buildRoot);
    await rm(join(projectRoot, "dist"), { recursive: true, force: true });
    await cp(join(buildRoot, "dist"), join(projectRoot, "dist"), {
      recursive: true,
    });
  } finally {
    await rm(buildRoot, { recursive: true, force: true });
  }
}
