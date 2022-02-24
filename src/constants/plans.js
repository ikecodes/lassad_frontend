const plans = [
  {
    type: 'Starter',
    min: '100 USD',
    max: '499 USD',
    profit: '5% profit 24hours',
    commisson: 'Daily',
    daily: 'Immediately',
  },
  {
    type: 'Bronze',
    min: '500  USD',
    max: '4999 USD',
    profit: '30%',
    commisson: '5%',
    daily: '1.5%',
  },
  {
    type: 'Silver',
    min: '5000 USD',
    max: '19999 USD',
    profit: '35%',
    commisson: '5%',
    daily: '1.75%',
  },
  {
    type: 'Diamond',
    min: '2000 USD',
    max: '49999 USD',
    profit: '40%',
    commisson: '7.5%',
    daily: '2%',
  },
  {
    type: 'Gold',
    min: '50000 USD',
    max: '99999 USD',
    profit: '45%',
    commisson: '10%',
    daily: '2.5%',
  },
  {
    type: 'Platinum',
    min: '100000 USD',
    max: '499999 USD',
    profit: '50%',
    commisson: '12.5%',
    daily: '3%',
  },
];

export default plans;
