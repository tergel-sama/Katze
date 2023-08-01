## Postgress 

```bash
sudo su - postgres
sudo -u postgres createuser -s -i -d -r -l -w user001
sudo -u postgres psql -c "ALTER ROLE user001 WITH PASSWORD 'password';"

```
## Prisma

```
npx prisma migrate dev
npx prisma generate
```


## Run Katze


```bash
yarn dev
npm dev
```

## Install 

```bash
yarn
npm install
```

## Katze

almost bloggin web app for developers

## ENV

# Database postgress

DATABASE_URL=""

# Github auth

GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

