package com.braxtonfrancom;

import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;

public class History {

    private ArrayList<String> urls;

    private int index;
    private int next;
    private int previous;
    private int end;

    public History() {
        urls = new ArrayList<>();
        index = 0;
        next = index + 1;
        previous = index - 1;
    }

    public void visit(String url) {
        index++;
        next++;
        previous--;
        if (index < urls.size()) {
            urls.set(index, url);
        }
        else {
            urls.add(url);
        }
        end = index;
    }

    public String goForwardOnePage() {
        index = Math.min(index + 1, end);
        return urls.get(index - 1);
    }

    public String goBackwardOnePage() {
        index = Math.max(index - 1, 1);
        return urls.get(index - 1);
    }



//    private class HistoryNode {
//        String url;
//        HistoryNode next;
//        HistoryNode previous;
//    }
//
//    HistoryNode current;

//    public void visit(String url) {
//
//    }

//    public String goForwardOnePage() {
//        current = current.next;
//        return current.url;
//
//    }
//
//    public String goBackwardOnePage() {
//        current = current.previous;
//        return current.url;
//    }

}

