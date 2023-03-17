namespace QC;

class Program{
    public static void Main() {
        String str = "abca";
        String newStr = new String(str.Distinct().ToArray());
        Console.WriteLine(newStr);
    }
}