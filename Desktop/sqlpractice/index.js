const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fetchUsers() {
    /*
  const user = await prisma.worker.create({
    data:{
        WORKER_ID:15,
        FIRST_NAME:"amber",
        LAST_NAME:"gupta",
        SALARY: 15000,
        JOINING_DATE: new Date("2024-02-20"),
        DEPARTMENT:"ETC"
    }
  }); // Adjust 'user' based on your DB schema
  console.table(user);
  */
  const workers = await prisma.worker.createMany({
    data: [
      { WORKER_ID: 1, FIRST_NAME: "Amit", LAST_NAME: "Sharma", SALARY: 40000, JOINING_DATE: new Date("2023-06-15"), DEPARTMENT: "IT" },
      { WORKER_ID: 2, FIRST_NAME: "Neha", LAST_NAME: "Verma", SALARY: 35000, JOINING_DATE: new Date("2022-09-20"), DEPARTMENT: "HR" },
      { WORKER_ID: 3, FIRST_NAME: "Rahul", LAST_NAME: "Gupta", SALARY: 50000, JOINING_DATE: new Date("2021-01-10"), DEPARTMENT: "Finance" },
      { WORKER_ID: 4, FIRST_NAME: "Priya", LAST_NAME: "Singh", SALARY: 30000, JOINING_DATE: new Date("2024-02-25"), DEPARTMENT: "Admin" },
      { WORKER_ID: 5, FIRST_NAME: "Vikram", LAST_NAME: "Kumar", SALARY: 42000, JOINING_DATE: new Date("2023-05-11"), DEPARTMENT: "IT" },
      { WORKER_ID: 6, FIRST_NAME: "Sneha", LAST_NAME: "Joshi", SALARY: 28000, JOINING_DATE: new Date("2022-07-07"), DEPARTMENT: "Marketing" },
      { WORKER_ID: 7, FIRST_NAME: "Arjun", LAST_NAME: "Malhotra", SALARY: 55000, JOINING_DATE: new Date("2021-11-18"), DEPARTMENT: "Finance" },
      { WORKER_ID: 8, FIRST_NAME: "Kiran", LAST_NAME: "Bhatia", SALARY: 31000, JOINING_DATE: new Date("2024-01-30"), DEPARTMENT: "Sales" },
      { WORKER_ID: 9, FIRST_NAME: "Suresh", LAST_NAME: "Yadav", SALARY: 48000, JOINING_DATE: new Date("2023-08-14"), DEPARTMENT: "Operations" },
      { WORKER_ID: 10, FIRST_NAME: "Meera", LAST_NAME: "Chopra", SALARY: 37000, JOINING_DATE: new Date("2022-04-28"), DEPARTMENT: "HR" },
    ],
  });
  console.table(workers);
}

//fetchUsers();

