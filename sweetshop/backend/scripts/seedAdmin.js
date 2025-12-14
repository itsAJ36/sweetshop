const bcrypt = require("bcrypt");
const prisma = require("../prismaClient");

async function seed() {
  const exists = await prisma.user.findUnique({
    where: { username: "admin" }
  });

  if (!exists) {
    await prisma.user.create({
      data: {
        username: "admin",
        password: await bcrypt.hash("admin123", 10),
        role: "admin"
      }
    });
    console.log("✅ Admin user created");
  } else {
    console.log("ℹ️ Admin already exists");
  }

  process.exit();
}

seed();
