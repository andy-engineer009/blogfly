/**
 * API SERVICE USAGE EXAMPLES
 * 
 * This file shows how to use the apiService with automatic token injection.
 */

import { apiService } from "@/lib/apiService";

// ============================================
// PUBLIC API CALLS (No token added)
// ============================================

// GET - Public endpoint (no token in headers)
apiService.get("/api/users").then((res: any) => {
  console.log("GET response", res);
});

// POST - Public endpoint (no token in headers)
apiService.post("/api/register", {
  email: "user@example.com",
  password: "password123",
}).then((res: any) => {
  console.log("Registration successful", res);
});

// ============================================
// ADMIN API CALLS (Token automatically added!)
// ============================================

// GET - Admin endpoint (Bearer token automatically added!)
apiService.get("/admin/posts").then((res: any) => {
  console.log("Admin posts", res);
});

// POST - Admin endpoint (Bearer token automatically added!)
apiService.post("/admin/posts", {
  title: "New Post",
  content: "Post content...",
}).then((res: any) => {
  console.log("Post created", res);
});

// PUT - Admin endpoint (Bearer token automatically added!)
apiService.put("/admin/posts/123", {
  title: "Updated Post",
}).then((res: any) => {
  console.log("Post updated", res);
});

// PATCH - Admin endpoint (Bearer token automatically added!)
apiService.patch("/admin/posts/123/status", {
  status: "active",
}).then((res: any) => {
  console.log("Status updated", res);
});

// DELETE - Admin endpoint (Bearer token automatically added!)
apiService.delete("/admin/posts/123").then((res: any) => {
  console.log("Post deleted", res);
});

// ============================================
// ERROR HANDLING
// ============================================

try {
  const posts = await apiService.get("/admin/posts");
  console.log("Posts:", posts);
} catch (error) {
  console.error("Failed to fetch posts:", error);
  // Handle error (show toast, redirect, etc.)
}

// ============================================
// HOW IT WORKS:
// ============================================
// 
// 1. Token is stored in localStorage with key "token"
// 2. If URL starts with "/admin", token is automatically added to headers
// 3. If URL doesn't start with "/admin", no token is added (public API)
// 4. All methods (GET, POST, PUT, PATCH, DELETE) work the same way
// 5. Errors are caught and logged automatically
//
// Example headers sent:
// - Public API: { "Content-Type": "application/json" }
// - Admin API: { 
//     "Content-Type": "application/json",
//     "Authorization": "Bearer YOUR_TOKEN_HERE"
//   }

