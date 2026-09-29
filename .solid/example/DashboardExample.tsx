/** @jsxImportSource solid-js */
import { createSignal } from 'solid-js';
import {
  AppShell,
  Sidebar,
  SidebarItem,
  Header,
  Button,
  IconButton,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  StatCard,
  DataTable,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  Dialog,
  SearchInput,
} from '../components';

/**
 * Example Reference: Dashboard Composition using SentinelAI SolidJS UI Components
 * Demonstrates stateful interactivity, keyboard navigation, and responsive layout.
 */
export function DashboardExample() {
  const [collapsed, setCollapsed] = createSignal(false);
  const [activeTab, setActiveTab] = createSignal('overview');
  const [search, setSearch] = createSignal('');
  const [dialogOpen, setDialogOpen] = createSignal(false);

  const mockMetrics = [
    { label: 'Active Firewalls', value: '48', delta: '+12%', deltaType: 'positive' as const },
    { label: 'Latency P95', value: '1.4ms', delta: '-0.3ms', deltaType: 'positive' as const },
    { label: 'Blocked Leaks', value: '312', delta: '+18 today', deltaType: 'negative' as const },
    { label: 'Posture Score', value: '98.4%', delta: 'Optimal', deltaType: 'neutral' as const },
  ];

  const mockRows = [
    { id: '1', model: 'Gemini 3.8 Flash', status: 'secure' as const, rate: '99.8%', latency: '84ms' },
    { id: '2', model: 'Claude 3.7 Sonnet', status: 'warning' as const, rate: '94.2%', latency: '142ms' },
    { id: '3', model: 'GPT-4o Mini', status: 'critical' as const, rate: '88.0%', latency: '110ms' },
  ];

  return (
    <AppShell
      sidebar={
        <Sidebar
          collapsed={collapsed()}
          onToggleCollapse={() => setCollapsed(!collapsed())}
          brandTitle="SentinelAI"
          brandIcon={
            <div class="w-6 h-6 rounded-md bg-white flex items-center justify-center">
              <div class="w-2.5 h-2.5 rounded-full bg-black" />
            </div>
          }
          footer={
            <div class="flex items-center gap-2 text-xs text-[#71717a]">
              <span class="w-2 h-2 rounded-full bg-green-500" />
              <span>v1.0.0 Solid</span>
            </div>
          }
        >
          <SidebarItem
            label="Overview"
            active={activeTab() === 'overview'}
            collapsed={collapsed()}
            onClick={() => setActiveTab('overview')}
          />
          <SidebarItem
            label="Agent Guard"
            active={activeTab() === 'guard'}
            collapsed={collapsed()}
            badge="3"
            onClick={() => setActiveTab('guard')}
          />
          <SidebarItem
            label="Audit Logs"
            active={activeTab() === 'logs'}
            collapsed={collapsed()}
            onClick={() => setActiveTab('logs')}
          />
        </Sidebar>
      }
      header={
        <Header
          title="Security Posture"
          subtitle="Real-time LLM inference quarantine and token egress firewall."
          badge={
            <Badge variant="secure" pulse size="sm">
              Live Firewall
            </Badge>
          }
          actions={
            <div class="flex items-center gap-2.5">
              <div class="w-48 sm:w-64">
                <SearchInput
                  value={search()}
                  placeholder="Search logs & vectors..."
                  onInput={(e) => setSearch(e.currentTarget.value)}
                  onClear={() => setSearch('')}
                />
              </div>
              <Button variant="primary" size="sm" onClick={() => setDialogOpen(true)}>
                + New Scan
              </Button>
            </div>
          }
        />
      }
    >
      <div class="p-6 space-y-6">
        {/* KPI Metrics Grid */}
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockMetrics.map((m) => (
            <StatCard
              label={m.label}
              value={m.value}
              delta={m.delta}
              deltaType={m.deltaType}
            />
          ))}
        </section>

        {/* Data Table */}
        <section class="space-y-3">
          <div class="flex items-center justify-between">
            <h2 class="text-sm font-semibold text-white tracking-tight">Active Models Telemetry</h2>
            <Button variant="secondary" size="sm">
              Export CSV
            </Button>
          </div>

          <DataTable minWidth="500px">
            <TableHead>
              <TableRow>
                <TableHeaderCell align="start">MODEL</TableHeaderCell>
                <TableHeaderCell align="start">STATUS</TableHeaderCell>
                <TableHeaderCell align="end">DELIVERY RATE</TableHeaderCell>
                <TableHeaderCell align="end">LATENCY</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockRows.map((row) => (
                <TableRow interactive onClick={() => setDialogOpen(true)}>
                  <TableCell align="start" class="font-medium text-white">
                    {row.model}
                  </TableCell>
                  <TableCell align="start">
                    <Badge variant={row.status}>{row.status.toUpperCase()}</Badge>
                  </TableCell>
                  <TableCell align="end" numeric>
                    {row.rate}
                  </TableCell>
                  <TableCell align="end" numeric>
                    {row.latency}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </DataTable>
        </section>

        {/* Card Section */}
        <Card variant="base">
          <CardHeader>
            <div>
              <CardTitle>Autonomous Posture Engine</CardTitle>
              <CardDescription>
                Zero-shot instruction boundary validation using Gemini 3.8 Flash Cyber.
              </CardDescription>
            </div>
            <Badge variant="info">Active</Badge>
          </CardHeader>
          <p class="text-xs text-[#a1a1aa] leading-relaxed">
            All outbound system prompt variables are cryptographically signed and quarantined prior to model context feeding.
          </p>
          <CardFooter>
            <span>Quarantine status: 0 trapped</span>
            <Button variant="outline" size="sm">
              Configure Heuristics
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Accessible Modal */}
      <Dialog
        open={dialogOpen()}
        onClose={() => setDialogOpen(false)}
        title="Trigger Security Scan"
        subtitle="Execute an OWASP LLM Top 10 red-team audit sequence against candidate prompts."
      >
        <div class="space-y-4">
          <p class="text-xs text-[#a1a1aa] leading-relaxed">
            The scanner evaluates injection resistance, token exfiltration vulnerabilities, and delimiter escapes.
          </p>
          <div class="flex justify-end gap-2 pt-4 border-t border-[#181818]">
            <Button variant="ghost" size="sm" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={() => setDialogOpen(false)}>
              Run Audit
            </Button>
          </div>
        </div>
      </Dialog>
    </AppShell>
  );
}
