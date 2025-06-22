package week1.algorithmsanddatastructures;

public class InvestmentProjection
{
    public static void main(String[] args)
    {
        double principal = 10000;
        double interestRate = 0.08;
        int duration = 5;

        double projectedAmount = Calculator.compoundGrowth(principal, interestRate, duration);
        System.out.println("Projected Amount (Recursive): " + projectedAmount);
    }
}

class Calculator
{
    public static double compoundGrowth(double principal, double rate, int periods)
    {
        if (periods == 0) return principal;
        return compoundGrowth(principal, rate, periods - 1) * (1 + rate);
    }
}
