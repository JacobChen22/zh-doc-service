import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const user1 = await prisma.user.upsert({
        where: {email: 'cwj9658@gmail.com'},
        update: {},
        create: {
            name: 'Jacob',
            email: 'cwj9658@gmail.com',
        },
    })

    const doc1 = await prisma.document.upsert({
        where: {title: 'Test1 for zh doc in prisma'},
        update: {},
        create: {
            title: 'Test1 document',
            body: 'Document1 content',
            creatorId: 1,
            updaterId: 1
        }
    });

    const doc2 = await prisma.document.upsert({
        where: {title: 'Test2 for zh doc in prisma'},
        update: {},
        create: {
            title: 'Test2 document',
            body: 'Document2 content',
            creatorId: 1,
            updaterId: 1
        }
    });

    console.log({user1, doc1, doc2});
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
});
