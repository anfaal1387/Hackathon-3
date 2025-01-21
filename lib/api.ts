// lib/api.ts
export interface ApiResponse {
  // Add your API response type properties here
  // Example:
  id: number;
  title: string;
  // ... other properties
}

export const api = {
  async get(endpoint: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`https://template1-neon-nu.vercel.app/api${endpoint}`);
      if (!response.ok) throw new Error('API request failed');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};

