export default async (message) => {
  const { cwd, command, key } = JSON.parse(message);
  try {
    // eslint-disable-next-line no-undef
    const proc = Bun.spawnSync(command.split(" "), {
      cwd: cwd ?? process.env.HOME,
    });
    return {
      key,
      result: proc.stdout.toString(),
    };
  } catch (e) {
    return {
      key,
      result: `Error: ${e}`,
    };
  }
};
