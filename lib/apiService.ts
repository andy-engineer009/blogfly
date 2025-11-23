/**
 * Clean, simple, reusable API service handler for Next.js (App Router)
 * 
 * Features:
 * - Automatic Bearer token injection for /admin/* routes
 * - Public APIs (non-/admin routes) don't include token
 * - Standard HTTP methods: GET, POST, PUT, DELETE
 * - Type-safe responses
 */

// Get token from localStorage (or your auth store)
const getToken = (): string | null => {
  if (typeof window === "undefined") return null; // Server-side check
  return localStorage.getItem("token") || null;
};

// Check if URL requires authentication (starts with /admin)
const requiresAuth = (url: string): boolean => {
  return url.startsWith("/admin");
};

// Build headers with conditional token injection
const buildHeaders = (url: string): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // Only add token for /admin routes
  if (requiresAuth(url)) {
    const token = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return headers;
};

export const apiService = {
  /**
   * GET request
   * @param url - API endpoint URL
   * @returns Promise with parsed JSON response
   */
  get: <T = any>(url: string): Promise<T> => {
    return fetch(url, {
      method: "GET",
      headers: buildHeaders(url),
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GET ${url} failed: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("API GET Error:", error);
        throw error;
      });
  },

  /**
   * POST request
   * @param url - API endpoint URL
   * @param payload - Request body data (optional)
   * @returns Promise with parsed JSON response
   */
  post: <T = any>(url: string, payload?: any): Promise<T> => {
    return fetch(url, {
      method: "POST",
      headers: buildHeaders(url),
      body: payload ? JSON.stringify(payload) : undefined,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`POST ${url} failed: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("API POST Error:", error);
        throw error;
      });
  },

  /**
   * PUT request
   * @param url - API endpoint URL
   * @param payload - Request body data (optional)
   * @returns Promise with parsed JSON response
   */
  put: <T = any>(url: string, payload?: any): Promise<T> => {
    return fetch(url, {
      method: "PUT",
      headers: buildHeaders(url),
      body: payload ? JSON.stringify(payload) : undefined,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`PUT ${url} failed: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("API PUT Error:", error);
        throw error;
      });
  },

  /**
   * PATCH request
   * @param url - API endpoint URL
   * @param payload - Request body data (optional)
   * @returns Promise with parsed JSON response
   */
  patch: <T = any>(url: string, payload?: any): Promise<T> => {
    return fetch(url, {
      method: "PATCH",
      headers: buildHeaders(url),
      body: payload ? JSON.stringify(payload) : undefined,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`PATCH ${url} failed: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("API PATCH Error:", error);
        throw error;
      });
  },

  /**
   * DELETE request
   * @param url - API endpoint URL
   * @returns Promise with parsed JSON response
   */
  delete: <T = any>(url: string): Promise<T> => {
    return fetch(url, {
      method: "DELETE",
      headers: buildHeaders(url),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`DELETE ${url} failed: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.error("API DELETE Error:", error);
        throw error;
      });
  },
};

