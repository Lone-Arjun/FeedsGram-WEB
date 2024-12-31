interface StatusBadgeProps {
  status: 'up' | 'down' | 'maintenance' | 'degraded';
}

const statusConfig = {
  up: { color: 'bg-green-100 text-green-800', text: 'Operational' },
  down: { color: 'bg-red-100 text-red-800', text: 'Down' },
  maintenance: { color: 'bg-yellow-100 text-yellow-800', text: 'Maintenance' },
  degraded: { color: 'bg-orange-100 text-orange-800', text: 'Degraded' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
      {config.text}
    </span>
  );
}