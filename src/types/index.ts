export type Project = {
  id: number | string | null;
  title: string;
  description: string;
  category: string | null;
  status: string | null;
  createdAt: string | Date | null;
  updatedAt?: string | Date | null;
  completedAt?: string | Date | null;
  cancelledAt?: string | Date | null;
  startedAt?: string | Date | null;
  availableAt?: string | Date | null;
  assignee?: string | null | number | undefined;
  files?: string[] | null;
};

export type Task = {
  id: number;
  assigned_user_id?: number;
  assigned_user_name?: string;
  assigned_user_pic?: string;
  project_id?: number;
  project_title?: string;
  title?: string;
  description?: string;
  dueDate?: Date;
  created_at: Date;
  finished_at?: Date;
};
