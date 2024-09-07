export default async (message) => {
  const { cwd, command, key, env } = JSON.parse(message);
  const pty = Bun.spawn(command, {
      cwd,
      env,
      name: 'xterm-color',
      cols: 80,
      rows: 30
    });
  return {
    key,
    result: await new Response(pty.stdout).text(),
  };
};
