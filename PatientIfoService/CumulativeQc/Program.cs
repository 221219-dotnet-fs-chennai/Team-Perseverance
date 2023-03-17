using System;
public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Program to find even or odd");
        int a=Convert.ToInt32(Console.ReadLine());
        while (a != 0)
        {
            if(a%2==0)
            {
              Console.WriteLine("Its even");

            }
            else
            {
              Console.WriteLine("Its odd");
            }   
          a = Convert.ToInt32(Console.ReadLine());
        }
    }
}