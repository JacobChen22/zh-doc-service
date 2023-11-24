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

    const space1 = await prisma.space.upsert({
        where: {name: 'ZH Doc'},
        update: {},
        create: {
            name: 'ZH Doc',
            body: 'Welcome to ZH Doc\' space.\n' +
                '\n' +
                'This is the space welcome page, you can add some description for the space in this page.\n' +
                '\n' +
                'Here you can edit your space info, and will auto save.'
        },
    })

    const doc1 = await prisma.document.upsert({
        where: {title: 'Tutorial'},
        update: {},
        create: {
            title: 'Tutorial',
            body: '',
            parentDocId: null,
            space: {
                connect: {id: space1.id}
            },
            type: 'FOLDER',
            creatorId: user1.id,
            updaterId: user1.id
        }
    });

    const doc2 = await prisma.document.upsert({
        where: {title: 'How to apply space?'},
        update: {},
        create: {
            title: 'How to apply space?',
            body: '',
            type: 'FILE',
            parentDocId: doc1.id,
            space: {
                connect: {id: space1.id}
            },
            creatorId: user1.id,
            updaterId: user1.id
        }
    });

    const doc3 = await prisma.document.upsert({
        where: {title: 'How to create new document?'},
        update: {},
        create: {
            title: 'How to create new document?',
            body: '',
            type: 'FILE',
            parentDocId: doc1.id,
            space: {
                connect: {id: space1.id}
            },
            creatorId: user1.id,
            updaterId: user1.id
        }
    });

    const doc4 = await prisma.document.upsert({
        where: {title: 'About'},
        update: {},
        create: {
            title: 'About',
            body: 'This demo deployed on Vercel. Thanks again.',
            type: 'FILE',
            parentDocId: null,
            space: {
                connect: {id: space1.id}
            },
            creatorId: user1.id,
            updaterId: user1.id
        }
    });

    console.log({user1, doc2, doc3});
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
});