async function seedBonuses() {
    const bonuses = await prisma.bonus.createMany({
      data: [
        { ID: 1, WORKER_REF_ID: 1, BONUS_AMOUNT: 5000, BONUS_DATE: new Date("2024-01-10") },
        { ID: 2, WORKER_REF_ID: 2, BONUS_AMOUNT: 3000, BONUS_DATE: new Date("2023-12-15") },
        { ID: 3, WORKER_REF_ID: 3, BONUS_AMOUNT: 7000, BONUS_DATE: new Date("2023-06-20") },
        { ID: 4, WORKER_REF_ID: 4, BONUS_AMOUNT: 2500, BONUS_DATE: new Date("2024-02-05") },
        { ID: 5, WORKER_REF_ID: 5, BONUS_AMOUNT: 6000, BONUS_DATE: new Date("2023-10-30") },
        { ID: 6, WORKER_REF_ID: 6, BONUS_AMOUNT: 3500, BONUS_DATE: new Date("2022-11-25") },
        { ID: 7, WORKER_REF_ID: 7, BONUS_AMOUNT: 8000, BONUS_DATE: new Date("2021-09-14") },
        { ID: 8, WORKER_REF_ID: 8, BONUS_AMOUNT: 4200, BONUS_DATE: new Date("2024-03-01") },
        { ID: 9, WORKER_REF_ID: 9, BONUS_AMOUNT: 5500, BONUS_DATE: new Date("2023-07-19") },
        { ID: 10, WORKER_REF_ID: 10, BONUS_AMOUNT: 4000, BONUS_DATE: new Date("2022-05-22") },
      ],
    });
  
    console.log("✅ Bonuses inserted:", bonuses);
  }
  
  //seedBonuses();
  async function seedTitles() {
    const titles = await prisma.title.createMany({
      data: [
        { ID: 1, WORKER_REF_ID: 1, WORKER_TITLE: "IT Specialist", AFFECTED_FROM: new Date("2023-06-15T00:00:00Z") },
        { ID: 2, WORKER_REF_ID: 2, WORKER_TITLE: "HR Coordinator", AFFECTED_FROM: new Date("2022-09-20T00:00:00Z") },
        { ID: 3, WORKER_REF_ID: 3, WORKER_TITLE: "Finance Manager", AFFECTED_FROM: new Date("2021-01-10T00:00:00Z") },
        { ID: 4, WORKER_REF_ID: 4, WORKER_TITLE: "Admin Assistant", AFFECTED_FROM: new Date("2024-02-25T00:00:00Z") },
        { ID: 5, WORKER_REF_ID: 5, WORKER_TITLE: "Software Engineer", AFFECTED_FROM: new Date("2023-05-11T00:00:00Z") },
        { ID: 6, WORKER_REF_ID: 6, WORKER_TITLE: "Marketing Associate", AFFECTED_FROM: new Date("2022-07-07T00:00:00Z") },
        { ID: 7, WORKER_REF_ID: 7, WORKER_TITLE: "Senior Accountant", AFFECTED_FROM: new Date("2021-11-18T00:00:00Z") },
        { ID: 8, WORKER_REF_ID: 8, WORKER_TITLE: "Sales Representative", AFFECTED_FROM: new Date("2024-01-30T00:00:00Z") },
        { ID: 9, WORKER_REF_ID: 9, WORKER_TITLE: "Operations Lead", AFFECTED_FROM: new Date("2023-08-14T00:00:00Z") },
        { ID: 10, WORKER_REF_ID: 10, WORKER_TITLE: "HR Specialist", AFFECTED_FROM: new Date("2022-04-28T00:00:00Z") },
      ],
    });
  
    console.log("✅ Titles inserted:", titles);
  }
 // seedTitles();

 async function seedUsers() {
    const users = await prisma.users.createMany({
      data: [
        { id: 1, name: "Amit Sharma", email: "amit.sharma@example.com" },
        { id: 2, name: "Neha Verma", email: "neha.verma@example.com" },
        { id: 3, name: "Rahul Gupta", email: "rahul.gupta@example.com" },
        { id: 4, name: "Priya Singh", email: "priya.singh@example.com" },
        { id: 5, name: "Vikram Kumar", email: "vikram.kumar@example.com" },
        { id: 6, name: "Sneha Joshi", email: "sneha.joshi@example.com" },
        { id: 7, name: "Arjun Malhotra", email: "arjun.malhotra@example.com" },
        { id: 8, name: "Kiran Bhatia", email: "kiran.bhatia@example.com" },
        { id: 9, name: "Suresh Yadav", email: "suresh.yadav@example.com" },
        { id: 10, name: "Meera Chopra", email: "meera.chopra@example.com" },
      ],
    });
  
    console.log("✅ Users inserted:", users);
  }
  //seedUsers();



async function getUsers() {
    const workers = await prisma.worker.findMany({
        where:{WORKER_ID:10},
        include: {
          bonuses: {
            select: {
              ID: true,
              BONUS_AMOUNT: true,
              BONUS_DATE: true,
            },
            where:{BONUS_AMOUNT:40000},
          },
          titles: {
            select: {
              ID: true,
              WORKER_TITLE: true,
              AFFECTED_FROM: true,
            },
          },
        }
      });
      
      console.table(JSON.stringify(workers, null, 2));
      
}
getUsers();