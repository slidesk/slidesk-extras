export default async (message) => {
  const { cwd, command, key } = JSON.parse(message);
  // eslint-disable-next-line no-undef
  const proc = Bun.spawn(command.split(" "), {
    cwd: cwd ?? process.env.HOME,
  });
  return {
    key,
    result: await new Response(proc.stdout).text(),
  };
};
