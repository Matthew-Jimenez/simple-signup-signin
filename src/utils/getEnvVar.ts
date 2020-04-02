export default (name: string) => {
  if (process.env[name] === undefined || process.env[name] === null) {
    throw new Error(`Could not find env var ${name}`);
  }

  return process.env[name]!;
};
