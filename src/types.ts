export type CapitalizationFrequency = 'yearly' | 'quarterly' | 'monthly' | 'daily';

export interface CalculatorInputs {
  initialCapital: number;
  interestRate: number;
  years: number;
  frequency: CapitalizationFrequency;
  monthlyDeposit: number;
}

export interface CalculationResult {
  totalAmount: number;
  totalInterest: number;
  yearlyData: Array<{
    year: number;
    amount: number;
    interest: number;
    principal: number;
  }>;
}