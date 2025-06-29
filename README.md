# 🗺️ Territory.io

Territory.io is a web-based platform for B2B sales teams to visualize, assign, and manage sales territories on an interactive map. Teams can draw freeform territories, collaborate in groups with permission controls, and tag business data on the map using public and private sources.

---

## 🚀 Tech Stack

| Layer      | Technology                                           |
| ---------- | ---------------------------------------------------- |
| Frontend   | React.js, TypeScript, Vite, Tailwind CSS, Leaflet    |
| Backend    | Node.js, Express.js, TypeScript                      |
| Database   | PostgreSQL + PostGIS                                 |
| APIs       | OpenStreetMap (Overpass), Yelp/Foursquare (optional) |
| Deployment | Docker (PostGIS), GitHub, (Vercel/Render optional)   |

---

## 📦 Project Structure

```bash
territory-io/
├── client/             # React frontend (Vite)
├── server/             # Node + Express backend
├── docker-compose.yml  # Postgres + PostGIS container
├── README.md
└── .gitignore
```

---

## 🧪 Features (MVP Scope)

- User authentication (login/signup)

- Group creation & hierarchy (admin/member roles)

- Draw, color, and assign custom territories

- Load business data from APIs (passive)

- Add private/group-visible custom POIs

- View POIs only within current territory & zoom level

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
Copy
Edit
git clone https://github.com/your-username/territory-io.git
cd territory-io
```

### 2. Set Up Database (PostGIS)

#### Create a .env file in the root directory:

Copy the .env.example file and set your secure database password:

```bash
cp .env.example .env
# Edit the .env file to set a secure password
```

#### Start PostgreSQL with PostGIS using Docker:

```bash
docker compose up -d
```

#### Default DB config:

- host: localhost

- port: 5432

- user: postgres

- password: (set in your .env file as SUPABASE_PASSKEY)

- db: postgres

##### You can update the credentials in server/.env

### 3. Start Backend

```bash
cd server
npm install
npm run dev
```

#### server/.env example:

```env
DATABASE_URL=postgresql://postgres:${SUPABASE_PASSKEY}@localhost:5432/postgres
PORT=4000
```

### 4. Start Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🗂️ Folder Highlights

#### client/src:

- /components → UI Components (MapView, TerritoryEditor, POIMarkers)

- /features → auth, map, groups

- /pages → route-level views

- /contexts → Auth & Group context providers

#### server/src:

- index.ts → Express entry point

- routes/ → API routes (/auth, /groups, /territories, /pois)

- db.ts → PostgreSQL pool config

- controllers/ → Request handlers

- models/ → SQL layer & queries

---

## 📌 Development Notes

- Use PostGIS for all geographic queries (bbox, ST_Intersects, etc.)

- Redis cache recommended for high-volume POI requests by viewport

- Data displayed based on bounding box and zoom to improve performance

---

## 🛣️ Roadmap

- Add OAuth2 login (Google or SSO)

- Add map filters (industry, size, tags)

- Export territory boundaries as GeoJSON/CSV

* Team analytics dashboard

## 📄 License

MIT © 2025 Territory.io
