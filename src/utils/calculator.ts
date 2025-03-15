import { CapitalizationFrequency, CalculatorInputs, CalculationResult } from '../types';

const getFrequencyMultiplier = (frequency: CapitalizationFrequency): number => {
  switch (frequency) {
    case 'yearly': return 1;
    case 'quarterly': return 4;
    case 'monthly': return 12;
    case 'daily': return 365;
    default: return 1;
  }
};

export const calculateCompoundInterest = ({
  initialCapital,
  interestRate,
  years,
  frequency,
  monthlyDeposit
}: CalculatorInputs): CalculationResult => {
  const frequencyMultiplier = getFrequencyMultiplier(frequency);
  const rate = interestRate / 100;
  const ratePerPeriod = rate / frequencyMultiplier;
  
  let yearlyData = [];
  let totalDeposits = initialCapital;
  
  for (let year = 0; year <= years; year++) {
    // Calculate compound interest using the formula: A = P(1 + r/n)^(nt)
    const periodsElapsed = year * frequencyMultiplier;
    let amount = initialCapital * Math.pow(1 + ratePerPeriod, periodsElapsed);
    
    // Add regular deposits and their compound interest
    if (monthlyDeposit > 0 && year > 0) {
      // Formula for future value of regular payments:
      // PMT × (((1 + r/n)^(nt) - 1) / (r/n))
      const monthlyRate = ratePerPeriod / (frequency === 'monthly' ? 1 : 12);
      const monthsElapsed = year * 12;
      const depositsFV = monthlyDeposit * ((Math.pow(1 + monthlyRate, monthsElapsed) - 1) / monthlyRate);
      amount += depositsFV;
      totalDeposits = initialCapital + (monthlyDeposit * 12 * year);
    }

    yearlyData.push({
      year,
      amount: amount,
      principal: totalDeposits,
      interest: amount - totalDeposits
    });
  }
  
  const finalValues = yearlyData[yearlyData.length - 1];
  
  return {
    totalAmount: finalValues.amount,
    totalInterest: finalValues.interest,
    yearlyData
  };
};