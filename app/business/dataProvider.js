'use client';

let users = [];

const LOCAL_STORAGE_KEY = 'users';

const DEFAULT_USERS = [
  { id: 1, name: "Dev Teotia", email: "dev@example.com", phone: "1234567890", website: "devteotia.in" },
  { id: 2, name: "Aarav Mehta", email: "aarav@example.com", phone: "9876543210", website: "aarav.dev" },
  { id: 3, name: "Sanya Kapoor", email: "sanya@example.com", phone: "9123456780", website: "sanyakapoor.me" },
  { id: 4, name: "Kabir Joshi", email: "kabir@example.com", phone: "9988776655", website: "kabirjoshi.io" },
  { id: 5, name: "Ishita Sharma", email: "ishita@example.com", phone: "9090909090", website: "ishitasharma.net" },
  { id: 6, name: "Rohan Khanna", email: "rohan@example.com", phone: "8989898989", website: "rohank.dev" },
  { id: 7, name: "Tanya Rajput", email: "tanya@example.com", phone: "8877665544", website: "tanyarajput.org" },
  { id: 8, name: "Yuvraj Singh", email: "yuvraj@example.com", phone: "7766554433", website: "yuvrajsingh.dev" },
  { id: 9, name: "Meera Nair", email: "meera@example.com", phone: "6655443322", website: "meeranair.co" },
  { id: 10, name: "Karan Patel", email: "karan@example.com", phone: "5544332211", website: "karanpatel.dev" },
];

const initLocalStorage = () => {
  if (typeof window === 'undefined') return;
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  users = stored ? JSON.parse(stored) : DEFAULT_USERS;
  if (!stored) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
  }
};

const persist = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }
};

initLocalStorage();

const dataProvider = {
  getList: () => {
    if (typeof window === 'undefined') return Promise.resolve({ data: [], total: 0 });
    users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    return Promise.resolve({ data: users, total: users.length });
  },

  getOne: (_, { id }) => {
    const user = users.find(u => u.id === parseInt(id));
    return Promise.resolve({ data: user });
  },

  create: (_, { data }) => {
    const { name, email, phone, website } = data;
    if (!name || !email || !phone || !website) {
      return Promise.reject(new Error("All fields are required."));
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      website: website.trim(),
    };

    users.push(newUser);
    persist();
    return Promise.resolve({ data: newUser });
  },

  update: (_, { id, data }) => {
    users = users.map(u => (u.id === id ? { ...u, ...data } : u));
    persist();
    const updatedUser = users.find(u => u.id === id);
    return Promise.resolve({ data: updatedUser });
  },

  delete: (_, { id }) => {
    users = users.filter(u => u.id !== id);
    persist();
    return Promise.resolve({ data: { id } });
  },

  getMany: () => Promise.resolve({ data: [] }),
  getManyReference: () => Promise.resolve({ data: [], total: 0 }),
};

export default dataProvider;