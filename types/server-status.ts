export interface Service {
  id: string;
  name: string;
  status: 'up' | 'down' | 'degraded';
  lastUpdated: string;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'critical';
  date: string;
}

export interface MaintenanceEvent {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  status: 'scheduled' | 'in-progress' | 'completed';
}

export interface ServerStatus {
  status: 'up' | 'down' | 'maintenance';
  services: Service[];
  announcements: Announcement[];
  maintenance: MaintenanceEvent[];
  lastUpdated: string;
}