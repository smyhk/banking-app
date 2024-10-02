'use client';

import CountUp from 'react-countup';

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <p className="w-full">
      <CountUp
        duration={2.75}
        decimals={2}
        decimal="."
        prefix="$"
        end={amount}
      />
    </p>
  );
}
