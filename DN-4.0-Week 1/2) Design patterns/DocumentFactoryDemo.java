package week1.designpatterns;

public class DocumentFactoryDemo
{

    interface File
    {
        void open();
    }

    static class TextFile implements File
    {
        public void open()
        {
            System.out.println("Opening Text File");
        }
    }

    static class PdfFile implements File
    {
        public void open()
        {
            System.out.println("Opening PDF File");
        }
    }

    static class SpreadsheetFile implements File
    {
        public void open()
        {
            System.out.println("Opening Spreadsheet File");
        }
    }

    abstract static class FileFactory
    {
        public abstract File createFile();
    }

    static class TextFileFactory extends FileFactory
    {
        public File createFile()
        {
            return new TextFile();
        }
    }

    static class PdfFileFactory extends FileFactory
    {
        public File createFile()
        {
            return new PdfFile();
        }
    }

    static class SpreadsheetFileFactory extends FileFactory
    {
        public File createFile()
        {
            return new SpreadsheetFile();
        }
    }

    public static void main(String[] args)
    {
        FileFactory textFactory = new TextFileFactory();
        File textFile = textFactory.createFile();
        textFile.open();

        FileFactory pdfFactory = new PdfFileFactory();
        File pdfFile = pdfFactory.createFile();
        pdfFile.open();

        FileFactory spreadsheetFactory = new SpreadsheetFileFactory();
        File spreadsheetFile = spreadsheetFactory.createFile();
        spreadsheetFile.open();
    }
}
