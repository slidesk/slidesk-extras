export default async (message) => {
  const { cwd, command, key } = JSON.parse(message);
  // eslint-disable-next-line no-undef
  const proc = Bun.spawnSync(command.split(" "), {
    cwd: cwd ?? process.env.HOME,
    onExit: () => {},
  });
  return {
    key,
    result: proc.stdout.toString(),
  };
};
