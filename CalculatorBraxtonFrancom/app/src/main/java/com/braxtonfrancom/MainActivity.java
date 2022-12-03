package com.braxtonfrancom;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.AppCompatTextView;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.GridLayout;
import android.widget.LinearLayout;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Stack;

public class MainActivity extends AppCompatActivity {

    @SuppressLint("ResourceAsColor")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Stack<String> operationList = new Stack<>();
        ArrayList<CalcButtonData> buttonData = new ArrayList<>();

        GridLayout calcLayout = new GridLayout(this);

        buttonData.add(new CalcButtonData("1", 1, 0,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("2", 1, 1,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("3", 1, 2,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("4", 2, 0,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("5", 2, 1,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("6", 2, 2,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("7", 3, 0,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("8", 3, 1,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("9", 3, 2,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("0", 4, 0,1, CalcButtonData.ButtonType.Number));
        buttonData.add(new CalcButtonData("Clear", 0, 3,1, CalcButtonData.ButtonType.Clear));
        buttonData.add(new CalcButtonData("Undo", 5, 2,2, CalcButtonData.ButtonType.Undo));
        buttonData.add(new CalcButtonData("=", 4, 1,2, CalcButtonData.ButtonType.Equals));
        buttonData.add(new CalcButtonData("Dump", 5, 0,2, CalcButtonData.ButtonType.Dump));
        buttonData.add(new CalcButtonData("/", 1, 3,1, CalcButtonData.ButtonType.Divide));
        buttonData.add(new CalcButtonData("*", 2, 3,1, CalcButtonData.ButtonType.Multiply));
        buttonData.add(new CalcButtonData("-", 3, 3,1, CalcButtonData.ButtonType.Subtract));
        buttonData.add(new CalcButtonData("+", 4, 3,1, CalcButtonData.ButtonType.Add));

        //numberDisplay
        AppCompatTextView numberDisplay = new AppCompatTextView(this);
        GridLayout.LayoutParams numberParams = new GridLayout.LayoutParams();
        numberParams.rowSpec = GridLayout.spec(0, 1.0f);
        numberParams.columnSpec = GridLayout.spec(0, 3, 1.0f);
        numberDisplay.setTextSize(32);
        numberDisplay.setTextColor(Color.WHITE);
        numberDisplay.setGravity(Gravity.CENTER);
        numberDisplay.setBackgroundColor(getResources().getColor(R.color.numberDisplayColor));
        numberDisplay.setLayoutParams(numberParams);
        calcLayout.addView(numberDisplay);


        buttonData.forEach(data -> {
            AppCompatButton button = new AppCompatButton(this);
            button.setTextSize(24);
            button.setText(data.text);
            if (data.col == 3 && data.row == 0) {
                button.setBackgroundColor(getResources().getColor(R.color.clearButton));
            }
            else {
                button.setBackgroundColor(getResources().getColor(R.color.buttonColor));
            }
            GridLayout.LayoutParams params = new GridLayout.LayoutParams();
            params.rowSpec = GridLayout.spec(data.row, 1.0f);
            params.columnSpec = GridLayout.spec(data.col, data.colSpan, 1.0f);
            button.setLayoutParams(params);
            button.setOnClickListener(view -> {
                if (data.type == CalcButtonData.ButtonType.Number) {
                    numberDisplay.setText(numberDisplay.getText() + data.text);
                }
                else if (data.type == CalcButtonData.ButtonType.Clear) {
                    numberDisplay.setText("");
                }
                else if (data.type == CalcButtonData.ButtonType.Undo) {
                    if (operationList.size() > 0) {
                        numberDisplay.setText(operationList.pop());
                    }
                    else {
                        numberDisplay.setText("");
                    }
                }
                else if (data.type == CalcButtonData.ButtonType.Equals) {
                    if (numberDisplay.getText() != "") {
                        operationList.push((String) numberDisplay.getText());
                        double answer = CalcLogic.evaluate((String) numberDisplay.getText());
                        numberDisplay.setText("" + answer);
                    }
                    else {
                        numberDisplay.setText("");
                    }
                }
                else if (data.type == CalcButtonData.ButtonType.Dump) {
                    final LinearLayout dumpPage = new LinearLayout(this);
                    final AppCompatTextView operationsHistory = new AppCompatTextView(MainActivity.this);
                    operationsHistory.setTextSize(26);
                    String fullPrintout = "";
                    for (int i = 0; i < operationList.size(); i++) {
                        fullPrintout += (String)operationList.get(i) + "\n";
                    }
                    operationsHistory.setText(fullPrintout);
                    AppCompatButton backButton = new AppCompatButton(this);
                    backButton.setTextSize(20);
                    backButton.setText("Back");
                    backButton.setOnClickListener(view1 -> {
                        setContentView(calcLayout);
                        operationList.clear();
                    });
                    dumpPage.addView(backButton);
                    dumpPage.addView(operationsHistory);

                    setContentView(dumpPage);
                }
                else if (data.type == CalcButtonData.ButtonType.Divide) {
                    numberDisplay.setText(numberDisplay.getText() + " / ");
                }
                else if (data.type == CalcButtonData.ButtonType.Multiply) {
                    numberDisplay.setText(numberDisplay.getText() + " * ");
                }
                else if (data.type == CalcButtonData.ButtonType.Add) {
                    numberDisplay.setText(numberDisplay.getText() + " + ");
                }
                else if (data.type == CalcButtonData.ButtonType.Subtract) {
                    numberDisplay.setText(numberDisplay.getText() + " - ");
                }
                else {
                    numberDisplay.setText("");
                }
            });
            calcLayout.addView(button);
        });
        setContentView(calcLayout);
    }
}