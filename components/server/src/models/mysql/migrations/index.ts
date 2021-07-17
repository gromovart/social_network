import { initTables } from './initTabeles';

export const migrationsRun = async () => {
  initTables();
};
