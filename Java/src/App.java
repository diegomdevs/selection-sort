import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Integer> unsortedList = new ArrayList<>();
        unsortedList.add(45);
        unsortedList.add(0);
        unsortedList.add(3);
        unsortedList.add(1);
        unsortedList.add(0);
        ArrayList<Integer> sortedList = selectionSort(unsortedList);
        System.out.println(sortedList);
    }

    public static ArrayList<Integer> selectionSort(ArrayList<Integer> list) {
        ArrayList<Integer> newList = new ArrayList<>();
        for (int i = list.size(); i != 0; i--) {
            int smallestItemIndex = findsSmallest(list);
            newList.add(list.remove(smallestItemIndex));
        }
        return newList;
    }

    public static int findsSmallest(ArrayList<Integer> list) {
        int smallestItemIndex = 0;
        int smallestItem = list.get(smallestItemIndex);

        for (int i = 0; i < list.size(); i++) {
            if (list.get(i) < smallestItem) {
                smallestItem = list.get(i);
                smallestItemIndex = i;
            }
        }
        return smallestItemIndex;
    }
}
