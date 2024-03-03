import ShortUniqueId from "short-unique-id";

function generateId(length = 10) {
  const { randomUUID } = new ShortUniqueId();
  return randomUUID(length);
}

export const utilService = { generateId };
