/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MetricCards } from './components/MetricCards';
import { SecurityScoreCard } from './components/SecurityScoreCard';
import { AttackTimelineCard } from './components/AttackTimelineCard';
import { RecentActivityTable } from './components/RecentActivityTable';
import { DesignSystemModal } from './components/DesignSystemModal';
import { NewScanModal } from './components/NewScanModal';
import { ScanDetailDrawer } from './components/ScanDetailDrawer';
import { AttackDetailModal } from './components/AttackDetailModal';
import { AgentGuardView } from './components/AgentGuardView';
import { ReportsView, TeamsView, SettingsView } from './components/OtherViews';
import {
  INITIAL_METRICS,
  INITIAL_ATTACK_TIMELINE,
  INITIAL_SCANS,
} from './data/mockData';
import { SecurityScan, AttackTimelineItem, MetricCardData } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState<boolean>(false);
  const [isNewScanOpen, setIsNewScanOpen] = useState<boolean>(false);
  const [selectedScan, setSelectedScan] = useState<SecurityScan | null>(null);
  const [selectedAttack, setSelectedAttack] = useState<AttackTimelineItem | null>(null);

  // Search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Keyboard shortcut: Cmd+B / Ctrl+B to toggle sidebar collapse
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setSidebarCollapsed((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Data states
  const [metrics, setMetrics] = useState<MetricCardData[]>(INITIAL_METRICS);
  const [timeline, setTimeline] = useState<AttackTimelineItem[]>(INITIAL_ATTACK_TIMELINE);
  const [scans, setScans] = useState<SecurityScan[]>(INITIAL_SCANS);

  // Handle new scan addition
  const handleScanComplete = (newScan: SecurityScan) => {
    setScans((prev) => [newScan, ...prev]);

    // Update KPI metrics
    setMetrics((prev) =>
      prev.map((m) => {
        if (m.id === 'scans') {
          const count = parseInt(m.value) + 1;
          return { ...m, value: count.toString() };
        }
        if (m.id === 'leaks' && newScan.leaks > 0) {
          const count = parseInt(m.value) + newScan.leaks;
          return { ...m, value: count.toString() };
        }
        if (m.id === 'secure' && newScan.status === 'Secure') {
          const count = parseInt(m.value) + 1;
          return { ...m, value: count.toString() };
        }
        return m;
      })
    );

    // Auto-open scan detail drawer to review the freshly audited prompt
    setSelectedScan(newScan);
  };

  return (
    <div className="flex h-screen w-screen bg-black text-white overflow-hidden antialiased select-none font-sans">
      {/* Left Sidebar */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        onOpenNewScan={() => setIsNewScanOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-black relative">
        {/* Top Header */}
        <Header
          currentTab={currentTab}
          onOpenNewScan={() => setIsNewScanOpen(true)}
          onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />

        {/* Dynamic View rendering */}
        <div className="flex-1 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
          {currentTab === 'overview' && (
            <div className="relative">
              {/* Top Row: 4 Metric Cards */}
              <MetricCards metrics={metrics} />

              {/* Middle Row: Security Score + Attack Timeline */}
              <section
                id="middle-analytics-row"
                className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#181818]"
              >
                {/* Left Card: Security Score */}
                <SecurityScoreCard
                  score={65}
                  onViewAll={() => setCurrentTab('reports')}
                />

                {/* Right Card: Attack Timeline */}
                <AttackTimelineCard
                  timeline={timeline}
                  onSelectAttack={(item) => setSelectedAttack(item)}
                  onViewAll={() => setCurrentTab('agent-guard')}
                />
              </section>

              {/* Bottom Row: Recent Activity Table */}
              <RecentActivityTable
                scans={scans}
                onSelectScan={(scan) => setSelectedScan(scan)}
                onViewAll={() => setSearchQuery('')}
                searchFilter={searchQuery}
              />
            </div>
          )}

          {currentTab === 'agent-guard' && <AgentGuardView />}
          {currentTab === 'reports' && <ReportsView />}
          {currentTab === 'teams' && <TeamsView />}
          {currentTab === 'settings' && <SettingsView />}
        </div>
      </main>

      {/* Modals & Drawers */}
      <DesignSystemModal
        isOpen={isDesignSystemOpen}
        onClose={() => setIsDesignSystemOpen(false)}
      />

      <NewScanModal
        isOpen={isNewScanOpen}
        onClose={() => setIsNewScanOpen(false)}
        onScanComplete={handleScanComplete}
      />

      <ScanDetailDrawer
        scan={selectedScan}
        onClose={() => setSelectedScan(null)}
      />

      <AttackDetailModal
        attack={selectedAttack}
        onClose={() => setSelectedAttack(null)}
      />
    </div>
  );
}
