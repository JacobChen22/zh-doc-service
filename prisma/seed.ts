import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const doc1 = await prisma.document.upsert({
        where: {title: 'Test for zh doc in prisma'},
        update: {},
        create: {
            title: 'Test document',
            body: 'Document content'
        }
    })

    const doc2 = await prisma.document.upsert({
        where: {title: 'Test2 for zh doc in prisma'},
        update: {},
        create: {
            title: 'Test2 document',
            body: 'Document2 content'
        }
    });

    console.log({doc1, doc2});
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
});
