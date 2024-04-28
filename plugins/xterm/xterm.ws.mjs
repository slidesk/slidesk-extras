export default async (message) => {
  const { cwd, command, key, env } = JSON.parse(message);
  Bun.$.env(env);
  Bun.$.cwd(cwd ?? process.env.HOME);
  const { stdout, stderr, exitCode } = await Bun.$`${command}`
    .nothrow()
    .quiet();
  return {
    key,
    result: exitCode !== 0 ? stderr.toString() : stdout.toString(),
  };
};
