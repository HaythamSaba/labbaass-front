// lib/api.js
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

async function request(path, { method = "GET", body, token } = {}) {
  const url = `${BASE}${path}`;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { message: text };
  }

  if (!res.ok) {
    const msg = json?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return json;
}

export function createReservation(payload, token) {
  return request("/api/reservations", { method: "POST", body: payload, token });
}

export async function getClinics() {
  const res = await fetch(`${BASE}/api/v1/pharmacies`, {
    headers: { Accept: "application/json" },
    cache: "no-store", // disable caching during dev
  });

  if (!res.ok) {
    throw new Error("Failed to fetch clinics");
  }

  return res.json();
}

export async function getMunicipals() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/municipals`,
    {
      headers: { Accept: "application/json" },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch municipals");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?language=ar`,
    {
      headers: { Accept: "application/json" },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json(); // this returns { message, categories: [...] }
}
export async function getPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`,
    {
      headers: { Accept: "application/json" },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json(); // this returns { message, categories: [...] }
}

export async function getClinicDetails(pharmId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/pharmacies/pharmacie_details/${pharmId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch clinic details for ID ${pharmId}`);
  }

  const data = await res.json();

  // ✅ Return a simplified and structured object
  return {
    success: data.success,
    clinic: data.data?.profile || {},
    doctors: data.data?.profile?.doctors || [],
    workTime: data.data?.workTime || [],
  };
}

export async function getAllDoctors() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/alldoctors`,
    {
      headers: { Accept: "application/json" },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch doctors");
  return res.json();
}

export async function getClinicRatings(pharmId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/rate/${pharmId}`,
    {
      headers: { Accept: "application/json" },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch clinic ratings");

  const json = await res.json();

  // ✅ Return the full response so we can access both ratings and metadata
  return {
    ratings: json?.data?.ratings?.data || [],
    isRate: json?.data?.isRate || false,
    total: json?.data?.ratings?.total || 0,
    currentPage: json?.data?.ratings?.current_page || 1,
    lastPage: json?.data?.ratings?.last_page || 1,
  };
}
