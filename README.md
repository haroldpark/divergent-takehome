# divergent-takehome

This is the take-home portion of the Divergent 3D Full Stack Developer application process.

Built with [NextJS](https://nextjs.org/) (A React framework) and [Jest](https://jestjs.io/)/[React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/) for testing

## Getting Started

### Installing

* Clone down the repo, then
```
cd divergent-takehome
npm install
```

### Executing program

* In the root folder:
```
npm run dev
```
* The app will pop up at localhost:3000

### Executing program

* In the root folder:
```
npm run test
```

## Notes

### Data structures

From the requirements, we can gather that there are three main models: Warehouses, zones, and shelves
A warehouse has a one-to-many relationship with zones
A zone has a one-to-many relationship with shelves

1. Warehouse

(Prop) - [ValueType]

Id - UUID

2. Zone

(Prop) - [ValueType]

Id - UUID

Label - number (1 to 12)

WarehouseId - Foreign Key

3. Shelves

(Prop) - [ValueType]

Id - UUID

Name - string

ZoneId - Foreign Key

### Next features

1. Persistent data storage with DB
2. Show currently existing warehouses on the page
3. Option to fill name inputs with random names for the lazy bones
4. UI/UX enhancements like toast messages upon successful warehouse submit
5. Typescript
6. Fix the SWC error on testing
