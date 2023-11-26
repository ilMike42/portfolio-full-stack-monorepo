import { FlyDeployExecutorSchema } from './schema';
import { execSync } from 'child_process';

export default async function runExecutor(
  options: FlyDeployExecutorSchema
) {
  const cwd = options.distLocation;
  const results = execSync(`fly apps list`);
  if (results.toString().includes(options.flyAppName)) {    
    execSync(`fly deploy -c src/fly.toml`, { cwd });
  } else {
    // consult https://fly.io/docs/reference/regions/ to get best region for you
    execSync(`fly launch --now --name=${options.flyAppName} --region=mad`, {
      cwd,
    });
  }
  return {
    success: true,
  };
}