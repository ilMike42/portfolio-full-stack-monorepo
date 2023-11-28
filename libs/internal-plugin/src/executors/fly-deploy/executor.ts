import { FlyDeployExecutorSchema } from './schema';
import { execSync } from 'child_process';

export default async function runExecutor(
  options: FlyDeployExecutorSchema
) {
  const cwd = options.distLocation;
  const results = execSync(`flyctl apps list`);
  if (results.toString().includes(options.flyAppName)) {        
    execSync(`flyctl deploy`, { cwd });
  } else {
    // consult https://fly.io/docs/reference/regions/ to get best region for you
    execSync(`flyctl launch --now --name=${options.flyAppName} --region=mad --vm-memory=256`, {
      cwd,
    });
  }
  return {
    success: true,
  };
}