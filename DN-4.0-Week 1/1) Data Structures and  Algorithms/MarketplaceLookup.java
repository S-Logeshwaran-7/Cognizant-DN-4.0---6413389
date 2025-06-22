package week1.algorithmsanddatastructures;

import java.util.Arrays;
import java.util.Comparator;

public class MarketplaceLookup
{
    public static void main(String[] args)
    {
        CatalogItem[] catalog = {
                new CatalogItem(301, "Camera", "Photography"),
                new CatalogItem(302, "T-Shirt", "Apparel"),
                new CatalogItem(303, "Smartwatch", "Electronics"),
                new CatalogItem(304, "Boots", "Footwear"),
                new CatalogItem(305, "Planner", "Office Supplies")
        };

        CatalogItem searchItem = catalog[2];
        int linearResult = Locator.linearSearch(catalog, searchItem.getCatalogId());
        System.out.println("Linear Search Result Index: " + linearResult);
        System.out.println("Item found: " + catalog[linearResult].toString());

        Arrays.sort(catalog, Comparator.comparingInt(CatalogItem::getCatalogId));
        int binaryResult = Locator.binarySearch(catalog, searchItem.getCatalogId());
        System.out.println("Binary Search Result Index: " + binaryResult);
        System.out.println("Item found: " + catalog[binaryResult].toString());
    }
}

class CatalogItem
{
    private int catalogId;
    private String name;
    private String type;

    public CatalogItem(int catalogId, String name, String type)
    {
        this.catalogId = catalogId;
        this.name = name;
        this.type = type;
    }

    public int getCatalogId()
    {
        return catalogId;
    }

    public String toString()
    {
        return catalogId + " - " + name + " - " + type;
    }
}

class Locator
{
    public static int linearSearch(CatalogItem[] catalog, int catalogId)
    {
        for (int i = 0; i < catalog.length; i++)
        {
            if (catalog[i].getCatalogId() == catalogId) return i;
        }
        return -1;
    }

    public static int binarySearch(CatalogItem[] catalog, int catalogId)
    {
        int low = 0, high = catalog.length - 1;
        while (low <= high)
        {
            int mid = low + (high - low) / 2;
            if (catalog[mid].getCatalogId() == catalogId) return mid;
            if (catalog[mid].getCatalogId() < catalogId) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}
