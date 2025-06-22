package week1.designpatterns;

class AuditTrail
{
    // Singleton instance variable
    private static AuditTrail instance;

    // Private constructor to restrict instantiation
    private AuditTrail()
    {
        System.out.println("AuditTrail instance created.");
    }

    // Method to get the singleton instance
    public static AuditTrail getInstance()
    {
        if (instance == null)
        {
            instance = new AuditTrail();
        }
        return instance;
    }

    public void record(String event)
    {
        System.out.println("Audit Record: " + event);
    }
}

public class SingletonDemo
{

    public static void main(String[] args)
    {
        AuditTrail audit1 = AuditTrail.getInstance();
        AuditTrail audit2 = AuditTrail.getInstance();

        audit1.record("User logged in.");
        audit2.record("User performed an action.");

        if (audit1 == audit2)
        {
            System.out.println("Both audit instances are the same.");
        }
        else
        {
            System.out.println("Different audit instances exist.");
        }
    }
}
