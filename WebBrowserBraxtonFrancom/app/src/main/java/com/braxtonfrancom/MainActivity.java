package com.braxtonfrancom;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.AppCompatEditText;

import android.graphics.Color;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.LinearLayout;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    History obj = new History();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        final LinearLayout mainLayout = new LinearLayout(this);
        final LinearLayout navBarLayout = new LinearLayout(this);

        LinearLayout.LayoutParams navBarParams = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        navBarLayout.setLayoutParams(navBarParams);


        //WebView
        WebView webView = new WebView(this);
        webView.getSettings().getJavaScriptEnabled();
        webView.setWebViewClient(new WebViewClient());


        //backButton
        AppCompatButton backButton = new AppCompatButton(this);
        backButton.setText("<");
        LinearLayout.LayoutParams backButtonParams = new LinearLayout.LayoutParams(120, 110);
        backButton.setLayoutParams(backButtonParams);

        navBarLayout.addView(backButton);


        //forwardButton
        AppCompatButton forwardButton = new AppCompatButton(this);
        forwardButton.setText(">");
        LinearLayout.LayoutParams forwardButtonParams = new LinearLayout.LayoutParams(120, 110);
        forwardButton.setLayoutParams(forwardButtonParams);

        navBarLayout.addView(forwardButton);


        //Search bar
        final AppCompatEditText searchBar = new AppCompatEditText(this);
        searchBar.setTextColor(Color.WHITE);
        LinearLayout.LayoutParams searchBarParams = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        searchBarParams.weight = 2;
        searchBar.setLayoutParams(searchBarParams);
        navBarLayout.addView(searchBar);


        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String prevPage = obj.goBackwardOnePage();
                webView.loadUrl(prevPage);
                searchBar.setText(prevPage);
            }
        });

        forwardButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String nextPage = obj.goForwardOnePage();
                webView.loadUrl(nextPage);
                searchBar.setText(nextPage);
            }
        });


        //goButton
        AppCompatButton goButton = new AppCompatButton(this);
        goButton.setText("Go");
        LinearLayout.LayoutParams goButtonParams = new LinearLayout.LayoutParams(130, 110);  //LinearLayout.LayoutParams.WRAP_CONTENT
        goButton.setLayoutParams(goButtonParams);

        goButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String url = searchBar.getText().toString();
                obj.visit(url);
                webView.loadUrl(url);
            }
        });
//        goButton.setOnTouchListener(new View.OnTouchListener() {
//            @Override
//            public boolean onTouch(View view, MotionEvent motionEvent) {
//                if (motionEvent.getAction() == MotionEvent.ACTION_DOWN) {
//                    goButton.setBackgroundColor(Color.GREEN);
//                    return true;
//                }
//                else if (motionEvent.getAction() == MotionEvent.ACTION_UP) {
//                    goButton.setBackgroundColor(Color.WHITE);
//                }
//                return false;
//            }
//        });
        navBarLayout.addView(goButton);

        navBarLayout.setBackgroundColor(Color.DKGRAY);
        mainLayout.addView(navBarLayout);
        mainLayout.addView(webView);

        mainLayout.setOrientation(LinearLayout.VERTICAL);

        setContentView(mainLayout);
    }
}