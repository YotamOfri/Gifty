export type ApiQueryParams = {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortDirection?: "asc" | "desc";
  search?: string;
  filters?: Record<string, string | number | boolean>;
};

export interface ApiResponse<TData> {
  data: TData[];
  totalCount: number;
  totalPages: number;
}
export type MutationResponse<T = unknown> = {
  status: number; // HTTP status code
  data?: T; // Typed data when successful
  error?: string; // Error message if there's an error
};
