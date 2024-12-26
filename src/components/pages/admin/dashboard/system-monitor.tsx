import React, { useCallback, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { getSystemHealthCheck } from "@/core/system_monitor";
import { GetSystemHealthResponse } from "@/lib/grpc/proto/system_health/system_health_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import {
  CircleCheckBig,
  CircleX,
  Clock,
  Cpu,
  HardDrive,
  MemoryStick,
  LucideIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SystemHealth = GetSystemHealthResponse.AsObject;

interface SystemStatus {
  status: "healthy" | "warning" | "critical";
  issues: string[];
}

interface HealthMetricProps {
  icon: LucideIcon;
  label: string;
  percentage: number;
  usedValue: string | number;
  totalValue: string | number;
  unit?: string;
  isLoading?: boolean;
  status: "healthy" | "warning" | "critical";
}

// Mock Data for Development Testing
const mockScenarios = {
  healthy: {
    cpuUsagePercentage: 45.5,
    memoryUsagePercentage: 55.2,
    ephemeralStoragePercentage: 42.8,
    pvcStoragePercentage: 38.6,
    ephemeralStorageUsed: 42.8 * 1024 * 1024 * 1024,
    ephemeralStorageTotal: 100 * 1024 * 1024 * 1024,
    pvcStorageUsed: 38.6 * 1024 * 1024 * 1024,
    pvcStorageTotal: 100 * 1024 * 1024 * 1024,
    nodeCount: 3,
    podCount: 12,
    pvcCount: 5,
  },
  warning: {
    cpuUsagePercentage: 75.8,
    memoryUsagePercentage: 82.4,
    ephemeralStoragePercentage: 78.5,
    pvcStoragePercentage: 72.3,
    ephemeralStorageUsed: 78.5 * 1024 * 1024 * 1024,
    ephemeralStorageTotal: 100 * 1024 * 1024 * 1024,
    pvcStorageUsed: 72.3 * 1024 * 1024 * 1024,
    pvcStorageTotal: 100 * 1024 * 1024 * 1024,
    nodeCount: 2,
    podCount: 8,
    pvcCount: 4,
  },
  critical: {
    cpuUsagePercentage: 95.2,
    memoryUsagePercentage: 93.7,
    ephemeralStoragePercentage: 91.4,
    pvcStoragePercentage: 94.8,
    ephemeralStorageUsed: 91.4 * 1024 * 1024 * 1024,
    ephemeralStorageTotal: 100 * 1024 * 1024 * 1024,
    pvcStorageUsed: 94.8 * 1024 * 1024 * 1024,
    pvcStorageTotal: 100 * 1024 * 1024 * 1024,
    nodeCount: 1,
    podCount: 3,
    pvcCount: 2,
  },
  failure: {
    cpuUsagePercentage: 100,
    memoryUsagePercentage: 100,
    ephemeralStoragePercentage: 99.9,
    pvcStoragePercentage: 99.9,
    ephemeralStorageUsed: 99.9 * 1024 * 1024 * 1024,
    ephemeralStorageTotal: 100 * 1024 * 1024 * 1024,
    pvcStorageUsed: 99.9 * 1024 * 1024 * 1024,
    pvcStorageTotal: 100 * 1024 * 1024 * 1024,
    nodeCount: 0,
    podCount: 0,
    pvcCount: 0,
  },
};

// Helper Functions
const getSystemStatus = (health: SystemHealth): SystemStatus => {
  const issues: string[] = [];
  let status: "healthy" | "warning" | "critical" = "healthy";

  // CPU checks
  if (health.cpuUsagePercentage > 90) {
    issues.push("Critical: CPU usage is extremely high");
    status = "critical";
  } else if (health.cpuUsagePercentage > 70) {
    issues.push("Warning: CPU usage is high");
    status = "warning";
  }

  // Memory checks
  if (health.memoryUsagePercentage > 90) {
    issues.push("Critical: Memory usage is extremely high");
    status = "critical";
  } else if (health.memoryUsagePercentage > 70) {
    issues.push("Warning: Memory usage is high");
    status = status === "critical" ? "critical" : "warning";
  }

  // Storage checks
  if (health.ephemeralStoragePercentage > 90) {
    issues.push("Critical: Ephemeral storage is almost full");
    status = "critical";
  } else if (health.ephemeralStoragePercentage > 70) {
    issues.push("Warning: Ephemeral storage is filling up");
    status = status === "critical" ? "critical" : "warning";
  }

  if (health.pvcStoragePercentage > 90) {
    issues.push("Critical: PVC storage is almost full");
    status = "critical";
  } else if (health.pvcStoragePercentage > 70) {
    issues.push("Warning: PVC storage is filling up");
    status = status === "critical" ? "critical" : "warning";
  }

  // Node and Pod checks
  if (health.nodeCount === 0) {
    issues.push("Critical: No nodes are available");
    status = "critical";
  }
  if (health.podCount === 0) {
    issues.push("Critical: No pods are running");
    status = "critical";
  }

  return { status, issues };
};

const formatBytes = (bytes: number): string => {
  const gb = bytes / (1024 * 1024 * 1024);
  return `${gb.toFixed(1)} GB`;
};

const getMetricStatus = (
  percentage: number
): "healthy" | "warning" | "critical" => {
  if (percentage > 90) return "critical";
  if (percentage > 70) return "warning";
  return "healthy";
};

const DevelopmentControls: React.FC<{
  onScenarioChange: (scenario: keyof typeof mockScenarios) => void;
  onRefresh: () => void;
  currentScenario: string;
}> = ({ onScenarioChange, onRefresh, currentScenario }) => (
  <div className="mb-6 p-4 border border-muted rounded-md bg-muted/50">
    <h3 className="text-sm font-medium mb-3">Development Controls</h3>
    <div className="flex flex-col sm:flex-row gap-3">
      <Select
        value={currentScenario}
        onValueChange={(value) =>
          onScenarioChange(value as keyof typeof mockScenarios)
        }
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Select scenario" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="healthy">Healthy System</SelectItem>
          <SelectItem value="warning">System Warning</SelectItem>
          <SelectItem value="critical">System Critical</SelectItem>
          <SelectItem value="failure">System Failure</SelectItem>
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        size="sm"
        onClick={onRefresh}
        className="w-full sm:w-auto"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Simulate Refresh
      </Button>
    </div>
  </div>
);

// Component: Status Badge
const StatusBadge: React.FC<{ status: SystemStatus }> = ({ status }) => {
  const getStatusConfig = () => {
    switch (status.status) {
      case "critical":
        return {
          icon: XCircle,
          color: "text-destructive",
          bg: "bg-destructive/10",
          text: "System Critical",
        };
      case "warning":
        return {
          icon: AlertTriangle,
          color: "text-warning",
          bg: "bg-warning/10",
          text: "System Warning",
        };
      default:
        return {
          icon: CheckCircle2,
          color: "text-success",
          bg: "bg-success/10",
          text: "System Healthy",
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className="mb-4">
      {status.issues.length > 0 && (
        <Alert
          variant={status.status === "critical" ? "destructive" : "warning"}
          className="break-words"
        >
          <Icon className="h-4 w-4 shrink-0" />
          <AlertTitle>
            {status.status === "critical"
              ? "System Critical"
              : "System Warning"}
          </AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-4 mt-2">
              {status.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
      {status.issues.length === 0 && (
        <Alert>
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <AlertTitle>All Systems Operational</AlertTitle>
          <AlertDescription>
            All system components are functioning normally.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

const HealthMetric: React.FC<HealthMetricProps> = ({
  icon: Icon,
  label,
  percentage,
  usedValue,
  totalValue,
  unit = "",
  isLoading = false,
  status,
}) => {
  const formatTime = (): string => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getProgressColors = (percentage: number) => {
    if (percentage > 90) {
      return "bg-destructive [&::-moz-progress-bar]:bg-destructive [&::-webkit-progress-value]:bg-destructive";
    }
    if (percentage > 70) {
      return "bg-amber-500 [&::-moz-progress-bar]:bg-amber-500 [&::-webkit-progress-value]:bg-amber-500";
    }
    return "bg-emerald-500 [&::-moz-progress-bar]:bg-emerald-500 [&::-webkit-progress-value]:bg-emerald-500";
  };

  if (isLoading) {
    return (
      <div className="w-full h-auto flex flex-col sm:flex-row rounded-md overflow-hidden border border-muted animate-pulse">
        <div className="h-24 sm:h-full sm:w-32 bg-muted" />
        <div className="flex-1 p-5">
          <div className="h-5 w-32 bg-muted rounded mb-4" />
          <div className="h-2 w-full bg-muted rounded" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-auto flex flex-col sm:flex-row rounded-md overflow-hidden border ${status === "critical"
          ? "border-destructive"
          : status === "warning"
            ? "border-warning"
            : "border-muted"
        }`}
    >
      <div className="w-full sm:w-auto flex items-center bg-muted gap-4 py-3 px-4">
        <div
          className={`rounded-full ${status === "critical"
              ? "bg-destructive"
              : status === "warning"
                ? "bg-warning"
                : "bg-success"
            }`}
        >
          {status === "critical" ? (
            <CircleX className="w-5 h-5 text-white m-1" />
          ) : status === "warning" ? (
            <AlertTriangle className="w-5 h-5 text-white m-1" />
          ) : (
            <CircleCheckBig className="w-5 h-5 text-white m-1" />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-foreground text-sm">Updated at</span>
          <div className="flex items-center gap-2">
            <Clock className="text-[#778399] w-4 h-4" />
            <p className="m-0 text-xs text-[#778399]">{formatTime()}</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 p-4 sm:px-5">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          <h2 className="text-foreground capitalize">{label}</h2>
        </div>
        <div className="w-full sm:w-64">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
            <p
              className={`${status === "critical"
                  ? "text-destructive"
                  : status === "warning"
                    ? "text-warning"
                    : "text-[#23235F] dark:text-foreground"
                }`}
            >
              {percentage.toFixed(1)}% used
            </p>
            <p className="text-sm text-muted-foreground">
              {usedValue}
              {unit} / {totalValue}
              {unit}
            </p>
          </div>
          <Progress
            value={percentage}
            className={`h-1 mt-2 `}
            indicatorClassName={`${getProgressColors(percentage)}`}
          />
        </div>
      </div>
    </div>
  );
};

const SystemMonitor: React.FC = () => {
  const [systemHealth, setSystemHealth] = useState<SystemHealth | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [currentScenario, setCurrentScenario] =
    useState<keyof typeof mockScenarios>("healthy");
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    status: "healthy",
    issues: [],
  });
  const { user } = useUserStore((state) => state);
  const isDevelopment = process.env.NODE_ENV === "development";
  const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

  const getSystemHealthData = useCallback(async (): Promise<void> => {
    if (!user || !user.token) return;
    try {
      const res = await getSystemHealthCheck({ token: user.token });
      setSystemHealth(res);
      setSystemStatus(getSystemStatus(res));
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }, [user]);

  const simulateLoading = () => {
    setIsLoading(true);
    setLoadingProgress(0);
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleScenarioChange = (scenario: keyof typeof mockScenarios) => {
    setCurrentScenario(scenario);
    simulateLoading();
  };

  const handleRefresh = () => {
    simulateLoading();
  };

  // Effect for loading simulation in development mode
  useEffect(() => {
    if (isLoading && isDevelopment) {
      const timeout = setTimeout(() => {
        setSystemHealth(mockScenarios[currentScenario]);
        setSystemStatus(getSystemStatus(mockScenarios[currentScenario]));
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, currentScenario, isDevelopment]);

  // Effect for production data fetching
  useEffect(() => {
    if (!isDevelopment) {
      getSystemHealthData();
      const interval = setInterval(getSystemHealthData, REFRESH_INTERVAL);
      return () => clearInterval(interval);
    } else {
      simulateLoading();
    }
  }, [
    getSystemHealthData,
    isDevelopment.valueOf,
    REFRESH_INTERVAL,
    isDevelopment,
  ]);

  return (
    <div data-onboarding-id="dashboard-system-performance" className="col-span-2 px-4 sm:px-7 py-5 bg-background rounded-lg border-2 border-muted mt-5">
      {isDevelopment && (
        <DevelopmentControls
          onScenarioChange={handleScenarioChange}
          onRefresh={handleRefresh}
          currentScenario={currentScenario}
        />
      )}

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
        <h2 className="text-foreground text-xl capitalize">System Health</h2>
        {!isLoading && systemHealth && (
          <div
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${systemStatus.status === "critical"
                ? "bg-destructive/10 text-destructive"
                : systemStatus.status === "warning"
                  ? "bg-warning/10 text-warning"
                  : "bg-success/10 text-success dark:text-emerald-500"
              }`}
          >
            {systemStatus.status === "critical"
              ? "System Critical"
              : systemStatus.status === "warning"
                ? "System Warning"
                : "All Systems Operational"}
          </div>
        )}
      </div>

      {isLoading && (
        <div className="w-full mt-4">
          <p className="text-sm text-muted-foreground mb-2">
            Loading system health data...
          </p>
          <Progress value={loadingProgress} className="h-1" />
        </div>
      )}

      {!isLoading && systemHealth && <StatusBadge status={systemStatus} />}

      <>
        {systemHealth && (
          <>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 mt-5">
              <HealthMetric
                icon={Cpu}
                label="CPU Usage"
                percentage={systemHealth.cpuUsagePercentage}
                usedValue={systemHealth.cpuUsagePercentage.toFixed(1)}
                totalValue="100"
                unit="%"
                isLoading={isLoading}
                status={getMetricStatus(systemHealth.cpuUsagePercentage)}
              />
              <HealthMetric
                icon={MemoryStick}
                label="Memory Usage"
                percentage={systemHealth.memoryUsagePercentage}
                usedValue={systemHealth.memoryUsagePercentage.toFixed(1)}
                totalValue="100"
                unit="%"
                isLoading={isLoading}
                status={getMetricStatus(systemHealth.memoryUsagePercentage)}
              />
              <HealthMetric
                icon={HardDrive}
                label="Storage Usage (Temporary)"
                percentage={systemHealth.ephemeralStoragePercentage}
                usedValue={formatBytes(systemHealth.ephemeralStorageUsed)}
                totalValue={formatBytes(systemHealth.ephemeralStorageTotal)}
                isLoading={isLoading}
                status={getMetricStatus(
                  systemHealth.ephemeralStoragePercentage
                )}
              />
              <HealthMetric
                icon={HardDrive}
                label="Storage Usage (Permanent)"
                percentage={systemHealth.pvcStoragePercentage}
                usedValue={formatBytes(systemHealth.pvcStorageUsed)}
                totalValue={formatBytes(systemHealth.pvcStorageTotal)}
                isLoading={isLoading}
                status={getMetricStatus(systemHealth.pvcStoragePercentage)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {[
                { label: "Main Servers", value: systemHealth.nodeCount },
                { label: "Mini Servers", value: systemHealth.podCount },
                { label: "Storage Disks Count", value: systemHealth.pvcCount },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 border border-muted rounded-md"
                >
                  <h3 className="text-foreground text-lg">{metric.label}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-3xl font-semibold">{metric.value}</p>
                    {metric.value === 0 && (
                      <CircleX className="text-destructive w-6 h-6" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default SystemMonitor;
