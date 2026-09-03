export type ScanStatus = 'Critical' | 'Vulnerable' | 'Secure';
export type AttackSeverity = 'Critical' | 'High' | 'Medium' | 'Low';
export type ModelName = 'Gemini Pro' | 'GPT-4o' | 'Claude Sonnet' | 'Claude Haiku' | 'GPT-4o mini';
export type ScanSource = 'Dashboard' | 'Github PR' | 'API';

export interface SecurityScan {
  id: string;
  status: ScanStatus;
  model: ModelName;
  source: ScanSource;
  leaks: number;
  health: number; // percentage or score
  date: string;
  promptName?: string;
  targetApp?: string;
  vulnerabilities?: {
    type: string;
    description: string;
    extractedTokens?: string;
    severity: AttackSeverity;
    remediation: string;
  }[];
}

export interface AttackTimelineItem {
  id: string;
  title: string;
  target: string;
  timestamp: string;
  severity: AttackSeverity;
  status: 'failed' | 'success'; // failed attack or successful attack
  description: string;
  payloadPrompt: string;
  mitigation: string;
}

export interface MetricCardData {
  id: string;
  label: string;
  value: string;
  delta: string;
  deltaType: 'positive' | 'negative';
  iconType: 'scan' | 'health' | 'leaks' | 'secure';
}

export interface DesignToken {
  category: string;
  name: string;
  cssVariable: string;
  value: string;
  description: string;
  type: 'color' | 'spacing' | 'typography' | 'shadow' | 'radius';
}
