import {createUser} from "@/api/create_user";

import {resetDB} from "@/api/db/reset_db";
import {databaseManager} from "@/api/db";

describe("createUser", () => {
  beforeEach(async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
  });

  test("returns user on success", async () => {
    const ret = await createUser("Test User", "Test Email");
    expect(ret).not.toBeNull();
    expect(ret!.name).toBe("Test User");
    expect(ret!.email).toBe("Test Email");
  });

  test("returns null on empty name", async () => {
    const ret = await createUser("", "Test Email");
    expect(ret).toBeNull();
  });

  test("returns null on empty email", async () => {
    const ret = await createUser("Test User", "");
    expect(ret).toBeNull();
  });
});
