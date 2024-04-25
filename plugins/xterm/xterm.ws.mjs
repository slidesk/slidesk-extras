export default async (message) => {
  const { cwd, command, key, env } = JSON.parse(message);
  Bun.$.env(env);
  Bun.$.cwd(cwd ?? process.env.HOME);
  const result = await Bun.$`${command}`.text();
  return {
    key,
    result,
  };
};
